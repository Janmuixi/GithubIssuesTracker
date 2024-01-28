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
export interface InfiniteIssueQueryResponse {
  repository: {
    issue: IssueWithComments
  }
}

export interface IssueWithComments extends Issue {
  comments: {
    pageInfo: PageInfo,
    nodes: Comment[]
  }
}

interface Comment {
  author: Author;
  body: string;
  createdAt: string;
  updatedAt: string;
}
interface Author {
  login: string;
  avatarUrl: string;
}
interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
};