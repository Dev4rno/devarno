import { Stack, Typography } from "@mui/material";
import React from "react";

interface PropTypes {
    plainText: string;
    colorText: string;
    bgText: string;
    caption?: string;
}

export const HeaderBlock: React.FC<PropTypes> = (props) => {
    return (
        <Stack alignItems="center" justifyContent="center">
            <div className="title-section text-center text-sm-center">
                <h1>
                    {props.plainText} <span>{props.colorText}</span>
                </h1>
                <span className="title-bg">{props.bgText}</span>
            </div>
            {props.caption && (
                <Typography
                    variant="caption"
                    fontSize={{ xs: 14 }}
                    fontFamily="monospace"
                    position="relative"
                    top={-40}
                >
                    &rarr;&nbsp;<i>{props.caption}</i>
                </Typography>
            )}
        </Stack>
    );
};
