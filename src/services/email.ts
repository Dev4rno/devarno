import EmailClient from "@sendgrid/mail";

EmailClient.setApiKey("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");

export interface I_Email {
    subject: string;
    html: string;
    to: string;
    from?: string;
}

export const sendEmailService = async (params: I_Email) => {
    try {
        await EmailClient.send({
            ...params,
            from: `DevArno <${process.env.EMAIL_FROM}>`,
        });
    } catch (error) {
        console.error({ error });
        throw new Error("Email could not be sent, please try again later");
    }
};
