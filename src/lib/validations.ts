import { z } from "zod";

// Reservation Form Schema
export const reservationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, "Invalid phone number format"),
  date: z
    .string()
    .min(1, "Please select a date")
    .refine(
      (date) => new Date(date) > new Date(),
      "Date must be in the future"
    ),
  time: z
    .string()
    .min(1, "Please select a time")
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  people: z
    .number()
    .int()
    .min(1, "At least 1 person required")
    .max(20, "Maximum 20 people per reservation"),
  message: z
    .string()
    .max(500, "Message is too long")
    .optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;

// Contact Form Schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Newsletter Schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
