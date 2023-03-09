import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { FC, memo, RefObject, useEffect, useRef } from "react";
import { Link } from "gatsby";

interface ItemNavProps {
  title: string;
  slug: string;
  containerRef: RefObject<HTMLDivElement>;
}

const ItemNav: FC<ItemNavProps> = ({ slug, title, containerRef }) => {
  const myRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (myRef.current && containerRef?.current) {
      if (myRef.current.className.includes("active")) {
        const top = myRef.current.offsetTop;
        containerRef.current.scrollTop = top - 100;
      }
    }
  }, [myRef?.current, containerRef?.current]);

  return (
    <>
      <Link
        to={slug}
        className="flex items-center block px-8 hover:bg-gray-300 flex border-r-4 border-gray-100 py-2"
        activeClassName="font-bold text-primary border-primary active bg-gray-200"
        ref={myRef as any}
      >
        <ArrowRightIcon style={{ width: 15, height: 15 }} /> {title}
      </Link>
    </>
  );
};

export default memo(ItemNav);
