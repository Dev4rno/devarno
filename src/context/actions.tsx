import api from "../lib/axios";

export const sendEmail = async (formData: any): Promise<any> => {
    try {
        const res = await api.post("/mail", formData);
        return res.data;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};
