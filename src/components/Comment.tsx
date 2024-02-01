import { MarkdownText } from "@/app/issue/styles";
import AvatarImage from "./AvatarImage";
import Markdown from "react-markdown";
import { Author } from "@/services/types";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function CommentIssue({ author, createdAt, body }: { author: Author, createdAt: string, body: string }) {
    const formatedDate = dayjs(createdAt).fromNow();
    return (
        <MarkdownText className="body">
            <div className="body-header">
                {
                    author.avatarUrl && (
                        <AvatarImage avatarUrl={author.avatarUrl} />
                    )
                }
                <span>{`${author.login} commented ${formatedDate}`}</span>
            </div>
            <div className="body-content">
                <Markdown>
                    {body}
                </Markdown>
            </div>
        </MarkdownText>
    )
}