/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  createUser: User;
  deleteTodo: Todo;
  deleteTodoByUserId: Scalars['Int']['output'];
  deleteUser: User;
  login?: Maybe<User>;
  updateTodoDone: Todo;
  updateTodoStatus: Todo;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTodoByUserIdArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateTodoDoneArgs = {
  done: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateTodoStatusArgs = {
  id: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};

export type NewTodo = {
  description: Scalars['String']['input'];
  dueDateTime: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type NewUser = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
  todosByUserId: Array<Todo>;
  userById: User;
  users: Array<User>;
};


export type QueryTodosByUserIdArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  done: Scalars['Boolean']['output'];
  dueDateTime: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  passwordHash: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
};
