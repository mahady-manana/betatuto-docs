import React, { FC } from "react";
import { CommonLayout } from "../Layout/CommonLayout";
import NavBar from "./NavigationBar";

interface TutorialTemplateProps {
  children: any;
  frontmatter: any;
}

export const TutorialTemplate: FC<TutorialTemplateProps> = ({
  children,
  frontmatter,
}) => {
  return (
    <CommonLayout width="w-full m-auto">
      <div className="h-full min-lg:block template-docs gap-2 relative">
        <NavBar tag={frontmatter.tag} />
        {children}
      </div>
    </CommonLayout>
  );
};
