import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { heroContent } from "../strings";
import { startHeroTypewriter } from "../utils";

export const Hero2 = ({ setIndex }: { setIndex: (x: number) => void }) => {
    const setAboutPage = () => setIndex(1);
    useEffect(() => {
        if (document) startHeroTypewriter(document);
    }, []);
    return (
        <Grid container spacing={2} sx={{ zIndex: 1, p: 2 }}>
            <Grid item xs={12} sm={8} md={4}>
                <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <Image alt="Hero Desktop" src={heroContent.imgMain} />
                </Box>
                <Image alt="Hero Mobile" src={heroContent.imgMobile} />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <div className="hero-button">
                    <button className="button" onClick={setAboutPage}>
                        <span className="button-text">{heroContent.button}</span>
                        <span className="button-icon fa fa-arrow-right"></span>
                    </button>
                </div>
            </Grid>
        </Grid>
    );
};
