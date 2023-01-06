import { blogsData } from "@/strings";
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
