import { BlogPost } from "../types";
import { appColors } from "../utils";

export const highlighter = (word: string): JSX.Element => (
    <i>
        <span style={{ color: appColors.primary }}>{word}</span>
    </i>
);

export const sicilianBytesPost: BlogPost = {
    titlePlain: "Sicilian",
    titleColoured: "Bytes",
    subtitle: "Cooking Up Success in Programming",
    tags: ["cuisine", "coding", "programming", "cooking", "sicily"],
    date: "31st December 2023",
    slug: "sicilian-bytes",
    sections: [
        {
            type: "paragraph",
            text: (
                <>
                    Embarking on a coding journey is like stepping into a kitchen filled with diverse ingredients,
                    offering the potential to create something extraordinary. Taking inspiration from the heartwarming
                    show 'The Bear', which resonates with my Sicilian heritage, let's explore the delightful parallels
                    between crafting code and whipping up culinary masterpieces.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    Sicilian cuisine holds a special place in my heart, weaving together a tapestry of flavours,
                    history, and familial connections. The rich culinary heritage of Sicily, shaped by centuries of
                    diverse cultural influences, resonates deeply with my Italian roots. My love for Sicilian cuisine
                    stems not only from its exquisite taste but also from the stories it tells—the tales of Greeks,
                    Romans, Arabs, Normans, and Spanish, all converging on this vibrant island. My passion is not just
                    about creating delicious meals; it's about preserving and sharing the rich traditions that make
                    Sicily's culinary tapestry so extraordinary.
                </>
            ),
        },
        {
            type: "image",
            src: "/assets/img/blog/sicilian-bytes-bear.jpeg",
            caption: "Carmine 'Carmy' Berzatto as seen in The Bear",
        },
        {
            type: "paragraph",
            text: (
                <>
                    From coding involtini to savouring the richness of olive harvesting in Sicily, join me on this
                    gastronomic adventure where the kitchen and the code editor come together.
                </>
            ),
        },
        {
            type: "subtitle",
            text: "Coding Involtini: The Art of Wrapping Logic",
        },
        {
            type: "paragraph",
            text: (
                <>
                    Involtini is a wonderfully versatile dish with deep roots in Sicilian cuisine. From beef and pork to
                    aubergine and swordfish, involtini can be enjoyed in a myriad of ways, reflecting the versatility
                    inherent in Sicilian culinary traditions.
                </>
            ),
        },
        {
            type: "image",
            src: "/assets/img/blog/sicilian-bytes-involtini.png",
            caption: "A candid shot of me tucking into some of Nonna's involtini",
        },
        {
            type: "paragraph",
            text: (
                <>
                    Within the Arnò family, involtini are more than just a dish - they are a cherished tradition that
                    bring the entire family together for holidays and special occasions, adding a touch of Sicily to
                    every bite. Just the aroma of cooking involtini evokes a sense of comfort that I find difficult to
                    describe.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    The word {highlighter("involto")} quite literally means {highlighter("wrapped")}, and much like the
                    process of preparing these delectable rolls, coding involves the art of{" "}
                    {highlighter("wrapping logic")} across various segments of an application. Each involtino, with its
                    layers of flavour and texture, mirrors the structured layers of code that encapsulate the{" "}
                    {highlighter("embedded functionality")}. Each roll contributes to the overall taste of the dish,
                    just as every line of code contributes to the functionality of the program.
                </>
            ),
        },
        {
            type: "subtitle",
            text: "The Piccata Paradox: Crafting The Perfect Balance",
        },
        {
            type: "paragraph",
            text: (
                <>
                    The preparation of chicken piccata involves pan-frying thinly sliced chicken cutlets and then
                    topping them with a tangy and flavourful sauce made with lemon, capers, white wine and butter. As
                    with many Sicilian dishes, chicken piccata is not just about the taste—it's a connection to
                    heritage, a celebration of culinary artistry, and a way to pass down traditions from one generation
                    to the next.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    Coding algorithms are somewhat like preparing this delightful dish – by achieving the perfect
                    balance of flavours. Just as the zesty lemon and salty capers complement the sweet wine and savoury
                    chicken, a well-crafted algorithm finds equilibrium between efficiency, clarity and precision. It's
                    about balancing the ingredients to create a harmonious and effective piece of code that satisfies
                    the requirements.
                </>
            ),
        },
        {
            type: "subtitle",
            text: "The Caponata Chronicles: Mixing the Right Components",
        },
        {
            type: "paragraph",
            text: (
                <>
                    Beyond its culinary significance, caponata holds cultural importance for Sicilian families. It often
                    features prominently in gatherings and celebrations, symbolising the shared history and traditions
                    of the Sicilian people. This dish becomes a communal experience, connecting generations and
                    reinforcing a sense of identity rooted in Sicily's rich past.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    Using a mix of aubergine, tomatoes, olives and pine nuts, caponata reflects the art of blending and
                    serving the right components to the consumer – a skill crucial in coding. Each component contributes
                    to the dish’s incredibly rich flavour, just like selecting the right libraries, frameworks, and
                    modules enriches the user experience.
                </>
            ),
        },
        {
            type: "subtitle",
            text: "Cannoli-ous Integration: A Coding Confectionery",
        },
        {
            type: "paragraph",
            text: (
                <>
                    Cannoli, the cherished Sicilian dessert, is more than a delightful treat; it's a cultural symbol,
                    embodying the essence of Sicilian identity and pride. The term 'cannolo', meaning 'little tube' in
                    Italian, perfectly describes its tube-shaped pastry shell. Just as a cannolo brings people together
                    to savour life's sweet moments, coding aims to unite users through seamless digital experiences.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    In the realm of software development, the term 'integration' takes on a significant role. Continuous
                    Integration, much like the process of assembling a perfect cannolo, involves blending and testing
                    various components seamlessly. It's a coding confectionery where each piece, like the layers of a
                    cannolo, contributes to the overall harmony of the user interface. Just as continuous integration in
                    coding ensures a smooth blend of software components, a well-crafted cannolo integrates the crisp
                    shell with its sweet filling for an unmatched experience. It's not just about crafting code or
                    desserts; it's about integrating elements harmoniously to deliver a delightful experience, be it in
                    the digital realm or at the dessert table.
                </>
            ),
        },
        {
            type: "subtitle",
            text: "Olive Refactoring: Nurturing Growth",
        },
        {
            type: "paragraph",
            text: (
                <>
                    Harvesting for olive oil is a time-honoured tradition within my family, deeply rooted in Sicilian
                    agriculture. The cultivation of olives in Sicily dates back thousands of years, with olive trees
                    thriving in the region's favourable climate and fertile soil. The landscape, characterised by
                    hillsides and coastal areas, provides an ideal environment for olive groves.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    In the autumn, as the harvest season arrives, families and communities in Sicily unite in a
                    collective effort to pick olives from the trees, employing various methods that mirror the
                    approaches a programmer takes with their codebase. Much like the traditional ‘**Brucatura’**, where
                    olives are meticulously harvested by hand, preserving both the fruit and the delicate twigs
                    (ramoscelli), the programmer delicately tends to their code, refining it with precision. This
                    method, similar to manual code refinement, ensures the highest quality but demands significant time
                    and labor investment.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    On larger and more complex codebases, programmers may adopt the <span>Bacchiatura</span> technique.
                    Using either a stick (bastone), a cane (canna) or a mechanical olive beater (oliviero), they beat
                    through the branches, allowing mature issues or inefficiencies to fall away. This method, similar to
                    addressing code concerns systematically, proves effective when the manual collection is impractical
                    due to the scale of the project. It streamlines the process, but the impact may be less nuanced than
                    the handcrafted approach.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    For the ambitious and forward-thinking, the ‘Scuotitura’ method aligns with using machines to shake
                    (scuotere) the olive tree, causing a cascade of olives to descend. In programming terms, this
                    parallels the use of automated tools or methodologies to induce a systematic review and evolution of
                    the codebase. While more commonly embraced by large-scale commercial growers, the long-term
                    efficiency and cost-effectiveness of this approach reflects the strategic use of automation in code
                    maintenance.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    In both olive harvesting and coding practices, the chosen method reflects a balance between
                    craftsmanship and efficiency. Whether meticulously harvesting by hand, systematically addressing
                    issues, or embracing automation, the overarching goal is a continual refinement and enhancement,
                    preserving the essence of quality and tradition while adapting to the evolving landscape. Pruning
                    unnecessary branches and refining code ensures a robust foundation, creating a legacy that lasts.
                </>
            ),
        },
        {
            type: "subtitle",
            text: "A Trio of Passions",
        },
        {
            type: "paragraph",
            text: (
                <>
                    In my universe, family, food, and code form the ultimate trifecta. Whether I'm immersed in a new
                    side project or stirring a bubbling pot, the satisfaction of creation remains the same. It's about
                    bringing ideas to life, whether in the form of a delectable dish or a well-crafted application.
                </>
            ),
        },
        {
            type: "paragraph",
            text: (
                <>
                    As we venture into the realms of coding and the kitchen, we discover that both are a delicate dance
                    of creativity, precision, and passion. Whether it's wrapping up an involtino of logic or savouring
                    the richness of our family oil, each experience contributes to a flavourful journey. So, put on your
                    apron and grab your keyboard – let's embark on the delicious odyssey of my 'Sicilian Bytes'. 🍲🚀
                </>
            ),
        },
    ],
};
