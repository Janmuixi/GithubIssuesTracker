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
export interface InfiniteQueryResponse {
  search: {
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
    edges: {
      node: Issue;
    }[];
  };
}
