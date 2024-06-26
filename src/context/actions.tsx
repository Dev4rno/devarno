import api, { baseURL } from "../lib/axios";

export const sendEmail = async (formData: any): Promise<any> => {
    try {
        const res = await api.post(`${baseURL}/mail`, JSON.stringify(formData));
        return res.data;
        // await fetch("http://localhost:3000/api/mail", {
        //     method: "POST",
        //     body: JSON.stringify(formData),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // })
        //     .then((jsonData) => jsonData.json())
        //     .then((data) => {
        //         return data;
        //     });
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};
