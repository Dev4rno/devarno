import {
    Alert,
    Box,
    Button,
    Card,
    Checkbox,
    CircularProgress,
    FormControlLabel,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { appColors } from "../utils";

interface ReachUser {
    uid: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    email: string;
    emailVerified: boolean;
    preferences: {
        marketing: boolean;
        content: boolean;
        product: boolean;
    };
    source?: string;
}

export const UpdatePreferences = ({
    isDark,
    token,
}: {
    isDark: boolean;
    token: string;
}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        preferences: {
            content: false,
            marketing: false,
            product: false,
        },
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [verified, setVerified] = useState<boolean>(false);
    useEffect(() => {
        if (!token) return;
        async function fetchPreferences() {
            try {
                setLoading(true);
                const url = `https://reach.devarno.com/user?token=${token}`;
                const response = await fetch(url, { method: "GET" });
                if (!response.ok) {
                    throw new Error("Failed to fetch preferences.");
                }
                const data: ReachUser = await response.json();
                setVerified(data.emailVerified);
                setFormData(data);
            } catch (err) {
                setError("Failed to load preferences.");
            } finally {
                setLoading(false);
            }
        }
        fetchPreferences();
    }, [token]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: any) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            preferences: { ...prev.preferences, [name]: checked },
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        const { name, email, preferences } = formData;
        try {
            setLoading(true);
            const response = await fetch(
                `https://reach.devarno.com/preferences?token=${token}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, preferences }),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to update preferences.");
            }
            const data = await response.json();

            if (data.message) {
                setSuccess(data.message);
            }
            const timeout = setTimeout(() => setSuccess(null), 3000);
            return () => clearTimeout(timeout);
        } catch (err) {
            setError(String(err));
        } finally {
            setLoading(false);
        }
    };
    const textFieldStyle = {
        "& .MuiOutlinedInput-root": {
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
        },
        "& .MuiInputLabel-root": {
            color: appColors[isDark ? "textDark" : "textLight"],
        },
        "&:hover .MuiInputLabel-root": {
            color: appColors[isDark ? "textDark" : "textLight"],
        },
    };
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card
                sx={{
                    maxWidth: "sm",
                    p: 6,
                    marginTop: 8,
                    borderRadius: 4,
                    bgcolor: appColors[`cardBg${isDark ? "Light" : "Dark"}`],
                    border: `3px solid rgba(${
                        !isDark ? "255, 210, 107" : "211, 211, 211"
                    }, ${!isDark ? "0.2" : "0.5"})`,
                }}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        color: appColors[isDark ? "textDark" : "primaryPastel"],
                    }}
                >
                    {verified
                        ? "Update Your Preferences"
                        : "Please check your inbox"}
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}

                {verified ? (
                    <form className="myForm" onSubmit={handleSubmit}>
                        <TextField
                            color="warning"
                            variant="outlined"
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleInputChange}
                            margin="normal"
                            disabled={loading}
                            sx={textFieldStyle}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email || ""}
                            onChange={handleInputChange}
                            margin="normal"
                            disabled={loading}
                            required
                            sx={textFieldStyle}
                        />
                        <Typography
                            variant="h6"
                            mt={2}
                            mb={1}
                            sx={{
                                color: appColors[
                                    isDark ? "textDark" : "primaryPastel"
                                ],
                            }}
                        >
                            Email Updates
                        </Typography>
                        <Stack spacing={2}>
                            <Stack>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="content"
                                            checked={
                                                formData.preferences.content
                                            }
                                            onChange={handleCheckboxChange}
                                            color="warning"
                                        />
                                    }
                                    sx={{
                                        color: appColors[
                                            isDark ? "textDark" : "textLight"
                                        ],
                                    }}
                                    label="Curated Articles & Newsletters"
                                    disabled={loading}
                                />
                                <small
                                    style={{
                                        color: appColors[
                                            isDark ? "textDark" : "textLight"
                                        ],
                                        opacity: 0.75,
                                        fontWeight: 300,
                                    }}
                                >
                                    Stay informed with my latest blog posts and
                                    curated newsletters, designed to keep you
                                    inspired.
                                </small>
                            </Stack>
                            <Stack>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="warning"
                                            name="marketing"
                                            checked={
                                                formData.preferences.marketing
                                            }
                                            onChange={handleCheckboxChange}
                                        />
                                    }
                                    label="Exciting Offers & Promotions"
                                    disabled={loading}
                                    sx={{
                                        color: appColors[
                                            isDark ? "textDark" : "textLight"
                                        ],
                                    }}
                                />
                                <small
                                    style={{
                                        color: appColors[
                                            isDark ? "textDark" : "textLight"
                                        ],
                                        opacity: 0.75,
                                        fontWeight: 300,
                                    }}
                                >
                                    Receive updates about exclusive deals,
                                    special discounts, and promotional campaigns
                                    throughout my journey.
                                </small>
                            </Stack>
                            <Stack>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="product"
                                            color="warning"
                                            checked={
                                                formData.preferences.product
                                            }
                                            onChange={handleCheckboxChange}
                                        />
                                    }
                                    label="New Features & Product Announcements"
                                    sx={{
                                        color: appColors[
                                            isDark ? "textDark" : "textLight"
                                        ],
                                    }}
                                    disabled={loading}
                                />
                                <small
                                    style={{
                                        color: appColors[
                                            isDark ? "textDark" : "textLight"
                                        ],
                                        opacity: 0.75,
                                        fontWeight: 300,
                                    }}
                                >
                                    Be the first to know about my newest
                                    features, product improvements, and
                                    important updates.
                                </small>
                            </Stack>
                        </Stack>

                        <Box mt={2}>
                            <Button
                                disabled={loading}
                                type="submit"
                                variant="contained"
                                color="warning"
                            >
                                {loading ? (
                                    <CircularProgress />
                                ) : (
                                    "Save Preferences"
                                )}
                            </Button>
                        </Box>
                    </form>
                ) : (
                    <Stack spacing={2} mt={2}>
                        <Typography
                            sx={{
                                color: appColors[
                                    isDark ? "textDark" : "textLight"
                                ],
                            }}
                        >
                            Verify your email address to change your
                            preferences.
                        </Typography>
                        <Typography
                            sx={{
                                color: appColors[
                                    isDark ? "textDark" : "textLight"
                                ],
                            }}
                        >
                            Check your inbox for a verification email.
                        </Typography>
                        <Typography
                            sx={{
                                color: appColors[
                                    isDark ? "textDark" : "textLight"
                                ],
                            }}
                        >
                            If you haven’t received an email, please check your
                            spam folder or{" "}
                            <Link
                                style={{ textDecoration: "none" }}
                                href="/?tab=contact"
                            >
                                get in touch
                            </Link>
                            .
                        </Typography>
                    </Stack>
                )}
            </Card>
        </div>
    );
};
