import { NextRequest } from "next/server";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
	try {
        const body = await req.json();
		const msg = {
			to: ["andrew.ladd1993@gmail.com"], // Change to your recipient
			// to: ["andrew.ladd1993@gmail.com"], // Change to your recipient
			from: "andrew.laddstudio@gmail.com", // Change to your verified sender
			subject: "ALStudio Contact Form",
			html: `
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
          `,
		};
		await sgMail.send(msg);
		return new Response("email created", { status: 201 });
	} catch (error) {
		console.error(error);
		return new Response("email failed", { status: 500 });
	}
}
