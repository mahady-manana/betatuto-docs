import * as React from "react";
import { graphql } from "gatsby";
import { TutorialTemplate } from "../components/Templates/TutorialTemplate";
import { Metadata } from "../components/Headers/Metadata";
import LaunchIcon from "@mui/icons-material/Launch";
import ReportCard from "../components/Templates/ReportCard";
import { NavPrevNext } from "../components/Templates/NavPrevNext";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark;
  console.log({ frontmatter });

  return (
    <TutorialTemplate frontmatter={frontmatter}>
      <div className="main-content-docs h-full-no-menu">
        <div className="p-10 doc-content pb-[100px]">
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
        <div className="p-10 sticky h-no-menu top-[90px]">
          <div>
            <div>
              <h4 className="font-bold py-4">Contributors : </h4>
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
                <span className="text-sm font-bold underline">
                  {frontmatter.date}
                </span>
              </p>
            </div>
            <ReportCard githubPath={frontmatter.githubPath} />
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
      title={`${frontmatter.title} | B-Devcom`}
      description={frontmatter.description}
    ></Metadata>
  );
};

export const pageQuery = graphql`
  query PageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tag
        category
        description
        githubPath
        nextPath
        prevPath
        contributor {
          name
          link
        }
      }
    }
  }
`;
