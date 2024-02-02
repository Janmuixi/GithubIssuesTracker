export interface Issue {
  id: string;
  author: { login: string, avatarUrl: string };
  title: string;
  body: string;
  number: number;
  state: string;
  createdAt: string;
  updatedAt: string;
  closedAt: string | null;
}
export interface InfiniteSearchIssuesQueryResponse {
  search: {
    pageInfo: PageInfo;
    edges: {
      node: Issue;
    }[];
  };
}
export interface IssueQueryResponse {
  repository: {
    issue: Issue
  }
}
export interface CommentsIssueQueryResponse {
  comments: CommentDetails[]
}

export interface IssueWithComments extends Pick<Issue, 'number'> {
  comments: {
    pageInfo: PageInfo,
    nodes: CommentDetails[]
  }
}

export interface CommentDetails {
  id: string;
  author: Author;
  body: string;
  createdAt: string;
  updatedAt: string;
}
export interface Author {
  login: string;
  avatarUrl: string;
}
interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
};