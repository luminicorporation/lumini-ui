/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title }) {
  const {
    site: {
      siteMetadata: {
        author,
        authorId,
        siteUrl,
        socialMediaCard,
        description: metaDescription = description,
        title: siteName,
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            authorId
            siteUrl
            socialMediaCard
          }
        }
      }
    `
  );

  const socialMediaCardSrc = `${siteUrl}/${socialMediaCard}`;
  const metaSiteTitle =
    title !== 'Home'
      ? `${siteName} - ${title}`
      : `${siteName} - A Nils Forsblom Research Company`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title !== 'Home' ? title : 'A Nils Forsblom Research Company'}
      titleTemplate={`${siteName} - %s`}
      meta={[
        { name: `description`, content: metaDescription },
        // Open Graph Card
        { property: `og:title`, content: siteName },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: siteUrl },
        { property: `og:image`, content: socialMediaCardSrc },
        { property: `og:site_name`, content: siteName },
        // Twitter Card
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:title`, content: metaSiteTitle },
        { name: `twitter:description`, content: metaDescription },
        { name: `twitter:image:src`, content: socialMediaCardSrc },
        { name: `twitter:creator`, content: author },
        { name: `twitter:creator:id`, content: authorId },
        { name: `twitter:site`, content: author },
        { name: `twitter:site:id`, content: authorId },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
