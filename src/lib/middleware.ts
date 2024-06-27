import type { NextApiRequest, NextApiResponse } from "next";

// Example middleware function
const middlewareFunction = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    // Your middleware logic here
    console.log("Middleware executed");
    next(); // Call the next middleware or route handler
};

export default middlewareFunction;
