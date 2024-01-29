import { MarkdownText } from "@/app/issue/styles";
import AvatarImage from "./AvatarImage";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Author } from "@/services/types";
import * as dayjs from "dayjs";
import * as AdvancedFormat from "dayjs/plugin/advancedFormat"

export default function CommentIssue({ author, createdAt, body }: { author: Author, createdAt: string, body: string }) {
    // dayjs.extend(AdvancedFormat)
    // const formatedDate = dayjs(createdAt).fromNow()
    return (
        <MarkdownText className="body">
            <div className="body-header">
                {
                    author.avatarUrl && (
                        <AvatarImage avatarUrl={author.avatarUrl} />
                    )
                }
                <span>{`${author.login} commented on ${}`}</span>
            </div>
            <div className="body-content">
                <Markdown remarkPlugins={[remarkGfm]}>
                    {body}
                </Markdown>
            </div>
        </MarkdownText>
    )
}