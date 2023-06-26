import { blogsData } from "@/content";
import { useState } from "react";

export const AllBlogData = () => {
    const [singleData, setSingleData] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const handleBlogsData = (id) => {
        const find = blogsData.find((item) => item?.id === id);
        setSingleData(find);
        setIsOpen(true);
    };

    return {
        singleData,
        isOpen,
        setIsOpen,
        blogsData,
        handleBlogsData,
    };
};

export const sendEmail = async (formData): Promise<any> => {
    try {
        const res = await fetch(`http://localhost:3000/api`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
