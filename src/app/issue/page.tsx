"use client"
import { useIssue } from "@/hooks/useIssue";
import Link from "next/link";
import { useEffect } from "react";

export default function Issue() {
    const {
        isLoading,
        isError,
        allComments,
        fetchNextPage,
        hasNextPage,
        reset,
    } = useIssue(15486)
    return (
        <div>
            <Link href="/">{ }</Link>
            <ul>
                {allComments.map((comment, index) => (
                    <li key={index}>
                        <strong>{comment.author.login}</strong>
                        <p>{comment.body}</p>
                        <p>Created at: {comment.createdAt}</p>
                        <p>Updated at: {comment.updatedAt}</p>
                    </li>
                ))}
            </ul>
            <NextPageButton hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
        </div>
    )
}
export function NextPageButton({ hasNextPage, fetchNextPage }: {hasNextPage: boolean | undefined, fetchNextPage: () => void}) {
    if (hasNextPage) return (
        <button onClick={fetchNextPage}>NEXT PAGE</button>
    )
}