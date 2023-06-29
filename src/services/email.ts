import EmailClient from "@sendgrid/mail";

EmailClient.setApiKey(process.env.EMAIL_SERVER_PASSWORD);

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
