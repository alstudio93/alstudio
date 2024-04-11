import { NextRequest } from "next/server";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
	try {
        const body = await req.json();
        const {
            fullName,
            email,
            websiteType,
            message
        } = body;

        if (!fullName || !email || !websiteType || !message) {
            return new Response("Please fill out all fields", { status: 400 });
        }

		const msg = {
			to: ["andrew.ladd1993@gmail.com", "andrew.laddstudio@gmail.com"], // Change to your recipient
			from: "andrew.laddstudio@gmail.com", // Change to your verified sender
			subject: "ALStudio Contact Form",
			html: `
            <html>
                <head>
                    <style>
                        body { font-family: 'Nunito', sans-serif; color: #333; }
                        .container { width: 100%; max-width: 600px; margin: 0 auto; }
                        .button { background-color: #152042; color: #ffffff; padding: 10px 20px; text-align: center; display: inline-block; border-radius: 30px; text-decoration: none; }
                        .field { margin-bottom: 20px; }
                        .field-label { display: block; margin-bottom: 5px; color: #333; }
                        .field-input { width: 100%; padding: 10px; border-radius: 15px; border: 1px solid #ccc; }
                        .field-select { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
                        .field-textarea { width: 100%; padding: 10px; border-radius: 10px; border: 1px solid #ccc; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>Contact Form Submission</h2>
                        <div class="field">
                            <span class="field-label">Full Name:</span>
                            <span>${body.fullName}</span>
                        </div>
                        <div class="field">
                            <span class="field-label">Email Address:</span>
                            <span>${body.email}</span>
                        </div>
                        <div class="field">
                            <span class="field-label">Type of Website Needed:</span>
                            <span>${body.websiteType}</span>
                        </div>
                        <div class="field">
                            <span class="field-label">Message:</span>
                            <div>${body.message}</div>
                        </div>
                    </div>
                </body>
            </html>
          `,
		};
		
        const clientMsg = {
            to: body.email, // Change to your recipient
            from: "andrew.laddstudio@gmail.com", // Change to your verified sender
            subject: "Thanks for Connecting with ALStudio!",
            html: `
            <html>
            <head>
            <style>
                    body { font-family: 'Nunito', sans-serif; color: #333; background-color: #f4f4f4; margin: 0; padding: 20px; }
                    h1 { color: #152042; font-size: 18px; }
                    .container { width: 100%; max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
                    .button { background-color: #152042; color: #ffffff; padding: 12px 25px; text-align: center; display: inline-block; border-radius: 5px; text-decoration: none; font-size: 16px; }
                    .field { margin-bottom: 10px; }
                    .field-label { display: block; font-weight: bold; margin-bottom: 5px; color: #333; font-size: 16px; }
                    .field-input, .field-select, .field-textarea { width: 100%; padding: 12px; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; background-color: #fff; }
                    p { font-size: 16px; line-height: 1.5; }
                </style>
            </head>
            <body>
                <h1>Thank you for reaching out to ALStudio in regards to your website inquiry!</h1>
                <p>We will be in touch with you shortly to discuss your project further. Below is a recap of the information you provided. Feel free to respond to this email if you wish to make any updates.</p>
                <div class="container">
                    <div class="field">
                        <span class="field-label">Full Name:</span>
                        <span>${body.fullName}</span>
                    </div>
                    <div class="field">
                    <span class="field-label">Email Address:</span>
                        <span>${body.email}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Type of Website Needed:</span>
                        <span>${body.websiteType}</span>
                    </div>
                    <div class="field">
                        <span class="field-label">Message:</span>
                        <div>${body.message}</div>
                        </div>
                        </div>
                        </body>
                        </html>
            `,
        };
        
        // Message to send to the owner of the website
        await sgMail.send(msg);

        // Message to send to the client
		await sgMail.send(clientMsg);
		return new Response("email created", { status: 201 });
	} catch (error) {
		console.error(error);
		return new Response("email failed", { status: 500 });
	}
}
