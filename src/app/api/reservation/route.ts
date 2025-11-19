import { NextResponse } from "next/server";
import { Resend } from "resend";
import { reservationSchema } from "@/lib/validations";
import { SITE_CONFIG } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate data
    const validatedData = reservationSchema.parse(body);

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.RESEND_TO_EMAIL || SITE_CONFIG.email],
      subject: `New Reservation Request - ${validatedData.name}`,
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
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Reservation Request</h1>
                <p>You've received a new reservation request for ${SITE_CONFIG.name}:</p>
              </div>
              <div class="content">
                <h2>Reservation Details</h2>
                <div class="info-row">
                  <span class="label">Name:</span> ${validatedData.name}
                </div>
                <div class="info-row">
                  <span class="label">Email:</span> ${validatedData.email}
                </div>
                <div class="info-row">
                  <span class="label">Phone:</span> ${validatedData.phone}
                </div>
                <div class="info-row">
                  <span class="label">Date:</span> ${validatedData.date}
                </div>
                <div class="info-row">
                  <span class="label">Time:</span> ${validatedData.time}
                </div>
                <div class="info-row">
                  <span class="label">Number of People:</span> ${validatedData.people}
                </div>
                ${validatedData.message ? `
                  <div class="info-row">
                    <span class="label">Message:</span><br/>
                    ${validatedData.message}
                  </div>
                ` : ''}
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
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send reservation" },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: [validatedData.email],
      subject: "Reservation Confirmation - ${SITE_CONFIG.name}",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #ffb03b; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .button { display: inline-block; background: #ffb03b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Reservation! 🎉</h1>
              </div>
              <div class="content">
                <p>Dear ${validatedData.name},</p>
                <p>Thank you for choosing <strong>${SITE_CONFIG.name}</strong>!</p>
                <p>We have received your reservation request for:</p>
                <ul>
                  <li><strong>Date:</strong> ${validatedData.date}</li>
                  <li><strong>Time:</strong> ${validatedData.time}</li>
                  <li><strong>Party Size:</strong> ${validatedData.people} people</li>
                </ul>
                <p>We will contact you shortly via phone or email to confirm your reservation.</p>
                <p>If you have any questions, feel free to contact us:</p>
                <p>📞 ${SITE_CONFIG.phone}<br/>
                📧 ${SITE_CONFIG.email}</p>
                <p>We look forward to serving you!</p>
                <p style="margin-top: 30px;">Best regards,<br/>
                <strong> ${SITE_CONFIG.name} Team</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Reservation request sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reservation error:", error);
    
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
