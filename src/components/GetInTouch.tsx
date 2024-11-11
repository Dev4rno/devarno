import { Box } from "@mui/material";
import { Banner } from "./Banner";
import { ContactForm } from "./ContactForm";
import { Social } from "./Social";

export const GetInTouch = ({ isDark }: { isDark: boolean }) => {
    return (
        <Box px={{ xs: 2, sm: 3, md: 4 }} height="100%" pb={4}>
            <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <Banner text="dont be shy" isDark={isDark} />
                        <p className="open-sans-font mb-4 mt-2">
                            Feel free to get in touch with me.
                            <br />I am always open to discussing new projects,
                            creative ideas or opportunities to be part of your
                            visions.
                        </p>
                        {/* <Address /> */}
                        <Social />
                    </div>
                    <div className="col-12 col-lg-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Box>
    );
};
