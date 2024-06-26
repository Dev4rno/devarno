import { Client } from "node-mailjet";

const mailjet = new Client({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export default mailjet;
