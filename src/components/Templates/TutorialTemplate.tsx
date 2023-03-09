import React, { FC, useMemo } from "react";
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
  const memoized = useMemo(
    () => <NavBar frontmatter={frontmatter} />,
    [frontmatter]
  );
  return (
    <CommonLayout width="w-full m-auto" footer={false}>
      <div className="h-full min-lg:block template-docs gap-2 relative">
        {memoized}
        {children}
      </div>
    </CommonLayout>
  );
};
