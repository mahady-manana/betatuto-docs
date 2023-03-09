import * as React from "react";
import LaunchIcon from "@mui/icons-material/Launch";

interface ReportCardProps {
  githubPath: string;
}
const ReportCard: React.FC<ReportCardProps> = ({ githubPath }) => {
  return (
    <div className="rounded-md p-4 border-gray-200 border-2 my-10">
      <h4 className="font-bold">
        Found an error or have feedback on our docs?
      </h4>
      <div>
        <p className="py-2">
          Create an issue on GitHub and let us know! Your input helps improve
          our documentation for everyone in the community.
        </p>
        <a
          href="https://github.com/mahady-manana/betatuto-docs/issues/new"
          target="_blank"
          referrerPolicy="no-referrer"
          className="block my-2  bg-gray-100 p-2"
        >
          <span className="text-primary">
            Report error, send feedback on Github
            <span className="ml-2">
              <LaunchIcon />
            </span>
          </span>
        </a>
      </div>
      <a
        href={`https://github.com/mahady-manana/betatuto-docs/tree/main/docs${githubPath}`}
        target="_blank"
        referrerPolicy="no-referrer"
        className="block my-2 bg-gray-100 p-2"
      >
        <span className="text-primary">
          Edit this docs - create PR on Github
          <span className="ml-2">
            <LaunchIcon />
          </span>
        </span>
      </a>
      <a
        href="https://github.com/mahady-manana/betatuto-docs/blob/main/README.md"
        target="_blank"
        referrerPolicy="no-referrer"
        className="block my-2  bg-gray-100 p-2"
      >
        <span className="text-primary">
          How to create new doc?
          <span className="ml-2">
            <LaunchIcon />
          </span>
        </span>
      </a>
    </div>
  );
};

export default ReportCard;
