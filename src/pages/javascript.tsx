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
              <strong>JavaScript Tutorials and Documentations</strong>
            </h1>
            <p className="text-lg pb-5">Welcome to our JavaScript Tutorials!</p>
            <p className="text-lg pb-5">
              Here, you'll find everything you need to learn about this powerful
              and versatile programming language. Whether you're a beginner or
              an experienced developer, we've got resources that can help you
              take your skills to the next level.
            </p>
            <p className="text-lg">
              To make them simple and comprehensive, we have divided all the
              documentation by topic and levels. We strive to provide detailed
              explanations and the best tutorials possible to help you and
              others.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="container-section">
            <h2 className="pb-4">
              <strong>Learn JavaScript by Topics</strong>
            </h2>
            <p>
              Our mission is to help developers of all levels to learn how to
              code and teach others. If you're not sure where to start, we
              recommend following the order of the topics.
            </p>
          </div>
        </div>
        <div className="border-l-5 border-gray-200 py-5 justify-around container-section m-auto ">
          <TemplatesTutorialsList tag="javascript" />
        </div>
        <div className="px-4 py-10">
          <div className="container-section">
            <p className="pb-5">
              We're always looking for contributors to help us make our
              JavaScript documentation the best it can be. If you're a
              JavaScript expert and you'd like to share your knowledge with
              others, we'd love to hear from you! Whether you'd like to write a
              tutorial, create a video, or contribute to our documentation in
              some other way, we welcome your contributions.
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
  <Metadata title="JavaScript Tutorials - B-Devcom"></Metadata>
);
