import { useAppState } from "@/context";
import cancelImg from "@/public/assets/img/cancel.svg";
import { Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import Modal from "react-modal";
import { BlogSection } from "../types";
import { appColors } from "../utils";

export const Blog = () => {
    const { singleData, isOpen, setIsOpen, blogsData, handleBlogsData } = useAppState();
    const handleModle = (id) => {
        handleBlogsData(id);
    };
    useEffect(() => {
        Modal.setAppElement("#modal");
    }, []);
    return blogsData ? (
        <>
            <div className="row" id="modal">
                {blogsData.map((item) => (
                    <div key={item.id} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                        <article className="post-container" onClick={() => handleModle(item?.id)}>
                            <div className="post-thumb">
                                <div className="d-block position-relative overflow-hidden">
                                    <Image src={item?.img} className="img-fluid" alt="item.title" />
                                </div>
                            </div>
                            {/* End .thumb */}
                            <div className="post-content">
                                <div className="entry-header">
                                    <h3>{`${item.titlePlain} ${item.titleColoured}: ${item.subtitle}`}</h3>
                                </div>
                                <div className="entry-content open-sans-font">
                                    <p>{item.sections[0].text.slice(0, 120)}...</p>
                                </div>
                            </div>
                            {/* End .post-content */}
                        </article>

                        {/* Start ModalOneBlogContent */}
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={() => setIsOpen(false)}
                            contentLabel="My dialog"
                            className="custom-modal dark"
                            overlayClassName="custom-overlay dark"
                            closeTimeoutMS={500}
                        >
                            <div>
                                <button className="close-modal" onClick={() => setIsOpen(false)}>
                                    <Image src={cancelImg} alt="close icon" />
                                </button>
                                {/* End close icon */}

                                <div className="box_inner blog-post">
                                    {/* Article Starts */}
                                    <article>
                                        <div className="title-section text-start text-sm-center">
                                            <h1>
                                                {item.titlePlain} <span>{item.titleColoured}</span>
                                            </h1>
                                            <span className="title-bg">DevArno</span>
                                        </div>

                                        <hr
                                            style={{
                                                marginTop: -12,
                                                fill: appColors.primary,
                                                width: "100%",
                                            }}
                                        />

                                        <Stack spacing={2} mb={4} mt={4} alignItems="center">
                                            {/* Meta Starts */}
                                            <Typography
                                                fontSize={{ xs: "1.3rem", sm: "1.5rem", md: "2rem" }}
                                                variant="h3"
                                            >
                                                {singleData.subtitle}
                                            </Typography>

                                            <Stack direction="row" spacing={2}>
                                                <Typography variant="h6" sx={{ wordSpacing: 1.5 }}>
                                                    <i style={{ color: appColors.primary }} className="fa fa-user"></i>{" "}
                                                    {singleData.author}
                                                </Typography>
                                                <Typography sx={{ wordSpacing: 1.5 }} variant="h6">
                                                    <i
                                                        style={{ color: appColors.primary }}
                                                        className="fa fa-calendar"
                                                    ></i>{" "}
                                                    {singleData.date}
                                                </Typography>
                                            </Stack>

                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <i className="fa fa-tags" style={{ color: appColors.primary }}></i>{" "}
                                                {singleData?.tags?.map((x: string) => (
                                                    <Chip
                                                        key={x}
                                                        label={x}
                                                        variant="outlined"
                                                        className="text-start"
                                                        style={{
                                                            color: appColors.primary,
                                                            fontSize: "0.8rem",
                                                        }}
                                                    />
                                                ))}
                                            </Stack>
                                        </Stack>

                                        {/* Meta Ends */}
                                        {/* Article Content Starts */}

                                        <div className="blog-excerpt open-sans-font pb-5">
                                            <Stack spacing={1.5}>
                                                {item.sections?.map((x: BlogSection) => {
                                                    switch (x.type) {
                                                        case "image":
                                                            return (
                                                                <Stack alignItems="center">
                                                                    <img
                                                                        src={x?.src}
                                                                        style={{
                                                                            width: "80%",
                                                                            borderRadius: "1rem",
                                                                            boxShadow:
                                                                                "rgba(255, 180, 0, 0.4) 2px 2px 12px 5px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                                                                        }}
                                                                        alt=""
                                                                        // layout="fill"
                                                                        // objectFit="cover"
                                                                    />
                                                                    <Typography
                                                                        m={2}
                                                                        variant="body2"
                                                                        textAlign="center"
                                                                    >
                                                                        {x.caption}
                                                                    </Typography>
                                                                </Stack>
                                                            );
                                                        case "paragraph":
                                                            return <Typography variant="body1">{x.text}</Typography>;
                                                        case "subtitle":
                                                            return (
                                                                <Typography
                                                                    variant="h5"
                                                                    sx={{ color: appColors.primary }}
                                                                >
                                                                    {x.text}
                                                                </Typography>
                                                            );
                                                        default:
                                                            return "";
                                                    }
                                                })}
                                            </Stack>
                                            {/* <p>{singleData?.description1}</p>
                                            <div className="quotebox">
                                                <div className="icon">
                                                    <Image src={blogQuote} alt="blog quote" />
                                                </div>
                                                <p>{singleData?.description2}</p>
                                            </div>
                                            <p>{singleData?.description3}</p>
                                            <p>{singleData?.description4}</p> */}
                                        </div>
                                        {/* Article Content Ends */}
                                    </article>
                                    {/* Article Ends */}
                                </div>
                            </div>
                        </Modal>
                        {/* End  ModalOneBlogContent */}
                    </div>
                ))}
            </div>
        </>
    ) : null;
};
