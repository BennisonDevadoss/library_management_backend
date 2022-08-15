import { UserInstance } from '../types';
import nodemailer from 'nodemailer';

const options = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true
};

const mailer = nodemailer.createTransport(options);

function sendInvitation(user: UserInstance) {
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: user.email,
    subject: 'LIBRARY MANAGEMENT Portal Login Credentials',
    /*eslint-disable */
    html: `<p>Dear ${user.name}, </p>
       <p> Congratulations! Your LIB_MANAGEMENT login credentials are created as follows,</p>
       <p>Email: ${user.email}</p>
       <p>Password: ${user.password}</p>
       <p>Please click <a href="${process.env.SIGNIN_URL}">here</a> to login.</p>
       <p>Kindly change your password after the first login.</p>
       <span>Regards,</span> <br/> <span>Team - ACC</span>`
  };
  mailer.sendMail(mailOptions);
}

export { sendInvitation };
