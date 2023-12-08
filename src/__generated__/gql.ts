/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation SignUp($username: String!, $password: String!) {\n    createUser(input: { username: $username, password: $password }) {\n      id\n      username\n    }\n  }\n": types.SignUpDocument,
    "\n  mutation Login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      username\n    }\n  }\n": types.LoginDocument,
    "\n  mutation AdminLogin($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      isAdmin\n    }\n  }\n": types.AdminLoginDocument,
    "\n  mutation CreateTodo(\n    $title: String!\n    $description: String!\n    $dueDateTimeGMT: String!\n    $uuid: String!\n  ) {\n    createTodo(\n      input: {\n        title: $title\n        description: $description\n        dueDateTime: $dueDateTimeGMT\n        userId: $uuid\n      }\n    ) {\n      id\n    }\n  }\n": types.CreateTodoDocument,
    "\n  mutation UpdateTodoStatus($id: ID!, $status: String!) {\n    updateTodoStatus(id: $id, status: $status) {\n      id\n      status\n    }\n  }\n": types.UpdateTodoStatusDocument,
    "\n  mutation UpdateTodoDone($id: ID!, $done: Boolean!) {\n    updateTodoDone(id: $id, done: $done) {\n      id\n      done\n    }\n  }\n": types.UpdateTodoDoneDocument,
    "\n  query TodosByUserId($userId: ID!) {\n    todosByUserId(userId: $userId) {\n      id\n      title\n      description\n      done\n      dueDateTime\n      status\n      createdAt\n      updatedAt\n    }\n  }\n": types.TodosByUserIdDocument,
    "\n  query GetUsers {\n    users {\n      id\n      username\n    }\n  }\n": types.GetUsersDocument,
    "\n  query GetUserById($id: ID!) {\n    userById(id: $id) {\n      username\n    }\n  }\n": types.GetUserByIdDocument,
    "\n  query IsAdmin($id: ID!) {\n    userById(id: $id) {\n      id\n      isAdmin\n    }\n  }\n": types.IsAdminDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignUp($username: String!, $password: String!) {\n    createUser(input: { username: $username, password: $password }) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp($username: String!, $password: String!) {\n    createUser(input: { username: $username, password: $password }) {\n      id\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation Login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminLogin($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      isAdmin\n    }\n  }\n"): (typeof documents)["\n  mutation AdminLogin($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      isAdmin\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateTodo(\n    $title: String!\n    $description: String!\n    $dueDateTimeGMT: String!\n    $uuid: String!\n  ) {\n    createTodo(\n      input: {\n        title: $title\n        description: $description\n        dueDateTime: $dueDateTimeGMT\n        userId: $uuid\n      }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTodo(\n    $title: String!\n    $description: String!\n    $dueDateTimeGMT: String!\n    $uuid: String!\n  ) {\n    createTodo(\n      input: {\n        title: $title\n        description: $description\n        dueDateTime: $dueDateTimeGMT\n        userId: $uuid\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateTodoStatus($id: ID!, $status: String!) {\n    updateTodoStatus(id: $id, status: $status) {\n      id\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTodoStatus($id: ID!, $status: String!) {\n    updateTodoStatus(id: $id, status: $status) {\n      id\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateTodoDone($id: ID!, $done: Boolean!) {\n    updateTodoDone(id: $id, done: $done) {\n      id\n      done\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTodoDone($id: ID!, $done: Boolean!) {\n    updateTodoDone(id: $id, done: $done) {\n      id\n      done\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TodosByUserId($userId: ID!) {\n    todosByUserId(userId: $userId) {\n      id\n      title\n      description\n      done\n      dueDateTime\n      status\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query TodosByUserId($userId: ID!) {\n    todosByUserId(userId: $userId) {\n      id\n      title\n      description\n      done\n      dueDateTime\n      status\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUsers {\n    users {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    users {\n      id\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserById($id: ID!) {\n    userById(id: $id) {\n      username\n    }\n  }\n"): (typeof documents)["\n  query GetUserById($id: ID!) {\n    userById(id: $id) {\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query IsAdmin($id: ID!) {\n    userById(id: $id) {\n      id\n      isAdmin\n    }\n  }\n"): (typeof documents)["\n  query IsAdmin($id: ID!) {\n    userById(id: $id) {\n      id\n      isAdmin\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;