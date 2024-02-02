import CommentIssue from "./Comment"
import Loader from "./Loader"
import { CommentDetails } from "@/services/types";

export function CommentsList({ allComments, isLoading, isError }: { allComments: CommentDetails[], isLoading: boolean, isError: boolean }) {
    if (isLoading) {
        return <Loader />
    } else if (isError) {
        return <div>There has been an error loading the comments</div>
    } else {
        return (
            allComments.map((comment) => {
                return (
                    <CommentIssue key={comment.id} author={comment.author} createdAt={comment.createdAt} body={comment.body} />
                )
            })
        )
    }
}