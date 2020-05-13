import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: HTMLMetaElement[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = '',
  lang = 'tr',
  meta = [],
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{
        class: 'has-navbar-fixed-top',
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `deepin,linux,linux deepin,deepin linux,deepin os,manjaro deepin,distrowatch,deepintr,deepin tr,deepin download,deepin indir,deepin kurulum,deepin teknoloji,teknoloji topluluğu,deepin teknoloji topluluğu,deepin Türkiye topluluğu,masaüstü ortamı,dde,distribution,distro,pardus,yeni sürüm,deepin Turkey community`,
        },
        {
          name: `google-site-verification`,
          content: `p4oebLP_Bux5VSf6bVWvSxNFeZvaDK0FLjESKw8XxLk`,
        },
        {
          name: `yandex-verification`,
          content: `661e90c8e2f6bd27`,
        },
        {
          name: `msvalidate.01`,
          content: `7B040667DB99A361E8E28707F2D3BFBE`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author,
        // },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
