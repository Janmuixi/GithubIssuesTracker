import ArrowIcon from "../icons/ArrowIcon";
import { Issue } from "../services/types";
import { IssuesListContainer, IssuesListItemContainer } from "./styles";
import Image from 'next/image'

export default function IssuesList({ issuesList, isLoading, isError }: { issuesList: Issue[], isLoading: boolean, isError: boolean }) {
  if (isLoading) {
    return <IssuesListContainer><div>Loading...</div></IssuesListContainer>
  } else if (isError) {
    return <IssuesListContainer>There has been an error while fetching</IssuesListContainer>
  } else if (issuesList.length < 1) {
    return <IssuesListContainer>Empty results</IssuesListContainer>
  } else {
    return (
      <IssuesListContainer>
        {issuesList.map((issue) => {
          return <IssuesListItem key={issue.id} issue={issue} />
        })}
      </IssuesListContainer>
    )
    
  }
}

export function IssuesListItem({ issue }: { issue: Issue}) {
  return (
    <IssuesListItemContainer>
      <Image className="avatar" width={40} height={40} src={issue.author.avatarUrl} alt="avatar-image" />
      <div className="content">
        <div className="title">{issue.title}</div>
        <div>{issue.author.login}</div>
      </div>
      <ArrowIcon />
    </IssuesListItemContainer>
  )
}
