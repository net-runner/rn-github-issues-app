export interface Issue {
  id: string;
  body: string;
  title: string;
  state: 'open' | 'closed';
  created_at: string;
  comments: number;
  comments_url: string;
  comment_list?: {
    [key: string]: IssueComment;
  };
}

export interface IssueComment {
  id: string;
  created_at: string;
  body: string;
  user: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  };
}
export interface CommentFetchAction {
  type: 'fetch-comment';
  payload: {
    id: string;
    data: IssueComment[];
  };
}

export interface CommentAddAction {
  type: 'add-comment';
  payload: {
    id: string;
    comment: Omit<IssueComment, 'id' | 'created_at'>;
  };
}

export interface IssueFetchAction {
  type: 'fetch';
  payload: {
    data: Issue[];
  };
}
export interface IssueIncreaseQueryPageAction {
  type: 'queryPageIncrease';
}
export interface IssueErrorAction {
  type: 'error';
  payload: {
    error: string;
  };
}

export interface IssueDeleteAction {
  type: 'delete';
  payload: {
    IssueId: Issue['id'];
  };
}

export type IssuesAction =
  | IssueFetchAction
  | IssueDeleteAction
  | IssueIncreaseQueryPageAction
  | CommentFetchAction
  | CommentAddAction
  | IssueErrorAction;
