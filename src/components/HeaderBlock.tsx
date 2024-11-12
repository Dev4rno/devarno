import { Box, Stack } from "@mui/material";
import { FC } from "react";
import { ClassMethodText } from "./Typography";

interface PropTypes {
    plainText: string;
    colorText: string;
    bgText: string;
    caption?: string;
    isDark: boolean;
}

export const HeaderBlock: FC<PropTypes> = (props) => {
    return (
        <Stack alignItems="center" justifyContent="center">
            <div className="title-section text-center text-sm-center">
                <h1>
                    {props.plainText} <span>{props.colorText}</span>
                </h1>
                <span className="title-bg">{props.bgText}</span>
            </div>
            {props.caption && (
                <Box sx={{ top: -40, position: "relative" }}>
                    <ClassMethodText
                        text={props.caption}
                        isDark={props.isDark}
                    />
                </Box>
            )}
        </Stack>
    );
};
