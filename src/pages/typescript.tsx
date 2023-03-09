import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { CommonLayout } from "../components/Layout/CommonLayout";
import { Metadata } from "../components/Headers/Metadata";
import TemplatesTutorialsList from "../components/Templates/TemplatesTutorialsList";

const JavaScriptPage: React.FC<PageProps> = ({}) => {
  return (
    <CommonLayout width="w-full">
      <div className="homesection">
        <div className="border-l-5 border-gray-200 p-10 px-4">
          <div className="container-section m-auto">
            <h1 className="pb-5 h1-title-lg">
              <strong>TypeScript Tutorials</strong>
            </h1>
            <p className="text-lg pb-5">
              Welcome to our TypeScript Tutorials! Here, you'll learn all about
              TypeScript and how it can help you write more maintainable and
              scalable code.
            </p>
            <p className="text-lg pb-5">
              Our <strong>TypeScript</strong> course covers some basic to
              advanced TypeScript concepts.
            </p>
            <p className="text-lg">
              We strongly recommend starting with JavaScript if you don't have a
              basic understanding of the language. Everything you know about
              JavaScript is also applicable to TypeScript.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="container-section">
            <h2 className="pb-4">
              <strong>Start Tutorials by Topics</strong>
            </h2>
            <p>
              If you're not sure where to start, we recommend following the
              order of the topics.
            </p>
            <p>The list of topics we cover is as follows:</p>
          </div>
        </div>
        <div className="border-l-5 border-gray-200 py-5 justify-around container-section m-auto ">
          <TemplatesTutorialsList tag="typescript" />
          <div className="py-10">
            <p className="pb-5">
              If you're interested in contributing to our TypeScript
              documentation, we'd love to hear from you. We're always looking
              for contributors who are passionate about TypeScript and want to
              help others learn. Whether you'd like to write a tutorial, create
              a video, or contribute to our documentation in some other way, we
              welcome your contributions.
            </p>

            <p className="bg-secondary p-3 font-bold">
              NOTE: This content is open source, so feel free to visit our{" "}
              <a
                href="https://github.com/mahady-manana/betatuto-docs"
                rel="no-referer"
                className="underline"
              >
                Github repository
              </a>{" "}
              to contribute and share your knowledge.
            </p>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default JavaScriptPage;

export const Head: HeadFC = () => (
  <Metadata title="TypeScript Tutorials - B-Devcom"></Metadata>
);
