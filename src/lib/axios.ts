// import axios from "axios";

// // Base URL
// type NodeEnvironment = "development" | "production" | "test";
// const NODE_ENV: NodeEnvironment = process.env.NODE_ENV;
// const DEV_URL = process.env.API_URL_DEVELOPMENT || "http://localhost:3000/api";
// const PROD_URL = process.env.API_URL_PRODUCTION || "https://devarno.com/api";
// export const baseURL = NODE_ENV == "production" ? PROD_URL : DEV_URL;

// // Headers
// const headers = {
//     "Content-Type": "application/json",
// };

// // Axios instance
// const api = axios.create({
//     baseURL,
//     headers,
// });

// export default api;

import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "https://devarno.com/api" : "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
