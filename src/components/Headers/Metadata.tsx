import React, { FC, ReactNode } from "react";

interface PageHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  children?: ReactNode;
}

const descriptionDefault =
  "Betatuto Developers Community provides a comprehensive documentation about Web Technologies like JavaScript, TypeScript, Node.js, and React.js.";

const defaultTitle = "B-Devcom - Learn JavaScript, TypeScript, React, Node...";
export const Metadata: FC<PageHeadProps> = ({
  title,
  description,
  image,
  url,
  children,
}) => {
  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta property="og:url" content={url || "https://www.betatuto.com"} />
      <meta name="description" content={description || descriptionDefault} />
      <meta name="title" content={title || defaultTitle} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="keywords"
        content="Learn Javascript, Node.js, React.js, Web development, Javascript tutorials, Top technologies, trends technologies, Next.js, web development, Online Tutorials"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content={description || descriptionDefault}
      />
      <meta name="robots" content="index, nofollow" />

      <meta property="og:image" content="/images/share-image.jpg" />

      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || descriptionDefault}
      />
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </>
  );
};
