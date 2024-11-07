import fs from "fs";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    const dirPath = join(process.cwd(), "_posts");
    const filenames = fs.readdirSync(dirPath);
    const posts = filenames.map((filename) => {
        const filePath = join(dirPath, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        const markdownExt = /\.md$/;
        return { slug: filename.replace(markdownExt, ""), data };
    });
    res.status(200).json({ posts });
}
