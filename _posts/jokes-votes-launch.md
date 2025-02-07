---
titlePlain: "Jokes, Votes,"
titleColor: "Launch"
excerpt: "How I shipped a joke-rating app in just 24 hours"
date: "2024-12-04T11:35:07.322Z"
tags: ["programming", "web dev", "devops"]
keywords: ["jokes", "humour", "nextjs", "webdev", "public", "mvp"]
intro: "Discover the challenges, lessons, and breakthroughs from my #buildinpublic journey to create a joke rating app within a single day."
cardImg: "/assets/img/blog/punpal-voter.png"
coverImg: "/assets/img/blog/jokes-votes-launch-cover.jpg"

author:
    name: Alex Arno
    avatar: "/assets/img/hero/hero-lakes-headshot.png"
---

This week, I was thrilled to gain an amazing following on [Bluesky](https://bsky.app/profile/devarno.com/), and as a token of appreciation for the incredible support, I decided to dive into a quick and fun [#buildinpublic](https://bsky.app/search?q=%23buildinpublic) project.

Less than 24 hours later, I launched [PunPal.net](http://punpal.net) - a humour hub to pick your favourite puns, vote anonymously, and see which jokes top the charts!

#### Goal

My mission was simple: inspire others to create fun, creative apps and bring energy to the [#buildinpublic](https://bsky.app/search?q=%23buildinpublic) community.

I wanted to show that even small projects could have a big impact when you share the process openly.

#### Requirements

I aimed to build the MVP quickly but with key interactive features. The main priority was building a system where users could vote anonymously on jokes and see how their choices contributed to the leaderboard.

The key features that this project required:

-   **`Random joke fetcher`** - fetches a random set of 4 jokes from the PunPal database.
-   **`Voting system`** - users cast votes on jokes, which then influence the leaderboard.
-   **`Leaderboard`** - tracks the most popular jokes based on existing votes.

With the top-level requirements defined, I set the stage by running a simple create-next-app command. This provided a clean slate and the perfect foundation for building a fresh Next.js application, ready to bring my vision to life.

#### Design

##### API Endpoints

The endpoints provide the core functionality of [PunPal.net](https://punpal.net/), enabling users to fetch random jokes, cast votes, view popular jokes, and receive feedback.

| **#** | **Endpoint**                                                                                             | **Purpose**                                         | **Response**                                                                        |
| ----- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `1`   | [`GET /api/jokes`](https://github.com/devArno88/punpal/blob/main/src/app/api/jokes/route.ts)             | Used to fetch 4 random jokes upon startup/refresh   | `{ jokeId: ObjectId, jokeText: string }[]`                                          |
| `2`   | [`POST /api/vote`](https://github.com/devArno88/punpal/blob/main/src/app/api/vote/route.ts)              | Used to cast an anonymous vote for a specific joke  | `{ message: string }`                                                               |
| `3`   | [`GET /api/most-voted`](https://github.com/devArno88/punpal/blob/main/src/app/api/most-voted/route.ts)   | Used to fetch the 10 most popular jokes             | `{ jokeId: ObjectId; jokeText: string; voteCount: number; lastVotedAt: number; }[]` |
| `4`   | [`GET /api/count-today`](https://github.com/devArno88/punpal/blob/main/src/app/api/count-today/route.ts) | Used as feedback for user following successful vote | `{ count: number }`                                                                 |

##### UI Components

The UI components are designed for simplicity and engagement. They enable users to vote on jokes, view the most popular ones, and interact with the app seamlessly, while additional components like the banner and footer enhance overall usability and branding.

| **Component Name**                                                                               | **Purpose**                                                | **Endpoint(s) Used** |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | -------------------- |
| [`<JokeVoter/>`](https://github.com/devArno88/punpal/blob/main/src/components/JokeVoter.tsx)     | Displays a random set of jokes for users to interact with. | `1` - `2` - `4`      |
| [`<MostPopular/>`](https://github.com/devArno88/punpal/blob/main/src/components/MostPopular.tsx) | Displays the top-voted jokes in descending order.          | `3`                  |
| [`<Banner/>`](https://github.com/devArno88/punpal/blob/main/src/components/Banner.tsx)           | Displays main site header and logo                         | -                    |
| [`<Footer/>`](https://github.com/devArno88/punpal/blob/main/src/components/Footer.tsx)           | Displays portfolio/social links for completeness           | -                    |

#### Journey

Building this app was both exciting and stressful. Here are the milestones and hurdles I faced during the 24-hour process:

##### 1. Public debugging

Debugging a [#buildinpublic](https://bsky.app/search?q=%23buildinpublic) project with a 'time restriction' is no joke. I ran into several issues with the random joke fetcher and voting system, and debugging them with users watching was intense. But every issue was a learning experience.

##### 2. Deployment disasters

Getting everything live came with its own set of deployment challenges. There were issues with loading times and voting system feedback, and a whole build log 'pre-rendering error' headache that kept me occupied unitl I went to bed.

But through persistence and a bit of stress, I managed to resolve everything.

##### 3. Lessons

-   **`Pressure → growth`** - debugging and deployment under public scrutiny introduced challenges, but overcoming them made the release even more rewarding.
-   **`Simplicity works`** - the faster I kept things, the quicker I was able to deploy and get feedback.
-   **`Community is key`** - I had amazing support from people following along, which kept me motivated through the challenging chapters.

##### 4. Milestones

Despite the hurdles, PunPal ended up with a fully functional MVP, including:

-   **`Action feedback` ✅** - each vote now shows an immediate feedback with updated vote count.
-   **`Optimised loading` ✅** - improved handling of data fetches and default states.
-   **`Responsive UI` ✅** - the app looks great and works smoothly across different devices.

#### Result

-   MVP 👉 [PunPal.net](http://punpal.net)
-   The full build 👉 [Thread](https://bsky.app/profile/devarno.com/post/3lccyaloo6c2w)
-   Source code 👉 [Repository](http://github.com/devArno88/punpal)

#### Fin

[PunPal.net](http://punpal.net) was an exciting project to work on publicly. The whole experience was both a challenge and a reward, and I’m excited to continue building, improving, and sharing these projects with you to keep the [#buildinpublic](https://bsky.app/search?q=%23buildinpublic) spirit alive.

Stay tuned, more public builds coming soon 👀🔥
