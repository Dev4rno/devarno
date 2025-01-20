import {
    Alert,
    Button,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { appColors } from "../utils";

export const Subscribe = ({ isDark }: { isDark: boolean }) => {
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (!email) {
            setErrorMessage("Email is required");
            return;
        }
        setIsSubmitting(true);

        try {
            const response = await fetch(
                "https://reach.devarno.com/register?source=devarno.com",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                }
            );

            const data = await response.json();

            if (response.ok && data.message) {
                setEmail("");
                setSuccessMessage(data.message);
            } else {
                setErrorMessage("Something went wrong, please try again.");
            }
        } catch (error) {
            setErrorMessage("Network error, please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Stack
            display="flex"
            alignItems={{ xs: "center", sm: "start" }}
            justifyContent="center"
            direction="column-reverse"
            spacing={2}
            sx={{
                // padding: 4,
                // backgroundColor: !isDark ? "#1a1a1a" : "#fff",
                borderRadius: 2,
                // boxShadow: isDark
                //     ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                //     : "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 400,
                    textAlign: "left",
                    color: appColors[isDark ? "textDark" : "textLight"],
                    opacity: 0.7,
                }}
            >
                {/* I’m always juggling new projects and tech, and love sharing what
                I learn along the way.  */}
                Subscribe for exclusive perks and all the latest updates
            </Typography>

            {/* <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: "100%",
                    maxWidth: 600,
                    // margin: "0 auto",
                }}
            >
                <TextField
                    fullWidth
                    placeholder="EMAIL" // Changed from label to placeholder
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={isSubmitting}
                    InputLabelProps={{ shrink: false }}
                    label=""
                    sx={{
                        color: appColors[isDark ? "textDark" : "textLight"],
                        "& .MuiOutlinedInput-root": {
                            borderTopLeftRadius: "50px",
                            borderBottomLeftRadius: "50px",
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            color: appColors[isDark ? "textDark" : "textLight"],
                            "& fieldset": {
                                borderWidth: 2,
                                borderColor: "#ffb400",
                                // This prevents the border from jumping when typing
                                legend: { display: "none" },
                            },
                            "&:hover fieldset": {
                                borderColor: "#ffc700",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#ffb400",
                            },
                            "& input": {
                                paddingLeft: "32px",
                            },
                        },
                        // Style the placeholder text
                        "& .MuiOutlinedInput-input::placeholder": {
                            color: appColors[isDark ? "textDark" : "textLight"],
                            opacity: 0.8, // Makes the placeholder slightly transparent
                        },
                    }}
                />
                <Button
                    size="large"
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor: "#ffb400",
                        color: "#fff",
                        padding: "15px 24px",
                        "&:hover": {
                            backgroundColor: "#ffc700",
                        },
                        "&:disabled": {
                            backgroundColor: "#ffe5a3",
                            color: "#b38f00",
                        },
                    }}
                >
                    Subscribe
                </Button>
            </Stack> */}

            <Stack
                direction="row"
                alignItems="center" // Changed from "center" to "stretch"
                justifyContent="center"
                sx={{
                    width: "100%",
                    maxWidth: 350,
                }}
            >
                <TextField
                    fullWidth
                    placeholder="EMAIL"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={isSubmitting}
                    label=""
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: "52px",
                            borderTopLeftRadius: "50px",
                            borderBottomLeftRadius: "50px",
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            color: appColors[isDark ? "textDark" : "textLight"],
                            "& fieldset": {
                                borderColor: "#ffb400",
                            },
                            "&:hover fieldset": {
                                borderColor: "#ffc700",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#ffb400",
                            },
                            "& input": {
                                paddingLeft: "34px",
                                fontSize: 15,
                                fontWeight: 600,
                            },
                        },
                        "& .MuiOutlinedInput-input::placeholder": {
                            color: !isDark ? "#fff" : "#666",
                            opacity: !isDark ? 0.95 : 0.9,
                        },
                    }}
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    sx={{
                        height: "52px", // Match TextField height
                        minWidth: "100px",
                        textTransform: "none",
                        fontWeight: 600,
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor: appColors.primary,
                        // color: isDark ? "#333" : "#f5f5f5",
                        boxShadow: "none",
                        "&:hover": {
                            backgroundColor: "#ffc700",
                            boxShadow: "none",
                        },
                        "&:disabled": {
                            backgroundColor: "#ffe5a3",
                            color: "#b38f00",
                        },
                    }}
                >
                    Subscribe
                </Button>
            </Stack>

            {/* Success Alert */}
            <Snackbar
                sx={{ width: 300 }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={!!successMessage}
                autoHideDuration={6000}
                onClose={() => setSuccessMessage("")}
            >
                <Alert
                    onClose={() => setSuccessMessage("")}
                    severity="success"
                    sx={{
                        width: "100%",
                    }}
                >
                    {successMessage}
                </Alert>
            </Snackbar>
            {/* Error Alert */}
            <Snackbar
                open={!!errorMessage}
                sx={{ width: 300 }}
                autoHideDuration={6000}
                onClose={() => setErrorMessage("")}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setErrorMessage("")}
                    severity="error"
                    sx={{
                        width: "100%",
                        backgroundColor: "#d32f2f",
                        color: "#fff",
                    }}
                >
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Stack>
    );
};
