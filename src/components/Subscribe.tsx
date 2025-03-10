import BlockIcon from "@mui/icons-material/Block";
import {
    Alert,
    Button,
    CircularProgress,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { appColors, getRateLimitExceededMessage } from "../utils";
export const Subscribe = ({ isDark }: { isDark: boolean }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRateLimited, setIsRateLimited] = useState<boolean>(false);

    useEffect(() => {
        // Clear success message after 5 seconds
        if (success) {
            const timeout = setTimeout(() => setSuccess(null), 5000);
            return () => clearTimeout(timeout);
        }

        // Clear error message after 5 seconds
        if (error) {
            const timeout = setTimeout(() => setError(null), 5000);
            return () => clearTimeout(timeout);
        }
    }, [success, error]);

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    // const handleSubmit = async (event: any) => {
    //     event.preventDefault();
    //     if (!email) {
    //         setErrorMessage("Email is required");
    //         return;
    //     }
    //     setIsSubmitting(true);

    //     try {
    //         const response = await fetch(
    //             "https://reach.devarno.com/register?source=devarno.com",
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({ email }),
    //             }
    //         );

    //         // const data = await

    //         if (response.status === 429) {
    //             setIsRateLimited(true);
    //             setTimeout(() => setIsRateLimited(false), 60000); // Reset after 1 minute
    //             // const errorData = await response.json();
    //             const limitExceeded = getRateLimitExceededMessage();
    //             setErrorMessage(limitExceeded);
    //             throw new Error(limitExceeded);
    //         }

    //         if (!response.ok || response.status !== 200) {
    //             // const errorData = await response.json();
    //             setError("Unexpected error occurred. Try again later.");
    //             // throw new Error(errorData.detail || "Unexpected error occurred");
    //         }

    //         const data = await response.json();

    //         if (response.ok && data.message) {
    //             setEmail("");
    //             setSuccessMessage(data.message);
    //         } else {
    //             setErrorMessage("Something went wrong, please try again.");
    //         }
    //     } catch (error) {
    //         setErrorMessage("Network error, please try again.");
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const subscribeUrl =
            "https://reach.devarno.com/register?source=devarno.com";

        if (loading || isRateLimited) return;

        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            const response = await fetch(subscribeUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 429) {
                setIsRateLimited(true);
                setTimeout(() => setIsRateLimited(false), 60000);
                setError(getRateLimitExceededMessage());
                return;
            }

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "An unexpected error occurred.");
                return;
            }

            setSuccess(data.message);
            setEmail("");
        } catch (err) {
            setError("An unexpected error occurred. Please try again later.");
            console.info("Error:", err);
        } finally {
            setLoading(false);
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
                    textAlign: { xs: "center", sm: "left" },
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
                    required
                    type="email"
                    placeholder="EMAIL"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={
                        loading ||
                        isRateLimited ||
                        Boolean(success) ||
                        Boolean(error)
                    }
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
                    disabled={
                        loading ||
                        isRateLimited ||
                        Boolean(success) ||
                        Boolean(error)
                    }
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
                    {loading ? (
                        <CircularProgress />
                    ) : isRateLimited ? (
                        <BlockIcon />
                    ) : (
                        "Subscribe"
                    )}
                </Button>
            </Stack>

            {/* Success Alert */}
            <Snackbar
                sx={{ width: 300 }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={!!success}
                autoHideDuration={6000}
                onClose={() => setSuccess("")}
            >
                <Alert
                    onClose={() => setSuccess("")}
                    severity="success"
                    sx={{
                        width: "100%",
                    }}
                >
                    {success}
                </Alert>
            </Snackbar>
            {/* Error Alert */}
            <Snackbar
                open={!!error}
                sx={{ width: 300 }}
                autoHideDuration={6000}
                onClose={() => setError("")}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setError("")}
                    severity="error"
                    sx={{
                        width: "100%",
                        backgroundColor: "#d32f2f",
                        color: "#fff",
                    }}
                >
                    {error}
                </Alert>
            </Snackbar>
        </Stack>
    );
};
