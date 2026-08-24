import { Helmet } from "react-helmet-async";

export interface SEOProps {
  /**
   * Page title. Will be appended with " | KWT" unless `noTitleSuffix` is true.
   */
  title: string;

  /**
   * Meta description for search engines and social sharing.
   */
  description: string;

  /**
   * Canonical URL for the page. Should be the full absolute URL.
   */
  url?: string;

  /**
   * Open Graph image URL. Defaults to the KWT OG image if not provided.
   */
  image?: string;

  /**
   * Open Graph type. Defaults to "website".
   */
  type?: "website" | "article" | "profile";

  /**
   * Article-specific metadata (optional, for event detail pages).
   */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tag?: string[];
  };

  /**
   * Twitter card type. Defaults to "summary_large_image".
   */
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";

  /**
   * Disable appending " | KWT" to the title.
   */
  noTitleSuffix?: boolean;

  /**
   * Additional keywords for the page (optional).
   */
  keywords?: string;
}

/**
 * SEO component for managing page metadata using react-helmet-async.
 * 
 * Automatically handles:
 * - Page title with KWT branding
 * - Meta description
 * - Open Graph metadata for social sharing
 * - Twitter/X card metadata
 * - Canonical URLs
 * 
 * @example
 * ```tsx
 * <SEO
 *   title="About Us"
 *   description="Learn about KWT's mission to empower Kashmiri women in technology."
 *   url="https://kwtcommunity.org/about"
 * />
 * ```
 */
export default function SEO({
  title,
  description,
  url,
  image = "/images/og-image.png",
  type = "website",
  article,
  twitterCard = "summary_large_image",
  noTitleSuffix = false,
  keywords,
}: SEOProps) {
  const fullTitle = noTitleSuffix ? title : `${title} | KWT`;
  const defaultKeywords = "Kashmiri women in tech, women in technology, tech community, Kashmir, mentorship, jobs, internships, networking";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  // Ensure image URL is absolute
  const absoluteImageUrl = image.startsWith("http") 
    ? image 
    : `${window.location.origin}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Kashmiri Women in Tech (KWT)" />

      {/* Article-specific metadata */}
      {article && type === "article" && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tag?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter / X */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
}
