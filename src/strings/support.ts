import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import CoffeeTwoToneIcon from "@mui/icons-material/CoffeeTwoTone";
import HandshakeTwoToneIcon from "@mui/icons-material/HandshakeTwoTone";
import HandymanTwoToneIcon from "@mui/icons-material/HandymanTwoTone";
import PaletteTwoToneIcon from "@mui/icons-material/PaletteTwoTone";
import RocketLaunchTwoToneIcon from "@mui/icons-material/RocketLaunchTwoTone";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type MuiIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};

export interface TierBlock {
    price: number;
    Icon: MuiIcon;
    uid: string;
    href: string;
    title: string;
    description: string;
    examples: string[];
    thanks: string;
}

export interface SupportBlock {
    blocks: {
        title: string;
        items: string[];
    }[];
    tiers: TierBlock[];
}

export const dreamBuilderFundStrings: SupportBlock = {
    blocks: [
        {
            title: "my journey",
            items: [
                "Welcome to my Indie Hacker journey - a path driven by curiosity, creativity, and a mission to solve real-world challenges. Every project is a spark of inspiration turned into something impactful, with plenty of experimentation along the way. From exploring new tech stacks to reimagining concepts, I’m building tools that aim to make a difference in people’s lives.",
                "Right now, I'm deep into some exciting projects that fuel my passion and focus. Each one tackles a meaningful problem, and I’m eager to bring them into the world. Your support is what makes it all possible, empowering me to keep pushing forward.",
            ],
        },
        {
            title: "your role",
            items: [
                "Joining the Dream Builder Fund means becoming part of something greater than just a project launch—you’re fueling creativity, growth, and real impact. Whether it’s a small boost or major support, every contribution helps shape these ideas into tools that people can genuinely benefit from.",
                "I’ve set up different donation tiers to make it easy for you to join in at a level that works for you. Each tier brings you into this tech adventure with me—not just as a supporter, but as a valued part of the team driving these ideas forward.",
            ],
        },
        {
            title: "why it matters",
            items: [
                "Thank you for being here on this journey. Your support means a lot to me and helps turn ideas into real solutions for real challenges. With each step forward, we’re creating tools that can make a meaningful difference, and having you alongside makes the journey even more rewarding.",
                "Your generosity keeps this work alive, and I’m excited to keep collaborating with you to build tools that matter. Thank you for being part of this journey—let’s make a lasting impact together. 🚀",
            ],
        },
    ],
    tiers: [
        {
            price: 100,
            Icon: CoffeeTwoToneIcon,
            uid: "launchpad-supporter",
            href: "https://pay.gocardless.com/BRT0003H54QHAGS",
            title: "Launchpad Supporter",
            description:
                "Every great journey starts with a single step. As a Launchpad Supporter, your contribution fuels the little essentials that keep my creative engines running—from caffeine boosts to the digital utilities that spark new ideas.",
            examples: [
                "↪️::Monthly email forwarding costs::Streamlining communications with a professional touch.",
                "🛜::One coffee shop visit WiFi charge::Accessing remote workspaces to stay motivated outside the home office.",
                "✍🏼::A pack of sticky notes::Perfect for jotting down spontaneous ideas or sketching project outlines.",
                "☕::30% of a Starbucks flat white::Fueling late-night coding sessions with a much-needed energy boost.",
                // "✍🏼::Basic pen and notebook::Capturing thoughts and plans during brainstorming sessions.",
                // "🖍️::A set of colorful highlighters::Organizing project notes with visual clarity for better efficiency.",
            ],
            thanks: "Thank you so much for being my Launchpad Supporter! Your contribution is like that first spark that gets the creative journey rolling, and I couldn’t be more grateful for it. Every small step counts, and your generosity is fueling the essential tools and moments that keep my creativity thriving—from that much-needed coffee to the next big idea sketched on a sticky note. Thank you for supporting this journey—your belief in what I’m creating means the world!",
        },
        {
            price: 499,
            uid: "innovators-ally",
            Icon: HandshakeTwoToneIcon,
            href: "https://pay.gocardless.com/BRT0003H54V8HKV",
            title: "Innovator's Ally",
            description:
                "With your support as an Innovator's Ally, your contribution fuels creativity and productivity. You’re helping to provide the resources that sharpen my skills and keep the wheels of innovation turning seamlessly.",
            examples: [
                "📄::Monthly Notion subscription::Organizing projects, tasks, and daily notes efficiently in one place.",
                "📧::SES & Mailjet subscriptions::Ensuring reliable communication for newsletters or project updates.",
                // "☕::A premium coffee blend::Elevating focus and productivity during intense coding sprints.",
                // "☑️::Digital task management app subscription::Streamlining my workflow and prioritizing tasks.",
                "🌐::Monthly VPN service::Securing my online activities and enhancing privacy.",
                "📚::Startup marketing resources::Gaining insights and tactics for business growth.",
                "🖌️::Stock library design asset::Enhancing the visual appeal of my projects.",
            ],
            thanks: "Thank you for standing by my side as an Innovator's Ally! Your support makes a big difference, providing me with the resources that sharpen my skills and keep the gears turning. Every tool, every coffee, every book—all of it is a step forward, thanks to you. I’m beyond grateful to have you along for the journey, cheering on each new idea and helping me bring this vision to life. Thank you for being a part of this story!",
        },
        {
            price: 999,
            uid: "startup-strategist",
            Icon: HandymanTwoToneIcon,
            href: "https://pay.gocardless.com/BRT0003H09DX1F6",
            title: "Startup Strategist",
            description:
                "Your support as a Startup Strategist is a driving force for strategic growth, providing access to essential tools and knowledge that refine my craft and amplify productivity.",
            examples: [
                "📧::AWS SES & Mailjet subscriptions::Scaling email outreach with reliable and efficient email delivery.",
                "☁️::MongoDB M2 cluster subscription::Storing and managing data securely with enhanced scalability.",
                "🧠::Premium productivity tool subscription::Fine-tuning time management and project tracking.",
                "📡::A domain name registration::Establishing a unique online presence for a new project.",
                "👨🏻‍💻::Specialised web development content::Learning advanced skills to improve my projects.",
                "🖱️::Specialty ergonomic mouse::Improving efficiency and comfort during long coding sessions.",
                "☁️::Contribution towards cloud storage::Safeguarding valuable data and project backups.",
            ],
            thanks: "Thank you for being a Startup Strategist! Your support allows me to take crucial steps toward growth and gives me the tools to bring fresh ideas to life. Your contribution helps fuel the innovation and hard work that go into every project, and I’m so grateful to have you on board! Together, we’re building something exciting—thank you for making this journey possible and for believing in the dream. Let’s go make some amazing things happen!",
        },
        {
            price: 1999,
            uid: "visionary-backer",
            Icon: PaletteTwoToneIcon,
            href: "https://pay.gocardless.com/BRT0003H09N7SAE",
            title: "Visionary Backer",
            description:
                "Your support as a Visionary Backer unlocks new creative possibilities, fueling innovation and empowering me to invest in essential tools, paving the way for transformative ideas and exciting ventures.",
            examples: [
                "🎨::Premium design software subscription::Creating stunning visuals and prototypes for my projects.",
                "📧::Yearly custom email domain::Enhancing professional communications with a branded touch.",
                "📊::Advanced online course in data analysis::Equipping myself with the skills to harness data-driven insights.",
                "⌨️::Ergonomic workspace gadgets::Boosting productivity during long hours of development.",
                "☁️::Extended cloud service subscription::Providing reliable infrastructure for hosting apps and sites.",
                "📚::Purchase of industry-specific e-books::Staying informed with the latest trends and strategies in tech.",
                "📱::Marketing asset pack::Expanding reach and engagement for product launches and promotions.",
            ],
            thanks: "Thank you for becoming a Visionary Backer! Your support means so much and allows me to take bold steps forward. From creating with the best tools to diving into transformative ideas, your belief in this journey is truly inspiring. It’s because of your generosity that I’m able to bring ambitious projects to life. Thank you for investing in my vision and for helping me build something extraordinary. I can’t wait to share what’s next—all thanks to you!",
        },
        {
            price: 4999,
            uid: "founders-patron",
            Icon: AutoAwesomeTwoToneIcon,
            href: "https://pay.gocardless.com/BRT0003H5BRTS4Z",
            title: "Founder's Patron",
            description:
                "As a Founder's Patron, your contribution is helping push the boundaries of my Indie journey. This support equips me with advanced tools that are crucial for innovation and sets the stage for groundbreaking breakthroughs.",
            examples: [
                "🍜::Developers network subscription::Gaining access to a community of like-minded innovators and exclusive resources.",
                "🤖::Comprehensive ML/LLM course::Diving deep into AI technology to enhance my project's capabilities.",
                "💾::High-performance SSD::Increasing storage speed and efficiency for development environments.",
                // "📧::MailChimp or Mailjet subscription::Implementing email marketing for better audience engagement.",
                "☁️::MongoDB Atlas M10 cluster::Handling larger datasets and scaling data storage efficiently.",
                "📄::Notion Team plan::Managing team collaborations with advanced project and task tracking.",
                // "🛰️::Registration of multiple domain names::Securing a portfolio of potential project launches.",
                // "🎧::Investment in noise-cancelling headphones::Creating an optimal focus environment for deep work sessions.",
                "🎨::Design templates bulk purchase::Ensuring visually appealing interfaces across projects.",
                "🔍::Specialised SEO tools::Amplifying online visibility and outreach efforts.",
            ],
            thanks: "Thank you for being a Founder's Patron! Your support empowers me to push the boundaries of what’s possible and take my work to the next level. This journey would not be the same without your belief and investment in these creative goals. From accessing top-notch tools to refining each detail, your contribution plays a vital role in bringing breakthrough ideas to life. Thank you for joining me on this path to innovation—together, we’re on the cusp of something incredible!",
        },
        {
            price: 9999,
            uid: "champion-of-change",
            href: "https://pay.gocardless.com/BRT0003H5BZTVMX",
            title: "Champion of Change",
            Icon: RocketLaunchTwoToneIcon,
            description:
                "Your contribution as a Champion of Change is a certified game-changer. This support provides access to top-tier tools and resources necessary to bring ambitious visions to life, shaping the future of innovation with passion and dedication.",
            examples: [
                "🛰️::Top-level domain for a flagship project::Establishing a memorable and authoritative online presence.",
                // "🎨::One year subscription to a premium design suite::Crafting exceptional user interfaces and graphics.",
                "📧::MailChimp advanced marketing plan::Boosting outreach with data-driven email marketing and audience insights.",
                "📄::Notion Enterprise plan::Leveraging top-tier organizational tools for complex project management.",
                // "💻::Enrollment in a comprehensive bootcamp::Mastering new programming languages or frameworks for next-level development.",
                // "🖥️::High-quality monitor upgrade::Enhancing clarity and reducing strain during design and coding sessions.",
                "☁️::Advanced cloud computing resources::Supporting scalable, high-performance deployments of web applications.",
                "🪪::Tech conferences and workshops::Networking with peers and staying at the cutting edge of trends.",
                "🎯::Professional branding package::Developing a cohesive and compelling brand identity for public-facing endeavors.",
            ],
            thanks: "Thank you for being a Champion of Change! Your support is a game-changer, providing the resources to bring ambitious, world-changing ideas to life. With your help, I’m able to access top-tier tools, build an unforgettable brand, and stay at the cutting edge of innovation. Your generosity fuels the passion and commitment that drive every step of this journey. Thank you for believing in the future we’re creating together — I’m honored to have you as part of this incredible adventure.",
        },
    ],
};
