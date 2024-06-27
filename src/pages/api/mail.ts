// import mailjet from "@/src/lib/mailjet";
// import { clientEnquiryEmail } from "@/src/strings";
// import { NextApiRequest, NextApiResponse } from "next";
// import { LibraryResponse, SendEmailV3_1 } from "node-mailjet";

// import middlewareFunction from "../../lib/middleware";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     middlewareFunction(req, res, async () => {
//         if (req.method === "POST") {
//             try {
//                 // Deconstruct client details
//                 const { name, email, subject, message } = req.body;

//                 // Construct target enquiry (Client > DevArno)
//                 const targetEnquiryData: SendEmailV3_1.Body = {
//                     Messages: [
//                         {
//                             From: { Email: "DevArno <alex@devarno.com>" },
//                             To: [{ Email: "DevArno <alex@devarno.com>" }],
//                             Subject: `${subject}`,
//                             HTMLPart: `
//                             <div>
//                                 <h4 style="font-size: 20px;">New Enquiry from ${name} [${email}]</h4>
//                                 <p style="font-size: 16px; margin-top: 12px;">${message}</p>
//                             </div>
//                         `,
//                         },
//                     ],
//                 };

//                 // Send target enquiry (Client > DevArno)
//                 const targetEnquiryResult: LibraryResponse<SendEmailV3_1.Response> = await mailjet
//                     .post("send", { version: "v3.1" })
//                     .request(targetEnquiryData);

//                 // Get target enquiry result
//                 const targetEnquiryResultBody = targetEnquiryResult.body.Messages[0];

//                 // Construct author response (DevArno > Client)
//                 const authorResponseData: SendEmailV3_1.Body = {
//                     Messages: [
//                         {
//                             From: { Email: "DevArno <alex@devarno.com>" },
//                             To: [{ Email: `${name} <${email}>` }],
//                             Subject: `RE: ${subject}`,
//                             HTMLPart: clientEnquiryEmail({ name, message }),
//                             TextPart: message,
//                         },
//                     ],
//                 };

//                 // Send author response (DevArno > Client)
//                 const authorResponseResult: LibraryResponse<SendEmailV3_1.Response> = await mailjet
//                     .post("send", { version: "v3.1" })
//                     .request(authorResponseData);

//                 // Get author response result
//                 const authorResponseResultBody = authorResponseResult.body.Messages[0];

//                 // Handle results
//                 if (targetEnquiryResultBody.Status === "success" && authorResponseResultBody.Status === "success") {
//                     res.status(200).json({ msg: "Enquiry sent successfully!" });
//                 } else {
//                     res.status(500).json({ err: "Something went wrong" });
//                 }
//             } catch (error) {
//                 console.log({ error });
//                 res.status(500).json({ err: "Enquiry could not be sent, please try again later" });
//             }
//         }
//     });
// }

// /src/pages/api/mail.ts

import mailjet from "@/src/lib/mailjet";
import { clientEnquiryEmail } from "@/src/strings";
import { NextApiRequest, NextApiResponse } from "next";
import { LibraryResponse, SendEmailV3_1 } from "node-mailjet";

const setCors = (res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    setCors(res);

    console.log("Incoming request:", req.method, req.body);

    try {
        if (req.method === "POST") {
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

            console.log({
                authorResponseResult,
                targetEnquiryResult,
            });

            // Get author response result
            const authorResponseResultBody = authorResponseResult.body.Messages[0];

            // Handle results
            if (targetEnquiryResultBody.Status === "success" && authorResponseResultBody.Status === "success") {
                res.status(200).json({ msg: "Enquiry sent successfully!" });
            } else {
                res.status(500).json({ err: "Something went wrong" });
            }
        } else {
            // Respond with 405 Method Not Allowed for non-POST requests
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error("Error processing enquiry:", error);
        res.status(500).json({ err: "Enquiry could not be sent, please try again later" });
    }
}
