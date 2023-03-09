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
              <strong>Node.js Tutorials</strong>
            </h1>
            <p className="text-lg pb-5">
              Welcome to our Node.js Tutorials! Here, you'll learn how to use
              Node.js to build fast, scalable, and efficient server-side
              applications.
            </p>
            <p className="text-lg pb-5">
              Our <strong>Node.js</strong> tutorials and docs are created by
              developers for developers. We regularly update our tutorials to
              cover the latest concepts and features of Node.js.
            </p>
            <p className="text-lg pb-5">
              Our documentation is designed to be simple and comprehensive. To
              achieve this, we've organized it by topic and level of difficulty.
              Our goal is to provide you and others with the best possible
              tutorials and detailed explanations to help you learn effectively.
            </p>
            <p className="text-lg pb-5">
              Whether you're new to Node.js or you're an experienced developer,
              we've got resources that can help you take your skills to the next
              level.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="container-section">
            <h2 className="pb-4">
              <strong>Node.js Topics</strong>
              <p className="py-4">
                So let's start learning Node.js and building fast, efficient
                server-side applications together!
              </p>
            </h2>
          </div>
        </div>
        <div className="border-l-5 border-gray-200 py-5 justify-around container-section m-auto ">
          <TemplatesTutorialsList tag="node" />
        </div>
        <div className="px-4">
          <div className="container-section py-5">
            <p className="py-5">
              If you're interested in contributing to our Node.js documentation,
              we'd love to hear from you. We're always looking for contributors
              who are passionate about Node.js and want to help others learn.
              Whether you'd like to write a tutorial, create a video, or
              contribute to our documentation in some other way, we welcome your
              contributions.
            </p>
            <p className="bg-secondary p-3 font-bold py-4">
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
  <Metadata title="Node.js Tutorials - B-Devcom"></Metadata>
);
