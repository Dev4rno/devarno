import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

interface PropTypes {
    avatar: string;
    name: string;
    date: string;
}

export const PostFooter: React.FC<PropTypes> = (props) => {
    return (
        <footer>
            <Box maxWidth="md">
                <Stack
                    py={2}
                    spacing={1}
                    width="100%"
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Avatar src={props.avatar} alt={props.name} sx={{ width: 64, height: 64 }} />
                    <Stack>
                        <Typography variant="h6">{props.name}</Typography>
                        <Typography variant="body1">{props.date}</Typography>
                    </Stack>
                </Stack>
            </Box>
        </footer>
    );
};
