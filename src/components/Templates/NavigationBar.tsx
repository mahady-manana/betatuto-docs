import React, { FC, useRef, useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import ItemNav from "./ItemNav";
import { Menu } from "@mui/icons-material";

interface NavbarProps {
  frontmatter: any;
}

interface IPages {
  tag: string;
  title: string;
  slug: string;
  category: string;
  categoryOrder?: number;
  tables?: string;
}

const NavigationBar: FC<NavbarProps> = (props) => {
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
    .filter(({ tag }: any) => tag === props.frontmatter.tag)
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
    <>
      <nav
        className={`nav-bar top-[60px] ${
          showMenu ? "show-menu" : "hide-menu"
        } h-full-no-menu bg-gray-100`}
      >
        <div className="text-right container-menu-toggle bg-gray-800 fixed top-[60px] h-[50px] flex items-center justify-between w-full px-2 bg-white z-50">
          <span
            onClick={() => setShowMenu((prev) => !prev)}
            className="p-2 block border-2 border-primary w-[50px] bg-secondary"
          >
            <Menu />
          </span>
        </div>
        <div
          className={`nav-bar-content md:w-[400px] overflow-y-scroll scrollbar-thin pb-20 ${
            showMenu ? "" : "hidden-menu-mobile"
          }`}
          ref={myRef}
        >
          {topCategorys.map((key, index) => {
            return (
              <div key={`${key.category}-${index} `} className="pb-[2px]">
                <Link
                  to={key.slug}
                  className="py-2 px-5 flex justify-between items-center accordion-title cursor-pointer border-b-2"
                >
                  <strong>{key.category}</strong>
                  <span className="text-[20px]">+</span>
                </Link>
                {props.frontmatter.category === key.category ? (
                  <div className="accordion-content border-b-2">
                    {pages
                      .filter((page) => page.category === key.category)
                      .sort(sortPage)
                      .map(({ title, slug }: any) => {
                        return (
                          <ItemNav
                            slug={slug}
                            title={title}
                            key={slug}
                            containerRef={myRef}
                          />
                        );
                      })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
