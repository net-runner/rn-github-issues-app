import { nanoid } from 'nanoid';
import React, { useEffect, useReducer } from 'react';
import { issueStorage } from '../../store/issue-storage';
import { Issue, IssueComment, IssuesAction, Repo } from './types';

export interface IssuesState {
  issues: {
    [key: string]: Issue;
  };
  repos: {
    [key: string]: Repo;
  };
  initialized: boolean;
  error: string | undefined;
  query: string;
  queryPage: number;
  currentRepo: string;
}

const issuesReducer = (
  state: IssuesState,
  action: IssuesAction,
): IssuesState => {
  switch (action.type) {
    case 'fetch':
      let newIssues: IssuesState['issues'] = {};
      action.payload.data.forEach((i: Issue) => {
        newIssues[i.id] = i;
      });
      return {
        ...state,
        issues: { ...state.issues, ...newIssues },
        initialized: true,
      };

    case 'delete':
      let is = { ...state.issues };
      delete is[action.payload.IssueId];
      return { ...state, issues: is };

    case 'fetch-comment':
      const comment_list: Issue['comment_list'] = {};
      action.payload.data.forEach((i: IssueComment) => {
        comment_list[i.id] = i;
      });
      let issue = state.issues[action.payload.id];
      issue.comment_list = comment_list;
      return {
        ...state,
        issues: {
          ...state.issues,
          [action.payload.id]: issue,
        },
      };

    case 'repo-set-navigate':
      let navigateIssues = {};
      if (state.currentRepo !== '') {
        issueStorage.set(
          `${state.currentRepo}-issues`,
          JSON.stringify(state.issues),
        );
      }
      if (issueStorage.contains(`${action.payload.id}-issues`)) {
        let storedIssues: IssuesState['issues'] = JSON.parse(
          issueStorage.getString(`${action.payload.id}-issues`)!,
        );

        navigateIssues = { ...storedIssues };
      }
      return {
        ...state,
        issues: navigateIssues,
        currentRepo: action.payload.id,
        queryPage: Math.floor(Object.values(navigateIssues).length / 20),
      };

    case 'repo-add':
      return {
        ...state,
        repos: {
          ...state.repos,
          [action.payload.repo.id]: action.payload.repo,
        },
      };
    case 'repo-delete':
      let repoes = { ...state.repos };
      delete repoes[action.payload.id];
      return {
        ...state,
        repos: repoes,
      };
    case 'add-comment':
      let newComment = action.payload.comment as IssueComment;
      newComment.id = nanoid();
      newComment.created_at = new Date().toDateString();
      issue = state.issues[action.payload.id];
      issue.comments = issue.comments + 1;
      if (!issue.comment_list) {
        issue.comment_list = {};
      }
      issue.comment_list[newComment.id] = newComment;
      return {
        ...state,
        issues: {
          ...state.issues,
          [action.payload.id]: issue,
        },
      };

    case 'queryPageIncrease':
      return {
        ...state,
        queryPage: ++state.queryPage,
      };

    case 'error':
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
//Custom hook for issues state management
export const useIssuesCollection = (): [
  IssuesState,
  React.Dispatch<IssuesAction>,
] => {
  const [state, dispatch] = useReducer(
    issuesReducer,
    {
      issues: {},
      initialized: true,
      error: undefined,
      query: '',
      queryPage: 1,
      currentRepo: '',
      repo: {},
    },
    initial => {
      const persistedStore = JSON.parse(
        issueStorage.getString('issueState') || '{}',
      );
      return Object.entries(persistedStore).length > 0
        ? persistedStore
        : initial;
    },
  );

  useEffect(() => {
    let unmounted = false;
    !unmounted && issueStorage.set('issueState', JSON.stringify(state));
    return () => {
      unmounted = true;
    };
  }, [state]);

  return [state, dispatch];
};
