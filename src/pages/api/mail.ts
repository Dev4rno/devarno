import mailjet from "@/src/lib/mailjet";
import { clientEnquiryEmail } from "@/src/strings";
import { NextApiRequest, NextApiResponse } from "next";
import { LibraryResponse, SendEmailV3_1 } from "node-mailjet";

// ◉=●=○=◌=◍=◎=⦿=⦾=⦻=⦽=⦼=⦿=⦾=⦻=⦽=⦼=◉=●=○=◌=◍=◎=⦿=⦾=⦻=⦽=⦼=⦿=⦾=⦻=⦽=⦼

const setCors = (req: NextApiRequest, res: NextApiResponse) => {
    // Define headers
    const headers: { [key: string]: string } = {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": req.headers.origin || "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers":
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    };
    // Assign headers
    Object.keys(headers).map((x: string) => res.setHeader(x, headers[x]));
    // Handle OPTIONS
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return true;
    }
    return false;
};

// ◉=●=○=◌=◍=◎=⦿=⦾=⦻=⦽=⦼=⦿=⦾=⦻=⦽=⦼=◉=●=○=◌=◍=◎=⦿=⦾=⦻=⦽=⦼=⦿=⦾=⦻=⦽=⦼

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (setCors(req, res)) return; // Stop further processing for OPTIONS request
    if (req.method === "POST") {
        try {
            // Deconstruct request body
            const { name, email, subject, message } = req.body;
            // Send developer basic enquiry
            const developerEmailData: SendEmailV3_1.Body = {
                Messages: [
                    {
                        From: { Email: "alex@devarno.com", Name: "DevArno" },
                        To: [{ Email: "alex@devarno.com", Name: "DevArno" }],
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
            // Await developer email result
            const developerEmailResult: LibraryResponse<SendEmailV3_1.Response> = await mailjet
                .post("send", { version: "v3.1" })
                .request(developerEmailData);
            // Extract developer email result data
            const developerEmailResultBody = developerEmailResult.body.Messages[0];
            // Send enquiry author confirmation email
            const confirmationEmailData: SendEmailV3_1.Body = {
                Messages: [
                    {
                        From: { Email: "alex@devarno.com", Name: "DevArno" },
                        To: [{ Email: email, Name: name }],
                        Subject: `RE: ${subject}`,
                        HTMLPart: clientEnquiryEmail({ name, message }),
                        TextPart: message,
                    },
                ],
            };
            // Await confirmation email result
            const confirmationEmailResult: LibraryResponse<SendEmailV3_1.Response> = await mailjet
                .post("send", { version: "v3.1" })
                .request(confirmationEmailData);
            // Extract developer email result data
            const confirmationEmailResultBody = confirmationEmailResult.body.Messages[0];
            // Handle results
            if (developerEmailResultBody.Status === "success" && confirmationEmailResultBody.Status === "success") {
                res.status(200).json({ msg: "Enquiry sent successfully!" });
            } else {
                res.status(500).json({ err: "Something went wrong" });
            }
        } catch (error) {
            console.error("Error processing enquiry:", error);
            res.status(500).json({ err: "Enquiry could not be sent, please try again later" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
