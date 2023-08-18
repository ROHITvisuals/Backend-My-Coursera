import { createTransport } from "nodemailer";
import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service:process.env.SMPT_SERVICE,
    auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD
    }
  });

  await transporter.sendMail({
    from:process.env.SMPT_MAIL,
    to,
    subject,
    text,
  });
};


export const sendEmailll = async (to, subject, text) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};
