import { MarkdownText } from "@/app/issue/styles";
import AvatarImage from "./AvatarImage";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Author } from "@/services/types";

export default function CommentIssue({ author, createdAt, body }: { author?: Author, createdAt?: string, body?: string }) {
    return (
        <MarkdownText className="body">
            <div className="body-header">
                {
                    author?.avatarUrl && (
                        <AvatarImage avatarUrl={author.avatarUrl} />
                    )
                }
                <span>{`${author?.login} commented on ${createdAt}`}</span>
            </div>
            <div className="body-content">
                <Markdown remarkPlugins={[remarkGfm]}>
                    {body}
                </Markdown>
            </div>
        </MarkdownText>
    )
}