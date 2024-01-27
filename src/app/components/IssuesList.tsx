import { Issue } from "../types/Issue";

export default function IssuesList({ issuesList }: { issuesList: Issue[] }) {
  return issuesList.map((issue) => {
    return <div key={issue.name}>{issue.name}</div>;
  });
}
