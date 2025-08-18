import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587, // or 465 for SSL
  auth: {
    user: 'apikey', // DO NOT CHANGE THIS
    pass: process.env.SENDGRID_API_KEY // use your api key env variable
  }
});

export const sendSummaryEmail = async (recipients, summary) => {
  const mailOptions = {
    from: process.env.email_user, // must be authenticated in SendGrid Sender Identity
    to: recipients.join(','),
    subject: "Meeting Summary",
    text: summary
  };
  return transporter.sendMail(mailOptions);
};
