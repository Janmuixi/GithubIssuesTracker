"use client"
import { useComments } from "@/hooks/useComments";
import { useSearchParams } from "next/navigation";
import { IssueStyled } from "./styles";
import { useIssue } from "@/hooks/useIssue";
import CommentIssue from "@/components/Comment";
import Loader from "@/components/Loader";
import { BackButton } from "./components/BackButton";
import { CommentsList } from "@/components/CommentsList";


export default function Issue() {
    const searchParams = useSearchParams()
    const number = searchParams.get("number")
    const {
        isLoading: isCommentsLoading,
        isError: isCommentsError,
        allComments,
    } = useComments(Number(number))
    const {
        isLoading: isIssueLoading,
        isError: isIssueError,
        issue,
    } = useIssue(Number(number))
    if (isIssueLoading) {
        return <Loader />
    } else if (isIssueError) {
        return <div>There has been an error loading the issue</div>
    }
    else {
        return (
            <IssueStyled>
                <div className="content">
                    <BackButton />
                    <div className="title">
                        <h1>{issue?.title}<span>#{number}</span></h1>
                        <div className="subtitle">
                            <div className={(issue?.state.toLowerCase() === "open" ? "" : "closed") + " state"}>{issue?.state.toUpperCase()}</div>
                            <span>{allComments[0] ? (allComments.length > 1 ? `${allComments.length} comments` : '1 comment') : 'No comments'}</span>
                        </div>
                    </div>
                    {issue && (
                        <CommentIssue author={issue.author} createdAt={issue.createdAt} body={issue?.body} />
                    )}
                    
                    <CommentsList isLoading={isCommentsLoading} isError={isCommentsError} allComments={allComments}/>
                </div>
            </IssueStyled>
        )
    }
}

