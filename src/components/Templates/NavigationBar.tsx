import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import ItemNav from "./ItemNav";
import { Menu } from "@mui/icons-material";

interface NavbarProps {
  tag: string;
}

interface IPages {
  tag: string;
  title: string;
  slug: string;
  category: string;
  categoryOrder?: number;
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

  const onActive = useCallback((position: number) => {
    if (myRef.current) {
      myRef.current.scrollTop = position - myRef.current.offsetHeight / 2;
      setShowMenu(false);
    }
  }, []);

  return (
    <>
      <nav
        className={`md:sticky top-[96px] ${
          showMenu ? "show-menu" : "hide-menu"
        } h-full-no-menu bg-gray-100`}
      >
        <div className="text-right container-menu-toggle">
          <span onClick={() => setShowMenu((prev) => !prev)} className="p-2 block border-2 border-primary w-[50px] bg-secondary">
            <Menu />
          </span>
        </div>
        <div
          className={`h-full overflow-y-scroll pb-20 ${
            showMenu ? "" : "hidden-menu-mobile"
          }`}
          ref={myRef}
        >
          {topCategorys.map((key, index) => {
            return (
              <div key={`${key.category}-${index} `} className="pb-4">
                <p className="py-2 mb-4 px-5 bg-gray-800 text-white">
                  <strong>{key.category}</strong>
                </p>
                {pages
                  .filter((page) => page.category === key.category)
                  .sort(sortPage)
                  .map(({ title, slug }: any) => (
                    <ItemNav
                      slug={slug}
                      title={title}
                      key={slug}
                      onActive={onActive}
                    />
                  ))}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
