import { sendEmailService } from "@/src/services/email";
import { shortID } from "@/src/utils";

const redText = `style="color:#FF4500;"`;

const enquiryEmail = ({ id, name, email, message }) =>
    `<h4>New Enquiry #${id}</h4><h4>Sender: ${name} - ${email}</h4><h3 ${redText}>${message.replaceAll(
        "\n",
        "<br>"
    )}</h3>`;

const enquiryConfirmedEmail = ({ id, name, message }) =>
    `<h3>Hi ${name},</h3><h4>Thank you for interest in DevArno. Your enquiry has been submitted with ID #${id} and we will be in touch with you very shortly!</h4><h4>Your message:</h4><h3 ${redText}>${message.replaceAll(
        "\n",
        "<br>"
    )}</h3><h4>Have a great day!</h4><h3>Alex Arno</h3>`;

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, email, subject, message } = req.body;
            const id = shortID();

            // Send to DevArno
            await sendEmailService({
                to: process.env.EMAIL_FROM,
                subject: `Enquiry #${id}: ${subject}`,
                html: enquiryEmail({ id, name, email, message }),
                from: email,
            });

            // Send confirmation to user
            await sendEmailService({
                to: email,
                subject: `DevArno Enquiry #${id}: ${subject}`,
                html: enquiryConfirmedEmail({ id, name, message }),
            });

            res.status(200).json({ msg: `Enquiry #${id} submitted successfully!` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ err: "Something went wrong here. Please try again later." });
        }
    } else {
        res.status(500).json({ err: "Not allowed, sorry" });
    }
}
