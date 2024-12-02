import { compileOrderTemplate, compileThankYouTemplate, sendMail } from "@/utils/mail-sendler";
import { NextResponse, NextRequest } from "next/server";

/**
 * Handles POST requests to send emails.
 * 
 * Extracts sender information from the request, compiles email templates,
 * and sends emails to both the admin and the user.
 * 
 * @param {NextRequest} req - The incoming request object containing email data.
 * @returns {Promise<NextResponse>} - A response indicating the success or failure of the email sending process.
 */
export const POST = async (req: NextRequest) => {
  try {
    const { from, name, subject, body } = await req.json();
    const adminEmail = process.env.ADMIN_EMAIL;

    await sendMail({ to: adminEmail!, subject: subject, body: compileOrderTemplate(name, from, body) }); // send mail to admin
    await sendMail({ to: from, subject: subject, body: compileThankYouTemplate(name) }); // send mail to user

    return NextResponse.json("Mail send success", { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
};
