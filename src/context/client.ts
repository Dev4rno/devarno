type T_Fetch = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "FORBIDDEN";

interface I_ClientActionParameters {
    route: string;
    method: T_Fetch;
    body?: any; // TODO: Should be combined formDatas
}

export const clientRequest = async ({ route, method, body }: I_ClientActionParameters) => {
    const url = `${process.env.FASTAPI_URL}${route}`;
    // if (SWITCHBOARD.LOG_CLIENT_ACTIONS && body)
    //     console.log(`* # * # *__CLIENT_REQUEST__* # * # *\nRequest with body`, body, `sent to API/${route}`);

    const res = await fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
        },
    });

    if (!res.ok) {
        // DO CUSTOM ERROR HANDLING HERE
        console.error(`* * * useClientAction * * *\n${method} API${route} was unsuccessful`);
        // return;
    }

    return await res.json();
};
