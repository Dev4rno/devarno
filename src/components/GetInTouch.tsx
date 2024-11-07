import { Box } from "@mui/material";
import { ContactForm } from "./ContactForm";
import { Social } from "./Social";

export const GetInTouch = () => {
    return (
        <Box px={{ xs: 2, sm: 3, md: 4 }} height="100vh">
            <div className="container" data-aos="fade-up" data-aos-duration="1200">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">{"Don't"} be shy !</h3>
                        <p className="open-sans-font mb-4">
                            Feel free to get in touch with me. I am always open to discussing new projects, creative
                            ideas or opportunities to be part of your visions.
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
