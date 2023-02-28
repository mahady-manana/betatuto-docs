import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { MenuDesktop } from "../Headers/DesktopMenu";

interface CommonLayoutProps {
  children: ReactNode;
  noEspance?: boolean;
  width?: string;
}

export const CommonLayout: FC<CommonLayoutProps> = ({
  children,
  noEspance,
  width,
}) => {
  return (
    <main className="overflow-hidden">
      <MenuDesktop />
      {!noEspance ? <div className="h-[95px]" /> : null}
      <div className="page-container h-full">
        <article
          className={classNames(width ? width : "max-w-[820px]", " m-auto")}
        >
          {children}
        </article>
      </div>
    </main>
  );
};
