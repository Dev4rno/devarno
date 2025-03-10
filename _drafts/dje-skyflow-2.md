---
titlePlain: "Building"
titleColor: "Skyflow 1.2"
excerpt: "Design Journal Entry #2: Turbulence"
cardImg: "/assets/img/projects/projects-skyflow-og.png"
coverImg: "/assets/img/blog/skyflow-banner.jpg"
date: "2025-03-02T19:35:07.322Z"
tags: ["programming", "web dev", "devops", "infrastructure", "food"]
keywords:
    [
        "Bluesky analytics dashboard",
        "Social media performance metrics",
        "Bluesky growth tracking",
        "Social network influence measurement",
        "Bluesky user statistics",
        "Content engagement analytics",
        "Network influence metrics",
        "Social media growth prediction",
        "Bluesky follower analysis",
        "Social media performance benchmarking",
        "AtProtocol analytics tools",
        "skyflow",
        "Skyflow Bluesky metrics",
        "skyflow analytics",
        "skyflow bluesky",
        "bluesky analytics",
        "bluesky network",
        "bluesky impact",
        "social media analytics",
        "social media insights",
        "AT protocol analytics",
        "network engagement tracking",
        "fastapi",
        "fastapi development",
        "python development",
        "python server",
        "asynchronous API",
        "REST API design",
        "web service layers",
        "clout",
        "clout analytics",
        "kudos",
        "kudos analytics",
        "flow",
        "flow engagement",
        "flow engagement analytics",
        "flow analytics",
        "pulse",
        "pulse analytics",
        "buildinpublic",
        "startup development",
        "social media growth",
    ]
intro: "One month after launching, we've completely revamped the scoring algorithms and metrics system to provide more meaningful analytics for Bluesky users."
author:
    name: Alex Arno
    avatar: "/assets/img/hero/hero-lakes-headshot.png"
---

## Recent Updates & Reflections

It's been about a month since Skyflow's initial launch, and the platform has seen significant growth and evolution. This journal entry captures recent metric improvements, design decisions, and marketing considerations moving forward.

### Metric System Revamp

The core of Skyflow has always been providing meaningful analytics for Bluesky users. Our initial release included basic metrics that generated excitement but had some flaws - particularly in how we calculated scores. The past week's work has focused on creating a more balanced, realistic scoring system.

#### Score Adjustments

We've completely overhauled the scoring algorithms to address the "everyone is elite" problem. The previous algorithms were too generous, making it too easy for users to achieve top-tier scores. Key improvements:

1. **Benchmarking Against Reality**: Adjusted all formulas based on actual observed patterns across the Bluesky platform rather than arbitrary thresholds.

2. **Logarithmic Scaling**: Implemented logarithmic scales for growing metrics to prevent linear scaling that disproportionately rewards high-volume accounts.

3. **Component-Based Approach**: Broke each score into clear components with transparent weighting to help users understand what contributes to their scores.

4. **Appropriate Difficulty**: Created realistic thresholds that make "Elite" and "Exceptional" status genuinely challenging to achieve.

#### Metric Renaming

We've also improved the naming of our metrics for better clarity and user appeal:

-   **Pulse Score**: Kept as is - overall performance indicator
-   **Impact Score**: Renamed from "Engagement" - measures content resonance
-   **Flux Score**: Renamed from "Network" - measures community influence
-   **Boost Score**: Renamed from "Growth/Momentum" - measures growth trajectory

#### Value Descriptions

Rewrote all metric descriptions to focus on user value rather than technical explanations:

-   **Pulse**: "Shows if your Bluesky strategy is working and where you stand compared to others."
-   **Impact**: "Reveals if your content is actually connecting with people and driving meaningful engagement."
-   **Flux**: "Measures your actual influence in the community, beyond just follower counts."
-   **Boost**: "Predicts your future growth trajectory and shows if your momentum is building or slowing."

### Technical Implementation

Developed a proper `SkyflowMetrics` class following software engineering best practices:

1. **Encapsulation**: Created a well-structured class with private variables and public methods
2. **Caching**: Implemented score caching to prevent redundant calculations
3. **Clear API**: Developed accessor methods for all components and descriptors
4. **Type Safety**: Implemented proper TypeScript interfaces and types
5. **Documentation**: Added comprehensive documentation for each method and component

### UI Improvements

Several UI enhancements are in the works:

1. **Premium Blur Effect**: Developed a sleek blur overlay for premium features with a "preview" mode
2. **Pill Selection Component**: Created a stylish pill/badge component for view switching
3. **Premium Card Styling**: Added visual differentiation for premium metrics with subtle gold accents and star badges
4. **Metrics Drill-Down**: Implemented detail views showing score components and contributions

### Marketing Considerations

After a month live, several marketing challenges and opportunities have emerged:

#### Current Channels

-   **Bluesky Posts**: Our primary marketing channel, but reach is limited to existing Bluesky users
-   **Reddit**: Generated significant traffic, but concerns about over-promotion after a post removal
-   **Directories**: Haven't yet leveraged Bluesky directories for additional discovery

#### Revenue Strategy

Planning to implement several potential revenue streams:

1. **Skyflow Supporter Tier**: Basic subscription offering timeline presence insights and early access
2. **Site Advertisements**: Three potential ad placements identified on the platform
3. **Promoted Posts**: Allowing paying users to boost visibility of their Bluesky posts

#### Community Building

-   **Legacy Program**: Planning special recognition for early adopters and supporters
-   **100-Day Milestone**: Just reached 100 days on Bluesky with ~2K followers and ~500 users
-   **Community Engagement**: Working to balance product updates with community building

## Next Steps

1. **Finalize Premium Features**: Complete development of supporter-exclusive features
2. **Launch on Directories**: Get listed on key Bluesky directories
3. **Expand Marketing Channels**: Identify additional platforms for promotion
4. **Implement Revenue Model**: Launch initial supporter tier and test ad placements
5. **Develop New Metrics**: Working on consistency, virality, community standing, and content quality metrics

## Personal Reflections

The past month has been a journey of learning and adjustment. While the technical aspects of building Skyflow have been challenging but straightforward, the marketing aspects have proven to be the most complex.

Finding the right balance between promotion and humility is difficult. The Bluesky community seems to value authenticity and disdains overly commercial approaches, yet a certain level of promotion is necessary for growth.

The support from early adopters has been genuinely humbling - far exceeding initial expectations. The challenge now is to honor that support by thoughtfully evolving the platform in ways that add value without compromising the community-first approach that got us here.
