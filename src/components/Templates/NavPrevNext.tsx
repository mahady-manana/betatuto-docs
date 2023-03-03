import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Link } from "gatsby";
import React, { FC } from "react";
interface NavPrevNextProps {
  prev?: string;
  next?: string;
  isBottom?: boolean;
}
export const NavPrevNext: FC<NavPrevNextProps> = ({ prev, next, isBottom }) => {
  const className =
    "flex items-center  px-2 py-1 font-bold border-1 border-primary text-white rounded-md";
  return (
    <div className={isBottom ? "mt-10 pt-5" : ""}>
      <div className="nav-next-prev flex items-center justify-between pb-4">
        {prev ? (
          <Link to={prev} className={className}>
            <span className="pr-2">
              <ArrowBack />
            </span>
            Previous
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link to={next} className={className}>
            Next
            <span className="pl-2">
              <ArrowForward />
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
      <hr />
    </div>
  );
};
