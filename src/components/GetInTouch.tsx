import { Box, Stack } from "@mui/material";
import { appColors } from "../utils";
import { Banner } from "./Banner";
import { ContactForm } from "./ContactForm";
import { StretchedText } from "./Typography";

const inboxOpen = `
    My inbox is always open for brainstorming sessions,
    strange ideas, or anything that needs a bit of coding magic.
`;

const loveToChat = (
    <span style={{ color: appColors.primary }}>{" I’d love to chat"}</span>
);

const question = "Got a project, question, or even just a hunch?";

export const GetInTouch = ({ isDark }: { isDark: boolean }) => {
    return (
        <section>
            <div data-aos="fade-up" data-aos-duration="1200">
                <div className="container">
                    <Box
                        height="100vh"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                    >
                        <Stack
                            gap={{ md: 2, sm: 4 }}
                            maxWidth={{ sm: "sm", md: "md" }}
                            direction={{ sm: "column", md: "row" }}
                        >
                            <Stack p={1}>
                                <Banner text="dont be shy" isDark={isDark} />
                                <StretchedText isDark={isDark}>
                                    {question}
                                    {loveToChat}.
                                    <br />
                                    <br />
                                    {inboxOpen}
                                </StretchedText>
                            </Stack>
                            <Box pt={{ xs: 3, sm: 1 }}>
                                <ContactForm />
                            </Box>
                        </Stack>
                    </Box>
                </div>
            </div>
        </section>
    );
};
