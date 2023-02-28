import * as React from "react";
import LaunchIcon from "@mui/icons-material/Launch";

interface ReportCardProps {
  githubPath: string
}
const ReportCard: React.FC<ReportCardProps> =({githubPath}) => {
  return (
    <div className="bg-gray-100 rounded-md p-4 border-secondary border-2 my-10">
      <h4 className="font-bold">Send Feedback - Become A Contributor</h4>
      <a
        href="https://github.com/mahady-manana/betatuto-docs/issues/new"
        target="_blank"
        referrerPolicy="no-referrer"
        className="block my-2"
      >
        <span className="text-primary font-bold">
          Report issues on Github
          <span className="ml-2">
            <LaunchIcon />
          </span>
        </span>
      </a>
      <a
        href={`https://github.com/mahady-manana/betatuto-docs/tree/main/docs${githubPath}`}
        target="_blank"
        referrerPolicy="no-referrer"
        className="block my-2"
      >
        <span className="text-primary font-bold">
          Edit this page on github
          <span className="ml-2">
            <LaunchIcon />
          </span>
        </span>
      </a>
      <a
        href="https://github.com/mahady-manana/betatuto-docs/"
        target="_blank"
        referrerPolicy="no-referrer"
        className="block my-2"
      >
        <span className="text-primary font-bold">
          Create a PR for a PROPOSAL ?
          <span className="ml-2">
            <LaunchIcon />
          </span>
        </span>
      </a>

      <p>
        Open source project - Make sure to read your{" "}
        <a
          href="https://github.com/mahady-manana/betatuto-docs/blob/main/CONTRUBITION_GUIDELINES.md"
          target="_blank"
          referrerPolicy="no-referrer"
          className="font-bold text-primary"
        >
          Contribution Guide
        </a>{" "}
        if you want to contribute, edit or report an issue.
      </p>
    </div>
  );
}

export default ReportCard