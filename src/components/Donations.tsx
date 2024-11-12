import GoCardlessIcon from "@/public/assets/img/gocardless-icon.svg";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";
import {
    Box,
    Button,
    Grid,
    IconButton,
    Modal,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { dreamBuilderFundStrings } from "../strings/support";
import { appColors } from "../utils";
import { Banner } from "./Banner";
import { StretchedText } from "./Typography";

export const DonationTierModal = ({
    open,
    handleClose,
    modalData,
    isDark,
}: {
    open: boolean;
    handleClose: () => void;
    modalData: any;
    isDark: boolean;
}) => {
    return (
        modalData && (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableScrollLock
                sx={{
                    cursor: "pointer",
                    zIndex: "10000000000 !important",
                    pointerEvents: "visible",
                }}
            >
                <Stack
                    spacing={3}
                    maxWidth="sm"
                    sx={{
                        "&:focus": {
                            outline: "none",
                        },
                        p: 3,
                        top: "50%",
                        border: `3px solid rgba(${
                            !isDark ? "255, 210, 107" : "211, 211, 211"
                        }, ${!isDark ? "0.2" : "0.5"})`,
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "100%", sm: "80%" },
                        height: "fit-content",
                        borderRadius: 2,
                        pt: 1,
                        bgcolor:
                            appColors[`cardBg${isDark ? "Light" : "Dark"}`],
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            color: appColors[
                                isDark ? "textDark" : "primaryPastel"
                            ],
                        }}
                    >
                        <CloseTwoToneIcon />
                    </IconButton>
                    <Stack spacing={1}>
                        <Typography
                            id="modal-modal-title"
                            variant="h5"
                            fontFamily="monospace"
                            textTransform="lowercase"
                            sx={{
                                color: appColors[
                                    isDark ? "primaryLight" : "primaryPastel"
                                ],
                            }}
                        >
                            {modalData.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            id="modal-modal-description"
                            lineHeight={1.4}
                            sx={{
                                textAlign: { sm: undefined, md: "justify" },
                                textJustify: {
                                    sm: undefined,
                                    md: "inter-word",
                                },
                                wordSpacing: -2,
                                color: !isDark
                                    ? appColors.textLight
                                    : appColors.textDark,
                            }}
                        >
                            {modalData.description}
                        </Typography>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography
                            fontFamily="monospace"
                            variant="body1"
                            sx={{
                                color: !isDark
                                    ? appColors.primaryPastel
                                    : appColors.primaryLight,
                                fontWeight: 300,
                            }}
                        >
                            <strong>
                                your £{modalData.price / 100.0} donation
                                supports
                            </strong>
                        </Typography>
                        <Stack spacing={0.8}>
                            {modalData.examples.map((ex: string, i: number) => {
                                const blocks = ex.split("::");
                                return (
                                    <Stack key={i} direction="row" spacing={1}>
                                        <span
                                            style={{
                                                marginTop: 2,
                                                marginRight: 8,
                                                transform: "scale(1.6)",
                                            }}
                                        >
                                            {blocks[0]}
                                        </span>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textAlign: {
                                                    sm: undefined,
                                                    md: "justify",
                                                },
                                                textJustify: {
                                                    sm: undefined,
                                                    md: "inter-word",
                                                },
                                                wordSpacing: -2,
                                                color: !isDark
                                                    ? appColors.textLight
                                                    : appColors.textDark,
                                            }}
                                        >
                                            {blocks[1]}
                                        </Typography>
                                    </Stack>
                                );
                            })}
                        </Stack>
                    </Stack>
                    <Stack sx={{ width: "100%" }}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={modalData.href}
                            style={{ width: "100%" }}
                        >
                            <Button
                                variant="contained"
                                color="warning"
                                sx={{
                                    // borderRadius: 4,
                                    bgcolor: appColors.primaryLight,
                                    fontSize: 20,
                                    color: appColors.textLight,
                                    width: { xs: "100%", sm: "fit-content" },
                                    px: 2,
                                }}
                                startIcon={
                                    <img
                                        src={GoCardlessIcon.src}
                                        alt="sdf"
                                        style={{
                                            height: 24,
                                            width: 24,
                                            filter: "invert(0.2)",
                                        }}
                                    />
                                }
                                endIcon={<LaunchTwoToneIcon />}
                            >
                                {" "}
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={1}
                                    textTransform="initial"
                                    fontFamily="monospace"
                                >
                                    <p style={{ fontWeight: 600 }}>
                                        Donate £{modalData.price / 100.0}
                                    </p>
                                </Stack>
                            </Button>
                        </a>

                        <small
                            style={{
                                marginLeft: 4,
                                marginTop: 6,
                                letterSpacing: 0.5,
                                opacity: 0.8,
                            }}
                        >
                            Powered by{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://gocardless.com/"
                                style={{
                                    textDecoration: "none",
                                    color: appColors.primary,
                                }}
                            >
                                GoCardless
                            </a>
                        </small>
                    </Stack>
                </Stack>
            </Modal>
        )
    );
};

export const Donations = ({ isDark }: { isDark: boolean }) => {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const handleOpen = (data: any) => {
        setModalData(data);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setModalData(null);
    };
    return (
        <>
            <DonationTierModal
                isDark={isDark}
                open={open}
                handleClose={handleClose}
                modalData={modalData}
            />
            <Box px={{ xs: 1, sm: 3, md: 4 }} pb={12}>
                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    <Stack spacing={4} alignItems="center">
                        {dreamBuilderFundStrings.blocks.map((block, i) => (
                            <Stack spacing={1.5} maxWidth="md" key={i}>
                                {block.title ? (
                                    <Banner
                                        text={block.title}
                                        isDark={isDark}
                                    />
                                ) : null}
                                {block.items.map((item, j) => (
                                    <StretchedText
                                        isDark={isDark}
                                        key={`stretch-${j + 1}`}
                                    >
                                        {item}
                                    </StretchedText>
                                ))}
                            </Stack>
                        ))}
                    </Stack>
                    <Box
                        mt={4}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Stack maxWidth="md">
                            <Stack spacing={1} mb={3}>
                                <Banner isDark={isDark} text="funding tiers" />
                                <StretchedText isDark={isDark}>
                                    The Dream Builder Fund is the easiest way to
                                    support me in bringing real-world solutions
                                    to life. Join me on this journey to tackle
                                    challenges that matter, and to fuel projects
                                    that drive impact.
                                </StretchedText>
                            </Stack>
                            <Grid
                                container
                                spacing={{ xs: 3, sm: 3, md: 4 }}
                                alignItems="stretch"
                                justifyContent="center"
                            >
                                {dreamBuilderFundStrings.tiers.map(
                                    (
                                        {
                                            price,
                                            href,
                                            title,
                                            description,
                                            examples,
                                            Icon,
                                        },
                                        i
                                    ) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={6}
                                            key={`grid-${i + 1}`}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                            onClick={() =>
                                                handleOpen({
                                                    title,
                                                    description,
                                                    examples,
                                                    Icon,
                                                    price,
                                                    href,
                                                })
                                            }
                                        >
                                            <Paper
                                                elevation={isDark ? 3 : 1}
                                                sx={{
                                                    cursor: "pointer",
                                                    p: { xs: 3, sm: 3 },
                                                    bgcolor:
                                                        appColors[
                                                            `cardBg${
                                                                isDark
                                                                    ? "Light"
                                                                    : "Dark"
                                                            }`
                                                        ],
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    height: "100%",
                                                    justifyContent:
                                                        "space-between",
                                                    width: "100%",
                                                    transition:
                                                        "transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out",
                                                    borderRadius: 2,
                                                    "&:hover": {
                                                        transform:
                                                            "scale(1.02)",
                                                        boxShadow:
                                                            appColors.darkBoxShadow,
                                                        "& .readMore": {
                                                            visibility:
                                                                "visible",
                                                            opacity: 1,
                                                        },
                                                    },
                                                }}
                                            >
                                                <Stack
                                                    spacing={{ xs: 2, md: 1.5 }}
                                                >
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="flex-start"
                                                        alignItems="center"
                                                        spacing={1.5}
                                                    >
                                                        <Icon
                                                            fontSize="large"
                                                            sx={{
                                                                height: 28,
                                                                width: 28,
                                                                fill: appColors[
                                                                    isDark
                                                                        ? "primaryDark"
                                                                        : "primary"
                                                                ],
                                                            }}
                                                        />
                                                        <Typography
                                                            variant="h5"
                                                            fontFamily="monospace"
                                                            textTransform="lowercase"
                                                            noWrap
                                                            sx={{
                                                                fontWeight: 500,
                                                                letterSpacing: 0.5,
                                                                fontSize: {
                                                                    xs: "1.2rem",
                                                                    sm: "1.2rem",
                                                                    md: "1.3rem",
                                                                },
                                                                color: appColors[
                                                                    isDark
                                                                        ? "textDark"
                                                                        : "primaryPastel"
                                                                ],
                                                            }}
                                                        >
                                                            {title}
                                                        </Typography>
                                                    </Stack>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            fontWeight: isDark
                                                                ? 500
                                                                : 300,
                                                            fontSize: {
                                                                xs: "1rem",
                                                                sm: "1rem",
                                                            },
                                                            textAlign: {
                                                                sm: undefined,
                                                                md: "justify",
                                                            },
                                                            textJustify: {
                                                                sm: undefined,
                                                                md: "inter-word",
                                                            },
                                                            wordSpacing: -2,
                                                            color: !isDark
                                                                ? appColors.textLight
                                                                : appColors.textDark,
                                                            overflow: "hidden",
                                                            textOverflow:
                                                                "ellipsis",
                                                            display:
                                                                "-webkit-box",
                                                            WebkitLineClamp:
                                                                "3",
                                                            WebkitBoxOrient:
                                                                "vertical",
                                                        }}
                                                    >
                                                        {description}
                                                    </Typography>
                                                    <Stack
                                                        spacing={1.5}
                                                        direction={{
                                                            xs: "column",
                                                            sm: "column",
                                                            md: "row",
                                                        }}
                                                        justifyContent="space-between"
                                                    >
                                                        <Stack
                                                            direction="row"
                                                            spacing={2}
                                                        >
                                                            {examples.map(
                                                                (x, j) => {
                                                                    const blocks =
                                                                        x.split(
                                                                            "::"
                                                                        );

                                                                    return (
                                                                        <span
                                                                            style={{
                                                                                transform:
                                                                                    "scale(1.5)",
                                                                            }}
                                                                            key={
                                                                                j
                                                                            }
                                                                        >
                                                                            {
                                                                                blocks[0]
                                                                            }
                                                                        </span>
                                                                    );
                                                                }
                                                            )}
                                                        </Stack>
                                                        <Typography
                                                            className="readMore"
                                                            sx={{
                                                                color: !isDark
                                                                    ? appColors.primaryPastel
                                                                    : appColors.primary,
                                                                visibility: {
                                                                    xs: "visible",
                                                                    sm: "hidden",
                                                                },
                                                                opacity: {
                                                                    xs: 1,
                                                                    sm: 0,
                                                                }, // Set initial opacity to 0 for smoother transition
                                                                transition:
                                                                    "visibility 0.1s ease-in-out, opacity 0.3s ease-in-out", // Add transition effect
                                                            }}
                                                        >
                                                            Read More
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Paper>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Stack>
                    </Box>
                </div>
            </Box>
        </>
    );
};
