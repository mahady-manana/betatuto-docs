import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { CommonLayout } from "../components/Layout/CommonLayout";
import styled from "styled-components";
import { Metadata } from "../components/Headers/Metadata";

const ContainerIntro = styled.div`
  min-height: calc(100vh - 60px);
`;
const IndexPage: React.FC<PageProps> = ({ pageContext, data }) => {
  console.log(data);

  return (
    <CommonLayout width="w-full">
      <div className="homesection">
        <ContainerIntro className="w-full h-full h-[95vh]">
          <div className="border-l-5 border-gray-200 homepage-section p-10">
            <div className="container-section m-auto">
              <h1 className="pb-5 text-white h1-title-lg">
                <strong>Welocme To B-Devom Development Team</strong>
              </h1>
              <p className="text-white text-lg pb-5">
                Feel free to share your expertise
              </p>
              <hr className="w-[100px] mb-5 border-2 border-white" />
            </div>
          </div>
          <div className="container-section p-5">
            <h2 className="pb-4">
              <strong>You can open any files you want to edit or check.</strong>
            </h2>
            <h3 className="pb-3 font-bold">
              Betatuto Developers Community: B-Devcom
            </h3>
            <p className="pb-2">
              What is <strong>B-Devcom</strong> ?
            </p>
            
          </div>
        </ContainerIntro>
      </div>
    </CommonLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <Metadata>
    <link rel="canonical" href="https://www.betatuto.com" />
  </Metadata>
);
