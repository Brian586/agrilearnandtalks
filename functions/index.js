/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const admin = require('firebase-admin');
const nodemailer = require('nodemailer');


setGlobalOptions({ maxInstances: 10 });

admin.initializeApp();
// const db = admin.firestore();

// =======================AUTOMATED EMAIL====================== //

async function sendCustomEmail(to, subject, message, emailPassword, actions) {
    try {
        const email = 'elizabeth.juma@agrilearnandtalks.org';
        const password = emailPassword;
        const host = 'mx4125.usc1.mymailhosting.com';
        const port = 587;

        const appLogo = 'https://firebasestorage.googleapis.com/v0/b/betheyoucommunity.appspot.com/o/logo.png?alt=media&token=983631eb-6605-4706-81ed-339f6e8449ea';
        const supportEmail = 'info@agrilearnandtalks.org';

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: host, // SMTP server host
            port: port, // SMTP server port
            secure: port === 465, // true for 465, false for other ports
            auth: {
                user: email,
                pass: password, //  email password
            },
        });

        const actionsHtml = actions ? `
            <tr style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                <td class="content-block" itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 22px; text-align: center;" valign="top">
                    <a href="${actions.buttonUrl}" itemprop="url" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: .8125rem; color: #FFF; text-decoration: none; font-weight: 400; text-align: center; cursor: pointer; display: inline-block; border-radius: .25rem; text-transform: capitalize; background-color: #025f93; margin: 0; border-color: #025f93; border-style: solid; border-width: 1px; padding: .5rem .9rem;">${actions.buttonText}</a>
                </td>
            </tr>
            ` : ``;

        await transporter.sendMail({
            from: `Liz Juma - Agri Learn and Talks <${email}>`,
            to: to,
            subject: subject,
            text: message,
            html: `
                <table class="body-wrap" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: transparent; margin: 0;">
                    <tr style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
                        <td class="container" width="600" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
                            <div class="content" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                                <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; margin: 0; border: none;">
                                    <tr style="font-family: 'Roboto', sans-serif; font-size: 14px; margin: 0;">
                                        <td class="content-wrap" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; color: #495057; font-size: 14px; vertical-align: top; margin: 0;padding: 30px; box-shadow: 0 3px 15px rgba(30,32,37,.06); ;border-radius: 7px; background-color: #fff;" valign="top">
                                            <meta itemprop="name" content="${subject}" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" />
                                            <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                                <tr style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                                    <td class="content-block" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                                        <div style="text-align: center;margin-bottom: 15px;">
                                                            <img src="${appLogo}" alt="" height="100">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                                    <td class="content-block" style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 24px; vertical-align: top; margin: 0; padding: 0 0 10px;  text-align: center;" valign="top">
                                                        <h4 style="font-family: 'Roboto', sans-serif; font-weight: 500;">${subject}</h4>
                                                    </td>
                                                </tr>
                                                <tr style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                                    <td class="content-block" style="font-family: 'Roboto', sans-serif; color: #878a99; box-sizing: border-box; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 26px; text-align: center;" valign="top">
                                                        <p style="margin-bottom: 0;">${message}</p>
                                                    </td>
                                                </tr>
                                            ${actionsHtml}
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <div style="text-align: center; margin: 25px auto 0px auto;font-family: 'Roboto', sans-serif;">
                                    <h4 style="font-weight: 500; line-height: 1.5;font-family: 'Roboto', sans-serif;">Need Help ?</h4>
                                    <p style="color: #878a99; line-height: 1.5;">Please send feedback or bug info to <a href="mailto:${supportEmail}" style="font-weight: 500;">${supportEmail}</a></p>
                                    <p style="font-family: 'Roboto', sans-serif; font-size: 14px;color: #98a6ad; margin: 0px;">2026 Agri Learn and Talks</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                `,
        });

        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// =======================AUTOMATED EMAIL====================== //


// =======================SEND CONTACT EMAIL (WEBSITE USERS)====================== //

exports.sendContactEmail = onRequest({ cors: true, secrets: ["EMAIL_PASSWORD"], }, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        const emailPassword = process.env.EMAIL_PASSWORD;

        if (!emailPassword) {
            return res.status(500).json({ error: 'Email password not configured' });
        }

        const appDomain = 'agrilearnandtalks.org';

        const fullMessage = `You have received a new contact message from ${name}:<br><br>Email: ${email}<br>Phone: ${phone}<br><br>${message}`;

        await sendCustomEmail(`info@${appDomain},elizabeth.juma@${appDomain}`, `Contact Form: ${name}`, fullMessage, emailPassword, null);

        res.json({ message: 'Contact email sent successfully.' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// =======================SEND CONTACT EMAIL (WEBSITE USERS)====================== //