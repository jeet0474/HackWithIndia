import nodemailer from 'nodemailer';
import path from 'path';
import ejs from 'ejs';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'dharmeshkota123@gmail.com',
        pass: process.env.mailerAuthPass
    }
});

export const renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../mailTemplates', relativePath),
        data,
        function(err, template) {
            if (err) {
                console.log('Error in rendering the template: ', err);
                return;
            }

            mailHTML = template;
        }
    );
    return mailHTML;
}