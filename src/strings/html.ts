interface ClientEnquiryEmailProps {
    name: string;
    message: string;
}

function inlineStyler(styles: Record<string, string>) {
    return Object.entries(styles)
        .map(([key, value]) => {
            const kebabKey = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            return `${kebabKey}: ${value};`;
        })
        .join(" ");
}

function styledElement({
    el,
    styles,
    content,
}: {
    el: string;
    styles: Record<string, string>;
    content: string;
}): string {
    return `<${el} style="${inlineStyler(styles)}">${content}</${el}>`;
}

export interface ButtonProps {
    text: string;
    href: string;
}

export const ctaButton = (buttonProps: ButtonProps) => {
    return `
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%; min-width: 100%;" width="100%">
            <tbody>
                <tr>
                    <td align="left" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; padding-bottom: 16px;" valign="top">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                            <tbody>
                            <tr>
                                <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; border-radius: 4px; text-align: center; background-color: transparent; transition: all 0.3s ease;" valign="top" align="center" bgcolor="transparent">
                                    <a href="${buttonProps.href}" target="_blank" style="border: solid 2px #0867ec; border-radius: 4px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 16px; font-weight: bold; margin: 0; padding: 12px 24px; text-decoration: none; text-transform: capitalize; background-color: transparent; border-color: #0867ec; color: #0867ec; transition: all 0.3s ease;">
                                        ${buttonProps.text}
                                    </a> 
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
};

const emailStyles: { [key: string]: Record<string, string> } = {
    p: {
        fontFamily: "Helvetica, sans-serif",
        fontSize: "16px",
        fontWeight: "normal",
        margin: "0",
        marginBottom: "16px",
    },
    h4: {
        fontFamily: "Helvetica, sans-serif",
        fontSize: "20px",
        fontWeight: "600",
        margin: "0",
        marginTop: "20px",
        marginBottom: "16px",
    },
    h6: {
        fontFamily: "Helvetica, sans-serif",
        fontSize: "18px",
        fontWeight: "500",
        margin: "16px 0",
        textDecoration: "underline",
    },
    main: {
        fontFamily: "Helvetica, sans-serif",
        fontSize: "16px",
        verticalAlign: "top",
        boxSizing: "border-box",
        padding: "24px",
    },
    footer: {
        fontFamily: "Helvetica, sans-serif",
        verticalAlign: "top",
        color: "#9a9ea6",
        fontSize: "16px",
        textAlign: "center",
    },
    preheader: {
        color: "transparent",
        display: "none",
        height: "0px",
        maxHeight: "0px",
        maxWidth: "0px",
        opacity: "0px",
        overflow: "hidden",
        // msoHide: "all",
        visibility: "hidden",
        width: "0px",
    },
};

type Joke = [string, string];

const preheaderStrings = [
    "Programmer is typing...",
    "Pinging your inbox!",
    "Relax, you’re in a good framework'",
    "Not a spam message!",
    "Aggregating your answers",
    "On the (upper)case!",
    "Attempting to resolve your headache",
    "Faster than viral!",
    "Propagating your problems",
    "Finding some stealthy back-end ninjas",
];

const getRandomPreheader = (): string => {
    const randomIndex = Math.floor(Math.random() * preheaderStrings.length);
    return preheaderStrings[randomIndex];
};

const jokeIntroStrings: string[] = [
    "To put a smile on your face, here's a joke:",
    "To keep your day bright, enjoy this little gem:",
    "For a dash of humor, here's something fun:",
    "To add a bit of cheer to your day, here's a joke:",
    "Just for laughs, here's one for you:",
    "To lighten the mood, check out this joke:",
    "To keep the good vibes going, here's a laugh:",
    "For some extra joy, enjoy this joke:",
    "To keep you smiling, here's a fun one:",
    "To end on a high note, here's a joke for you:",
];

const getRandomJokeIntro = (): string => {
    const i = Math.floor(Math.random() * jokeIntroStrings.length);
    return jokeIntroStrings[i];
};

const jokeStrings: Joke[] = [
    ["Why do programmers prefer dark mode?", "Because light attracts bugs!"],
    ["Why did the scarecrow become a successful data scientist?", "Because he was outstanding in his field!"],
    ["Why can’t you trust an atom?", "Because they make up everything!"],
    ["How do you organize a space party?", "You planet!"],
    ["Why was the equal sign so humble?", "Because he knew he wasn’t less than or greater than anyone else!"],
    ["What do you call an educated tube?", "A graduated cylinder!"],
    ["Why did the computer go to the doctor?", "Because it had a virus!"],
    ["Why was the math book sad?", "Because it had too many problems!"],
    ["Why don’t scientists trust atoms anymore?", "Because they make up everything!"],
    ["Why did the biologist look forward to casual Fridays?", "Because he was a 'jeans' enthusiast!"],
];

const getRandomJoke = (): Joke => {
    const randomIndex = Math.floor(Math.random() * jokeStrings.length);
    return jokeStrings[randomIndex];
};

const enquiryEmailContent = [
    `Hi [Name],`,
    `Thank you so much for getting in touch with DevArno! I truly appreciate you taking the time to reach out and connect.`,
    `If your email prompts a response, you can expect to hear back from me shortly. Otherwise, please know that your input is valued and has been duly noted.`,
    `<|>What's Coming Up?<|>`,
    `I have some exciting projects and developments in the pipeline that I can't wait to share with you:`,
    `New Projects: Over the next few months, I'll be working on several innovative projects that span various technologies and domains.`,
    `Blog Updates: I will be regularly updating my blog with insights on the latest trends in technology, as well as sharing my experiences and findings from ongoing projects.`,
    `Open Source Contributions: I'm passionate about contributing to the open-source community, and I have a few contributions lined up that I'm particularly excited about. Stay tuned for updates on these!`,
    `<|>Your Feedback Matters<|>`,
    `Your feedback is incredibly valuable to me. Whether it's technical insights, suggestions on improving my projects, or advice on soft skills and career growth, I would love to hear from you. Your input can help me improve and grow, and I believe that learning from others is a crucial part of any journey.`,
    `<|>Join the Journey<|>`,
    `While I won't be bombarding you with updates and notifications, I do want to invite you to be a part of my journey. If you're interested in staying connected and following along, here are a few ways you can do so:`,
    `Follow Me on GitHub: Check out my projects, contribute, or just see what I'm working on.`,
    `Connect on LinkedIn: Let's stay connected professionally and share insights and opportunities.`,
    `Subscribe to My Blog: Get notified when I post new content.`,
    `Once again, thank you for reaching out. I'm looking forward to connecting with you and hopefully collaborating in the future!`,
    `Best regards,`,
    `Alex Arno`,
    `DevArno - Portfolio | GitHub | LinkedIn`,
];

export const emailHeadBlock = `
    <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <title>DevArno Enquiry</title>
                <style media="all" type="text/css">
                    @media all {
                        .btn-primary table td:hover {
                            background-color: #ec0867 !important;
                        }
                        .btn-primary a:hover {
                            color: #black !important;
                            background-color: #ec0867 !important;
                            border-color: #ec0867 !important;
                        }
                    }
                    @media only screen and (max-width: 640px) {
                        .main p,
                        .main td,
                        .main span {
                            font-size: 16px !important;
                        }
                        .wrapper {
                            padding: 8px !important;
                        }
                        .content {
                            padding: 0 !important;
                        }
                        .container {
                            padding: 0 !important;
                            padding-top: 8px !important;
                            width: 100% !important;
                        }
                        .main {
                            border-left-width: 0 !important;
                            border-radius: 0 !important;
                            border-right-width: 0 !important;
                        }
                        .btn table {
                            max-width: 100% !important;
                            width: 100% !important;
                        }
                        .btn a {
                            font-size: 16px !important;
                            max-width: 100% !important;
                            width: 100% !important;
                        }
                        .btn-primary a:hover {
                            color: #black !important;
                            background-color: #0867ec !important;
                            color: #ffffff !important;
                        }
                    }
                    @media all {
                        .ExternalClass {
                            width: 100%;
                        }

                        .ExternalClass,
                        .ExternalClass p,
                        .ExternalClass span,
                        .ExternalClass font,
                        .ExternalClass td,
                        .ExternalClass div {
                            line-height: 100%;
                        }

                        .apple-link a {
                            color: inherit !important;
                            font-family: inherit !important;
                            font-size: inherit !important;
                            font-weight: inherit !important;
                            line-height: inherit !important;
                            text-decoration: none !important;
                        }

                        #MessageViewBody a {
                            color: inherit;
                            text-decoration: none;
                            font-size: inherit;
                            font-family: inherit;
                            font-weight: inherit;
                            line-height: inherit;
                        }

                        .btn-primary table td:hover {
                            color: #black !important;
                            background-color: #34495e !important;
                        }

                        .btn-primary a:hover {
                            color: #black !important;
                            background-color: #34495e !important;
                            border-color: #34495e !important;
                        }
                    }
                </style>
            </head>
`;

export function clientEnquiryEmail(emailProps: ClientEnquiryEmailProps) {
    const randomPreheader = getRandomPreheader() ?? "";
    const randomJokeIntro = getRandomJokeIntro() ?? "";
    const randomJoke = getRandomJoke() ?? "";

    return `
        <!doctype html>
        <html lang="en">
            ${emailHeadBlock}
            <body style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f4f5f6; margin: 0; padding: 0;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f5f6; width: 100%;" width="100%" bgcolor="#f4f5f6">
                    <tr>
                        <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
                        <td class="container" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;" width="600" valign="top">
                        <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;">

                            <!-- PREHEADER -->
                            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">
                                ${randomPreheader}
                            </span>

                            <!-- MAIN CONTENT -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border: 1px solid #eaebed; border-radius: 16px; width: 100%;" width="100%">
                                <tr>
                                    <td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;" valign="top">         
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            Hi ${emailProps.name},
                                        </p>
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            Thank you so much for getting in touch with DevArno! I truly appreciate you taking the time to reach out and connect.
                                        </p>
                                        <div style="border: 1px solid #4CAF50; background-color: #f9f9f9; padding: 10px 16px; margin: 24px 0; border-radius: 5px; font-family: Courier New, Courier, monospace;">
                                            <p style="font-weight: bold; color: #4CAF50;">Your message:</p>
                                            <p>${emailProps.message}</p>
                                        </div>
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            If your email prompts a response, you can expect to hear back from me shortly. Otherwise, please know that your input is valued and has been duly noted.
                                        </p>
                                        ${styledElement({
                                            el: "h4",
                                            styles: emailStyles.h4,
                                            content: `Join The Journey`,
                                        })}
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            I have some exciting projects and developments in the pipeline that I can't wait to share with the world, and while I won't be bombarding you with updates and notifications, I do want to invite you to be a part of my journey.
                                        </p>
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            If you're interested in staying connected and following along, here are a few ways you can do so:
                                        </p>
                                        <br>
                                        ${styledElement({
                                            el: "h6",
                                            styles: emailStyles.h6,
                                            content: `GitHub`,
                                        })}
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            Over the next few months, I'll be working on several innovative projects that span various technologies and domains. Follow me on GitHub to check out my projects, contribute, or just see what I'm working on. I have a few contributions lined up that I'm particularly excited about - stay tuned for more!
                                        </p>
                                        ${ctaButton({
                                            text: "Follow me on GitHub",
                                            href: "https://github.com/devArno88",
                                        })}
                                        ${styledElement({
                                            el: "h6",
                                            styles: emailStyles.h6,
                                            content: `LinkedIn`,
                                        })}
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            Let's stay connected professionally and share insights and opportunities.
                                        </p>
                                        ${ctaButton({
                                            text: "Connect on LinkedIn",
                                            href: "https://www.linkedin.com/in/alessandro-arno-630584117/",
                                        })}
                                        ${styledElement({
                                            el: "h6",
                                            styles: emailStyles.h6,
                                            content: `Blog`,
                                        })}
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            I will be regularly updating my blog with insights on the latest trends in technology, as well as sharing my experiences from projects and hobbies.
                                        </p>
                                        ${ctaButton({
                                            text: "View latest post",
                                            href: "https://www.devarno.com/blog/sicilian-bytes",
                                        })}
                                        ${styledElement({
                                            el: "h4",
                                            styles: emailStyles.h4,
                                            content: `Your Feedback Matters`,
                                        })}
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            Your feedback is incredibly valuable to me. Whether it's technical insights, suggestions on improving my projects, or advice on soft skills and career growth, I would love to hear from you. Your input can help me improve and grow, and I believe that learning from others is a crucial part of any journey.
                                        </p>
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            Once again, thank you for reaching out. I'm looking forward to connecting with you and hopefully collaborating in the future!
                                        </p>
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            Best regards,
                                        </p>
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            Alex Arno
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;" valign="top">
                                        <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                                            ${randomJokeIntro}
                                        </p>
                                        <div style="border: 1px solid #FFA500; background-color: #fffaf0; padding: 10px; margin: 20px 0; border-radius: 5px; font-family: Courier New, Courier, monospace;">
                                            <p style="font-weight: bold; color: #FFA500;">${randomJoke[0]}</p>
                                            <p>${randomJoke[1]}</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- FOOTER -->
                            <div class="footer" style="clear: both; padding-top: 24px; text-align: center; width: 100%;">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                    <tr>
                                        <td class="content-block" style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;" valign="top" align="center">
                                            <span class="apple-link" style="color: #9a9ea6; font-size: 16px; text-align: center;">&copy; ${new Date().getFullYear()} DevArno. All rights reserved.</span>                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block" style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;" valign="top" align="center">
                                            <span class="apple-link" style="color: #9a9ea6; font-size: 16px; text-align: center;">6 Odessa Street, Rotherhithe SE16 7TN</span>                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block powered-by" style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;" valign="top" align="center">
                                            Powered by <a href="https://www.mailjet.com/" style="color: #9a9ea6; font-size: 16px; text-align: center; text-decoration: none;">Mailjet</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                        <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">
                            &nbsp;
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    `;
}
