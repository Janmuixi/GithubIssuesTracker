"use client"
import { useComments } from "@/hooks/useComments";
import { useSearchParams } from "next/navigation";
import { IssueStyled, MarkdownText } from "./styles";
import { useIssue } from "@/hooks/useIssue";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import AvatarImage from "@/components/AvatarImage";
import CommentIssue from "@/components/Comment";
import Loader from "@/components/Loader";
import { Comment } from "@/services/types";


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

    if (!isIssueLoading) {
        return (
            <IssueStyled>
                <div className="content">
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
                    
                    <CommentsList isLoading={isCommentsLoading} allComments={allComments}/>
                </div>
            </IssueStyled>
        )
    }
    else {
        return <Loader />
    }
}

export function CommentsList({ allComments, isLoading }: { allComments: Comment[], isLoading: boolean }) {
    if (isLoading) {
        return <Loader />
    }
    else {
        return (
            allComments.map((comment) => {
                return (
                    <CommentIssue key={comment.id} author={comment.author} createdAt={comment.createdAt} body={comment.body} />
                )
            })
        )
    }
}

