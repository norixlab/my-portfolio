import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { thankYouTemplate } from "./templates/thank-you";
import { orderTemplate } from "./templates/order";

interface SendMailParams {
  to: string;
  subject: string;
  body: string;
}


/**
 * Sends an email using nodemailer.
 * @param {SendMailParams} options
 * @returns {Promise<void>}
 */
export async function sendMail({ to, subject, body }: SendMailParams) {
  const transport = nodemailer.createTransport({
    host: "smtp.zeptomail.com",
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    await transport.verify();
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    await transport.sendMail({
      from: 'portfolio@taydakov.com',
      to,
      subject,
      html: body,
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * Compiles a "Thank You" email template using Handlebars.
 * 
 * @param {string} name - The recipient's name to be included in the email.
 * @returns {string} - The compiled HTML email body.
 */
export function compileThankYouTemplate(name: string) {
  const template = handlebars.compile(thankYouTemplate);
  const htmlBody = template({ name: name.toUpperCase() });
  return htmlBody;
}

/**
 * Compiles an "Order" email template using Handlebars.
 * 
 * @param {string} name - The recipient's name to be included in the email.
 * @param {string} email - The recipient's email to be included in the email.
 * @param {string} body - The body of the order to be included in the email.
 * @returns {string} - The compiled HTML email body.
 */
export function compileOrderTemplate(
  name: string,

  email: string,
  body: string
) {
  const template = handlebars.compile(orderTemplate);
  const htmlBody = template({ name, email, body });
  return htmlBody;
}
