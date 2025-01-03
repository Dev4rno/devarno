import Head from "next/head";
export const SEO = ({ pageTitle }: { pageTitle: string }) => (
    <>
        <Head>
            <title>{pageTitle}</title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content={pageTitle} />
            <meta name="robots" content="noindex, follow" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    </>
);
