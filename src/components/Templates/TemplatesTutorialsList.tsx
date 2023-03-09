import React, { FC, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import ItemTopic from "./ItemTopic";

interface TemplatesTutorialsListProps {
  tag: string;
}

interface IPages {
  tag: string;
  title: string;
  slug: string;
  category: string;
  categoryOrder?: number;
}

const TemplatesTutorialsList: FC<TemplatesTutorialsListProps> = (props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              tag
              category
              order
              categoryOrder
            }
          }
        }
      }
    }
  `);

  const pages: IPages[] = data.allMarkdownRemark.edges
    .map(({ node }: any) => ({
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
      tag: node.frontmatter.tag,
      category: node.frontmatter.category,
      order: node.frontmatter.order,
      categoryOrder: node.frontmatter.categoryOrder,
    }))
    .filter(({ tag }: any) => tag === props.tag)
    .sort((a: any, b: any) => {
      if (a.categoryOrder !== undefined && b.categoryOrder !== undefined) {
        return a.categoryOrder - b.categoryOrder;
      }

      if (!a.categoryOrder) {
        return -1;
      }
      if (!b.categoryOrder) {
        return 1;
      }
      return 0;
    });

  const topCategorys = pages
    .filter((page) => page.categoryOrder)
    .sort((a: any, b: any) => a.categoryOrder - b.categoryOrder);

  const sortPage = (a: any, b: any) => a.order - b.order;

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {topCategorys.map((key, index) => {
        return (
          <div key={`${key.category}-${index} `} className="border-2 border-gray-300 mb-4">
            <p
              onClick={(e) =>
                e.currentTarget.nextElementSibling?.classList.toggle("hidden")
              }
              className="py-2 px-5 bg-gray-300 flex justify-between items-center accordion-title cursor-pointer"
            >
              <strong>{key.category}</strong>
              <span className="text-[20px]">+</span>
            </p>
            <div className="py-4">
              {pages
                .filter((page) => page.category === key.category)
                .sort(sortPage)
                .map(({ title, slug }: any) => (
                  <ItemTopic slug={slug} title={title} key={slug} />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TemplatesTutorialsList;
