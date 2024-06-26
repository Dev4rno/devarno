import { Client } from "node-mailjet";

const mailjet = new Client({
    apiKey: "fe9eabdf52602e85992ddb7c4e6f69ea",
    apiSecret: "bccff8a0ebb6587d5f3e916760d582bd",
});

export default mailjet;
