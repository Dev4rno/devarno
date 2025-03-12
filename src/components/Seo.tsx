// import Head from "next/head";
// export const SEO = ({ pageTitle }: { pageTitle: string }) => (
//     <>
//         <Head>
//             <title>{pageTitle}</title>
//             <meta httpEquiv="x-ua-compatible" content="ie=edge" />
//             <meta name="description" content={pageTitle} />
//             <meta name="robots" content="noindex, follow" />
//             <meta
//                 name="viewport"
//                 content="width=device-width, initial-scale=1, shrink-to-fit=no"
//             />
//             <link rel="icon" href="/favicon.ico" />
//         </Head>
//     </>
// );

import Head from "next/head";

interface SEOProps {
    pageTitle: string;
    keywords: string[];
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    author?: string;
    publishDate?: string;
    isArticle?: boolean;
}

export const SEO = ({
    pageTitle,
    description = "Your Personal Bluesky Observatory: Track viral posts, measure creator impact, and unlock engagement insights.",
    canonicalUrl = "https://skyflow.me",
    ogImage = "/assets/img/brand/og_image.png",
    ogType = "website",
    keywords,
    author,
    publishDate,
    isArticle = false,
}: SEOProps) => {
    const fullUrl = `${canonicalUrl}${
        isArticle ? "/blog/" + pageTitle.toLowerCase().replace(/\s+/g, "-") : ""
    }`;

    return (
        <Head>
            {/* Essential Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />
            <meta name="author" content={author} />

            {/* Indexing and Canonical */}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={isArticle ? "article" : ogType} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Skyflow" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <script
                defer
                data-domain="devarno.com"
                src="https://plausible.io/js/script.js"
            ></script>

            {/* Article-specific meta tags */}
            {isArticle && publishDate && (
                <>
                    <meta
                        property="article:published_time"
                        content={publishDate}
                    />
                    <meta property="article:author" content={author} />
                    <meta property="article:section" content="Technology" />
                    {keywords.map((keyword) => (
                        <meta
                            key={keyword}
                            property="article:tag"
                            content={keyword}
                        />
                    ))}
                </>
            )}

            {/* Viewport and Compatibility */}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
