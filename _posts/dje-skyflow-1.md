---
titlePlain: "Building"
titleColor: "Skyflow"
excerpt: "Design Journal Entry #1: Take Off"
cardImg: "/assets/img/projects/projects-skyflow-og.png"
coverImg: "/assets/img/blog/skyflow-banner.jpg"
date: "2025-02-05T19:35:07.322Z"
tags: ["programming", "product", "coding", "marketing", "analytics"]
intro: "How I’m building a Bluesky analytics platform from the ground up, from technical deep dives to the pains of product marketing and SEO."
author:
    name: Alex Arno
    avatar: "/assets/img/hero/hero-lakes-headshot.png"
---

I built [Skyflow](https://skyflow.me/) to answer a question that kept nagging at me: **what's really happening in my Bluesky network**?

Beyond follower counts and likes, I wanted to understand the genuine patterns of engagement and influence. What started as a technical challenge evolved into a crash course in product development - from user psychology to growth strategy.

As I navigate this complete unknown, I'm learning that building a successful product demands more than clean code. It's about crafting compelling narratives, designing intuitive interfaces, and understanding what makes users click.

Here's a behind-the-scenes look at both the technical architecture and the marketing lessons that are shaping Skyflow's evolution.

### Overview

Skyflow helps you:

-   Track which posts are actually breaking through (`Clout`).

-   See who's consistently driving conversations (`Kudos`).

-   Visualise your network's engagement patterns (`Flow`).

-   Monitor your own growth metrics (`Pulse`).

![skyflow_feature_grid {800x800} {caption: Skyflow Features}](/assets/img/blog/dje-skyflow-feature-grid.png)

Skyflow is built on the [AT Protocol](https://docs.bsky.app/docs/advanced-guides/atproto/), turning Bluesky's open framework into a powerful analytics playground.

Built with [FastAPI](https://fastapi.tiangolo.com/), Skyflow's server connects to the AT Protocol through the [Python SDK](https://atproto.blue/). It authenticates using [XRPC](https://atproto.com/specs/xrpc/), fetches timeline data through [protocol-specific queries](https://docs.bsky.app/docs/category/http-reference), and processes the network data using the SDK's built-in utilities for handling Bluesky's data structures. These raw insights are then transformed into meaningful analytics about your network.

Curious about how this all works? Learn more about the mighty [federation architecture](https://docs.bsky.app/docs/advanced-guides/federation-architecture/) and discover how social media could be reinvented.

### Requirements

Building a social analytics platform isn't just about counting likes and replies. It's about creating a system that can:

1. Handle authentication securely.
2. Process large amounts of social data efficiently.
3. Store and retrieve insights quickly.
4. Present data in meaningful, modular ways.

![sweating {400x400} {caption: Help}](/assets/img/blog/sweating.gif)

And all of this needs to happen in _near_ real-time.

While remaining scalable.

### Technical Architecture Decisions

#### 1. Timeline Processing

One of the first major challenges was efficiently processing timeline data. The `BlueskyService` implements a thoughtful approach to this:

-   Uses cursor-based pagination with a sensible limit (50 posts per request).
-   Implements empty response detection (stops after 5 empty results) to avoid unnecessary API calls.
-   Filters posts by a calculated cutoff time (midnight of the previous day).
-   Maintains a set of seen post IDs to prevent duplicates.
-   Caps the maximum search depth at 2000 posts to balance thoroughness with performance.

Remember, every great project starts with a simple problem and grows through iteration and learning. Keep building, keep learning, and most importantly, keep sharing what you learn with others.

#### 2. Service Pattern

One of the most important architectural decisions was implementing a clear service layer pattern.

For those new to backend development, here’s a basic introduction of the application layers we need to consider:

##### Repository Layer

This is where we handle all interactions with the database. Each repository represents a specific collection and contains methods for performing CRUD (Create, Read, Update, Delete) operations. By abstracting database logic into repositories, we can easily change or update our database interactions without affecting the service or business logic.

##### Service Layer

This is where the business logic of the application lives. A service typically interacts with one or more repositories to perform operations and implement application workflows. The service layer does not directly access the database; instead, it calls the appropriate methods in the repository layer. This ensures the service layer focuses on higher-level application logic, such as validation, data transformation, and coordination between multiple repositories.

##### Router Layer

This is where the application endpoints are defined. Each route handles incoming HTTP requests and forwards them to the appropriate service layer. The service layer processes the request and interacts with the repository as needed, and the result is returned to the client. By keeping the endpoints simple and delegating logic to the service layer, we maintain a clear separation of responsibilities.

Each major [Skyflow](https://skyflow.me) feature (`Flow`, `Clout`, `Kudos`, `Pulse`) has its own corresponding service, repository and database collection.

This separation of concerns makes the code far more maintainable and easily testable.

#### 3. Engagement Analysis

While both `Clout` and `Kudos` dive deep into Bluesky's social fabric, they illuminate different aspects of network influence.

`Clout` focuses on viral moments - the individual posts that break through the noise. It's a snapshot of content that sparks conversation, identifying the top 10 most engaging posts while preventing any single creator from dominating the results.

`Kudos` zooms out to measure sustained impact. It aggregates engagement across likes, replies, and reposts to highlight the top 8 users consistently driving meaningful interactions. This feature goes beyond momentary virality to reveal who's truly moving the network's conversation.

Think of `Clout` as catching lightning, `Kudos` as tracking the storm's entire electrical pattern - now within your core network. Or in flow terms, `Clout` catches the viral waves, `Kudos` reveals who consistently creates them.

![big_deal {400x400} {caption: Going Viral}](/assets/img/blog/making_waves.gif)

The [mutual network filter](https://bsky.app/profile/daniloebs.bsky.social/post/3lgtlg4phxc2j) emerged from a suggestion from one of Skyflow's early adopters - a marketer with 15+ years experience who suggested focusing on accounts that follow you back. This transformed our analytics from broad network trends to your most engaged circle creating _"an entirely different ballgame for building a hype squad"_ (cred: [@daniloebs](https://bsky.app/profile/daniloebs.bsky.social/post/3lhfcfgf5e22a))

The result? Insights that matter, from the connections that truly count.

#### 4. Backend Data Flow

When you use Skyflow, your data goes through a carefully designed journey. Think of it like a social media assembly line, but for understanding your Bluesky presence.

First, when you hit the ‘Connect’ button, Skyflow connects to Bluesky and collects four key things: your profile details, the list of people you follow, the list of people following you, and your recent timeline. Once it has this raw data, it begins processing it through different specialised services - imagine these as different experts each looking at your data through a unique lens. The Flow service looks at engagement trends across the given timeframe, the Clout service identifies the most impactful content, and the Kudos service finds your most engaged connections.

All of this information then feeds into the Pulse service, which combines everything to give you a complete picture of your Bluesky presence. Finally, all these insights are stored in a database (so we can track changes over time) and sent back to your screen in an organized, easy-to-understand format.

![skyflow_data_flow {800x800} {caption: Skyflow Data Sequence Diagram}](/assets/img/blog/dje-skyflow-1-sequence-diagram.png)

The whole process usually takes 10 - 20 seconds, but behind the scenes, it's processing thousands of data points to give you meaningful insights about your Bluesky timeline activity. It's similar to how a professional analyst might study your social media presence, but automated and happening in real-time.

#### 5. Time-Series Data Structure

When working with time-series data, it’s often necessary to group events that occur within specific time intervals. At the heart of the `BlueskyService` class is a sophisticated time-bucketing system that transforms raw data into meaningful patterns, by taking a list of timestamped dictionaries and grouping them based on a predefined timeframe.

Imagine we have a dataset containing log entries with timestamps in ISO format:

```python
    data = [
        {"id": 1, "event": "login", "date": "2024-02-06T14:03:15"},
        {"id": 2, "event": "view_page", "date": "2024-02-06T14:07:42"},
        {"id": 3, "event": "purchase", "date": "2024-02-06T14:18:33"},
        {"id": 4, "event": "logout", "date": "2024-02-06T14:59:50"},
        {"id": 5, "event": "login", "date": "2024-02-06T15:02:10"},
    ]
```

For this example, let’s assume that we want the events to be grouped into 10-minute intervals.

##### Logic

1. Convert each ISO date string into a datetime object.
2. Truncate the timestamp to the nearest 10-minute interval.
3. Store events under their corresponding time slot.

```python
def group_by_date(posts: list, timeframe: int = 10) -> dict:
    """Groups a list of dictionaries by 'date' into specified timing intervals"""

    grouped_posts = {}

    for post in posts:

        # Convert to datetime object
        date_obj = datetime.fromisoformat(post["date"])

        # Truncate timestamp to nearest interval
        delta = timedelta(minutes=date_obj.minute % timeframe)
        group_key = date_obj - delta

        # Edge Case: Handle unwanted midnight shifts
        if group_key.hour == 0 and date_obj.hour > 0:
            group_key -= timedelta(days=1) # Move back 1 day

        # Format timestamp as processable key
        group_key = group_key.strftime("%Y-%m-%d %H:%M")

        # Add post to corresponding group
        grouped_posts.setdefault(group_key, []).append(post)

    return grouped_posts
```

This way, instead of drowning in minute-by-minute noise of a cluttered timeline, we can group our data into clean 10-minute intervals:

```python
{
    "2024-02-06 14:00": [
        {"id": 1, "event": "login", "date": "2024-02-06T14:03:15"},
        {"id": 2, "event": "view_page", "date": "2024-02-06T14:07:42"}
    ],
    "2024-02-06 14:10": [
        {"id": 3, "event": "purchase", "date": "2024-02-06T14:18:33"}
    ],
    "2024-02-06 14:50": [
        {"id": 4, "event": "logout", "date": "2024-02-06T14:59:50"}
    ],
    "2024-02-06 15:00": [
        {"id": 5, "event": "login", "date": "2024-02-06T15:02:10"}
    ]
}
```

This allows us to:

-   Smooth out random fluctuations.
-   Highlight genuine trend lines.
-   Make engagement patterns instantly readable.

Imagine your network's energy as a [catchy disco song](https://www.youtube.com/watch?v=VbD_kBJc_gI/) - instead of counting every single note, Skyflow is finding the rhythm that makes people want to dance.

![dance {400x400} {caption: POV: Your engagement trends}](/assets/img/blog/dance.gif)

### Upcoming Features & Improvements

#### 1. Impact Score System

The next major feature will be the `Pulse` dashboard impact scores. These will:

-   Track your presence across other users' dashboards.
-   Calculate participation scores across the network.
-   Provide visibility into your broader network influence.

#### 2. Growth Strategy Integration

Already considering translating raw metrics into actionable growth strategies:

-   Identifying high-performing content types.
-   Suggesting optimal posting windows based on audience activity.
-   Converting engagement patterns into content timing recommendations.

#### 3. Storage and Scalability

-   Need to optimise the timeline processing for larger, customisable follower networks.
-   Consider implementing caching for frequently accessed profile data.
-   Design a more efficient engagement calculation system.
-   May need to lean towards time-series optimisations over simple document-based structure.

Also considering adding some basic documentation to help with onboarding. Not currently a priority, but the first solution that comes to mind is something like [Docusaurus](https://docusaurus.io/).

#### Building in Public

One of the most rewarding aspects of Skyflow has been progressing it as a [#buildinpublic](https://bsky.app/hashtag/buildinpublic/) project. The [mutuals filter](https://bsky.app/profile/devarno.com/post/3lhecduqpn22l) suggestion is a perfect example of how community feedback is shaping the tool. It's not just about building features – it's about building the right features that solve real problems for Bluesky users. Following a [Reddit launch](https://www.reddit.com/r/BlueskySocial/comments/1iekeso/free_bluesky_analytics_that_actually_show_whos/), another early adopter suggested adding the nice info tooltip now found within each feature section.

If you're using Skyflow or interested in its development, I'd love to [hear your thoughts](mailto:Skyflow<hello@skyflow.me>?subject=Some%20honest%20feedback) on these features and what else you'd like to see. Building tools for creators means constantly evolving with their needs.
