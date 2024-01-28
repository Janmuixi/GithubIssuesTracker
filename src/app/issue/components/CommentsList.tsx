import { Comment } from "@/services/types"
import Link from "next/link"

export function CommentsList({ comments }: { comments: Comment[] }) {
    if (comments[0]) {
        return (
            <div>
                <Link href="/">{ }</Link>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.author?.login}</strong>
                            <p>{comment.body}</p>
                            <p>Created at: {comment.createdAt}</p>
                            <p>Updated at: {comment.updatedAt}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    return (
        <div>error</div>
    )
}