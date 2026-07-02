import { Helmet } from "react-helmet-async";

const SITE_URL = "https://bmtaxopc.com";

/**
 * Per-page SEO tags: title, description, canonical, Open Graph, Twitter card,
 * and optional JSON-LD structured data.
 */
export default function SEO({ title, description, path = "/", jsonLd, noindex = false }) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title
    ? `${title} | BMTAX INDIA (OPC) PRIVATE LIMITED`
    : "BMTAX INDIA (OPC) PRIVATE LIMITED | GST, Income Tax & Compliance Services";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
