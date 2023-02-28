import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { FC, memo, useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

interface ItemNavProps {
  title: string;
  slug: string;
  onActive: (position: number) => void;
}

const ItemNav: FC<ItemNavProps> = ({ slug, title, onActive }) => {
  const myRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const activeEl: HTMLAnchorElement | null =
      document.querySelector(".active");

    if (activeEl && myRef.current) {
      const top = activeEl.offsetTop;
      onActive(top);
    }
  }, []);

  return (
    <Link
      to={slug}
      className="block px-5 py-1 hover:bg-gray-300 flex border-r-4 border-gray-100"
      activeClassName="font-bold text-primary border-primary active"
      ref={myRef as any}
    >
      <ArrowRightIcon /> {title}
    </Link>
  );
};

export default memo(ItemNav);
