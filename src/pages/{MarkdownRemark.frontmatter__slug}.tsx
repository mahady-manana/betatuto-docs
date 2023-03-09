import * as React from "react";
import { graphql, Link } from "gatsby";
import { TutorialTemplate } from "../components/Templates/TutorialTemplate";
import { Metadata } from "../components/Headers/Metadata";
import LaunchIcon from "@mui/icons-material/Launch";
import ReportCard from "../components/Templates/ReportCard";
import { NavPrevNext } from "../components/Templates/NavPrevNext";
import { Home } from "@mui/icons-material";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <TutorialTemplate frontmatter={frontmatter}>
      <div className="main-content-docs w-full">
        <div className="flex doc-container">
          <div className="p-10 pt-[60px] doc-content md:pb-[50px]">
            {frontmatter.breadcrumb ? (
              <>
                <div className="mb-4 p-2 flex flex-wrap pt-[50px] lg:pt-[0px] items-center no-underline">
                  <Link to="/" className="font-bold text-md">
                    <Home />
                  </Link>
                  <span className="px-2">-&gt;</span>
                  {frontmatter.breadcrumb?.map(({ label, slug }: any) => (
                    <div>
                      <Link to={slug} className="font-bold text-md">
                        {label}
                      </Link>
                      <span className="px-2">-&gt;</span>
                    </div>
                  ))}
                  <Link to={frontmatter.slug} className="font-bold text-md">
                    {frontmatter.title}
                  </Link>
                </div>
                <hr />
              </>
            ) : null}
            {frontmatter.nextPath || frontmatter.prevPath ? (
              <NavPrevNext
                prev={frontmatter.prevPath}
                next={frontmatter.nextPath}
              />
            ) : null}
            <h1 className="font-bold">{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {frontmatter.nextPath || frontmatter.prevPath ? (
              <NavPrevNext
                isBottom
                prev={frontmatter.prevPath}
                next={frontmatter.nextPath}
              />
            ) : null}
          </div>
          <div className="p-10 aside-content top-[90px]">
            <div>
              <ReportCard githubPath={frontmatter.githubPath} />
              <div>
                <h4 className="py-4">Contributors : </h4>
                <hr />
                <div className="py-4">
                  {frontmatter.contributor.map((author: any) => {
                    return (
                      <a
                        key={author.name}
                        href={author.link}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="text-primary underline block"
                      >
                        {author.name}
                        <LaunchIcon />
                      </a>
                    );
                  })}
                </div>
                <p>
                  Last updated:{" "}
                  <span className="text-sm font-bold">
                    <i>{frontmatter.updatedAt || "-"}</i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorialTemplate>
  );
}

export const Head = ({
  data, // this prop will be injected by the GraphQL query below.
}: any) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark;

  return (
    <Metadata
      title={`${frontmatter.title} - B-Devcom`}
      description={frontmatter.description}
    />
  );
};

export const pageQuery = graphql`
  query PageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updatedAt(formatString: "MMMM DD, YYYY")
        slug
        title
        tag
        category
        description
        nextPath
        prevPath
        githubPath
        contributor {
          name
          link
        }
        breadcrumb {
          slug
          label
        }
      }
    }
  }
`;
