import React, { FC, memo } from "react";
import { Link } from "gatsby";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface ItemNavProps {
  title: string;
  slug: string;
}

const ItemTopic: FC<ItemNavProps> = ({ slug, title }) => {
  return (
    <Link
      to={slug}
      className="inline-flex w-full md:1/2 xl:w-1/3   items-center block px-5 hover:bg-gray-100 flex text-primary py-1 mb-1"
    >
      <ArrowRightIcon style={{ width: 15, height: 15 }} /> <span className="pl-2">{title}</span>
    </Link>
  );
};

export default memo(ItemTopic);
