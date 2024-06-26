import { clientEnquiryEmail } from "@/src/strings";
import { NextApiRequest, NextApiResponse } from "next";
import { Client, LibraryResponse, SendEmailV3_1 } from "node-mailjet";

const mailjet = new Client({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            // Deconstruct client details
            const { name, email, subject, message } = req.body;

            // Construct target enquiry (Client > DevArno)
            const targetEnquiryData: SendEmailV3_1.Body = {
                Messages: [
                    {
                        From: { Email: "DevArno <alex@devarno.com>" },
                        To: [{ Email: "DevArno <alex@devarno.com>" }],
                        Subject: `${subject}`,
                        HTMLPart: `
                            <div>
                                <h4 style="font-size: 20px;">New Enquiry from ${name} [${email}]</h4>
                                <p style="font-size: 16px; margin-top: 12px;">${message}</p>
                            </div>
                        `,
                    },
                ],
            };

            // Send target enquiry (Client > DevArno)
            const targetEnquiryResult: LibraryResponse<SendEmailV3_1.Response> = await mailjet
                .post("send", { version: "v3.1" })
                .request(targetEnquiryData);

            // Get target enquiry result
            const targetEnquiryResultBody = targetEnquiryResult.body.Messages[0];

            // Construct author response (DevArno > Client)
            const authorResponseData: SendEmailV3_1.Body = {
                Messages: [
                    {
                        From: { Email: "DevArno <alex@devarno.com>" },
                        To: [{ Email: `${name} <${email}>` }],
                        Subject: `RE: ${subject}`,
                        HTMLPart: clientEnquiryEmail({ name, message }),
                        TextPart: message,
                    },
                ],
            };

            // Send author response (DevArno > Client)
            const authorResponseResult: LibraryResponse<SendEmailV3_1.Response> = await mailjet
                .post("send", { version: "v3.1" })
                .request(authorResponseData);

            // Get author response result
            const authorResponseResultBody = authorResponseResult.body.Messages[0];

            // Handle results
            if (targetEnquiryResultBody.Status === "success" && authorResponseResultBody.Status === "success") {
                res.status(200).json({ msg: "Enquiry sent successfully!" });
            } else {
                res.status(500).json({ err: "Something went wrong" });
            }
        } catch (error) {
            console.log({ error });
            res.status(500).json({ err: "Enquiry could not be sent, please try again later" });
        }
    }
}
