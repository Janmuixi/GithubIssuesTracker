import RightArrowIcon from "./icons/RightArrowIcon";
import { Issue } from "../services/types";
import { IssuesListContainer, IssuesListItemContainer } from "./styles";
import Link from "next/link";
import AvatarImage from "./AvatarImage";
import Loader from "./Loader";

export default function IssuesList({ issuesList, isLoading, isError }: { issuesList: Issue[], isLoading: boolean, isError: boolean }) {
  if (isLoading) {
    return <Loader />
} else if (isError) {
    return <IssuesListContainer>There has been an error while fetching</IssuesListContainer>
  } else if (issuesList.length < 1) {
    return <IssuesListContainer>Empty results</IssuesListContainer>
  } else {
    return (
      <IssuesListContainer>
        {issuesList.map((issue, index) => {
          return <IssuesListItem key={issue.id} issue={issue} index={index} />
        })}
      </IssuesListContainer>
    )

  }
}

export function IssuesListItem({ issue, index }: { issue: Issue, index: number }) {
  return (
    <Link data-testid={`issue-item-${index}`} href={"/issue?number=" + issue.number}>
      <IssuesListItemContainer>
        <div className="left-content">
          <AvatarImage avatarUrl={issue.author.avatarUrl} />
          <div className="info">
            <div className="title">{issue.title}</div>
            <div className="author">{issue.author.login}</div>
          </div>
        </div>

        <div className="arrow">
          <RightArrowIcon />
        </div>
      </IssuesListItemContainer>
    </Link>
  )
}
