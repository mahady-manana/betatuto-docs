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
              <strong>React.js Tutorials</strong>
            </h1>
            <p className="text-lg pb-5">
              Welcome to our React.js Tutorials! React is a popular JavaScript
              library for building user interfaces. Whether you're creating a
              simple website or a complex web application, React can help you
              build fast, scalable, and dynamic user interfaces.
            </p>
            <p className="text-lg">
              As always, our mission is to help you level up your skills. Our
              community provides detailed explanations for each topic as much as
              possible.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="container-section">
            <h2 className="pb-4">
              <strong>React.js Topics</strong>
            </h2>
            <p>
              Get started with React.js today! We regularly update our tutorials
              to cover the latest concepts and features of the library.
            </p>
          </div>
        </div>
        <div className="border-l-5 border-gray-200 py-5 justify-around container-section m-auto ">
          <TemplatesTutorialsList tag="react" />
        </div>
        <div className="px-4">
          <div className="container-section py-5">
            <p className="py-5">
              If you're interested in contributing to our React documentation,
              we'd love to hear from you. We're always looking for contributors
              who are passionate about React and want to help others learn.
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
  <Metadata title="React.js Tutorials - B-Devcom"></Metadata>
);
