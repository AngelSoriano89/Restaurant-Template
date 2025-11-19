import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import { SITE_CONFIG } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate data
    const validatedData = contactSchema.parse(body);

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.RESEND_TO_EMAIL || SITE_CONFIG.email],
      subject: `New Contact Message: ${validatedData.subject} - ${SITE_CONFIG.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #ffb03b; color: white; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; margin-top: 20px; border-radius: 8px; }
              .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 4px; }
              .label { font-weight: bold; color: #ffb03b; }
              .message-box { background: white; padding: 20px; border-left: 4px solid #ffb03b; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Message</h1>
              </div>
              <div class="content">
                <p>You've received a new message from the contact form on ${SITE_CONFIG.name}:</p>
                <div class="info-row">
                  <span class="label">From:</span> ${validatedData.name}
                </div>
                <div class="info-row">
                  <span class="label">Email:</span> ${validatedData.email}
                </div>
                <div class="info-row">
                  <span class="label">Subject:</span> ${validatedData.subject}
                </div>
                <div class="message-box">
                  <span class="label">Message:</span>
                  <p>${validatedData.message.replace(/\n/g, '<br/>')}</p>
                </div>
                <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 4px;">
                  <strong>⚡ Reply to:</strong> 
                  <a href="mailto:${validatedData.email}">${validatedData.email}</a>
                </p>
              </div>
              <div class="footer">
                <p>${SITE_CONFIG.name}</p>
                <p>${SITE_CONFIG.address}</p>
                <p>${SITE_CONFIG.phone} | ${SITE_CONFIG.email}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: validatedData.email,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: [validatedData.email],
      subject: "We received your message - ${SITE_CONFIG.name}",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #ffb03b; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Contacting Us! 📧</h1>
              </div>
              <div class="content">
                <p>Dear ${validatedData.name},</p>
                <p>Thank you for reaching out to <strong>${SITE_CONFIG.name}</strong>!</p>
                <p>We have received your message and will get back to you as soon as possible.</p>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Your message:</strong></p>
                  <p style="color: #666;">"${validatedData.message}"</p>
                </div>
                <p>If you need immediate assistance, please don't hesitate to call us:</p>
                <p>📞 ${SITE_CONFIG.phone}<br/>
                📧 ${SITE_CONFIG.email}</p>
                <p style="margin-top: 30px;">Best regards,<br/>
                <strong>${SITE_CONFIG.name} Team</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Contact message sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact error:", error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
