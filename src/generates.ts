import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://smooth-piglet-69.hasura.app/v1/graphql", {
      method: "POST",
      ...{
        headers: {
          "x-hasura-admin-secret":
            "FHcuu2tLegBGw0IReHgD1r532kmbA2jv4W8gFRDPUKIUI48IlpW0PEONjFtTQX9V",
        },
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  timestamp: { input: any; output: any };
  timestamptz: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = "ASC",
  /** descending ordering of the cursor */
  DESC = "DESC",
}

/** mutation root */
export type MutationRoot = {
  __typename?: "mutation_root";
  /** delete data from the table: "old_users" */
  delete_old_users?: Maybe<OldUsersMutationResponse>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<TodosMutationResponse>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "old_users" */
  insert_old_users?: Maybe<OldUsersMutationResponse>;
  /** insert a single row into the table: "old_users" */
  insert_old_users_one?: Maybe<OldUsers>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<TodosMutationResponse>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "old_users" */
  update_old_users?: Maybe<OldUsersMutationResponse>;
  /** update multiples rows of table: "old_users" */
  update_old_users_many?: Maybe<Array<Maybe<OldUsersMutationResponse>>>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<TodosMutationResponse>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update multiples rows of table: "todos" */
  update_todos_many?: Maybe<Array<Maybe<TodosMutationResponse>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};

/** mutation root */
export type MutationRootDeleteOldUsersArgs = {
  where: OldUsersBoolExp;
};

/** mutation root */
export type MutationRootDeleteTodosArgs = {
  where: TodosBoolExp;
};

/** mutation root */
export type MutationRootDeleteTodosByPkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type MutationRootInsertOldUsersArgs = {
  objects: Array<OldUsersInsertInput>;
};

/** mutation root */
export type MutationRootInsertOldUsersOneArgs = {
  object: OldUsersInsertInput;
};

/** mutation root */
export type MutationRootInsertTodosArgs = {
  objects: Array<TodosInsertInput>;
  on_conflict?: InputMaybe<TodosOnConflict>;
};

/** mutation root */
export type MutationRootInsertTodosOneArgs = {
  object: TodosInsertInput;
  on_conflict?: InputMaybe<TodosOnConflict>;
};

/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootUpdateOldUsersArgs = {
  _inc?: InputMaybe<OldUsersIncInput>;
  _set?: InputMaybe<OldUsersSetInput>;
  where: OldUsersBoolExp;
};

/** mutation root */
export type MutationRootUpdateOldUsersManyArgs = {
  updates: Array<OldUsersUpdates>;
};

/** mutation root */
export type MutationRootUpdateTodosArgs = {
  _inc?: InputMaybe<TodosIncInput>;
  _set?: InputMaybe<TodosSetInput>;
  where: TodosBoolExp;
};

/** mutation root */
export type MutationRootUpdateTodosByPkArgs = {
  _inc?: InputMaybe<TodosIncInput>;
  _set?: InputMaybe<TodosSetInput>;
  pk_columns: TodosPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTodosManyArgs = {
  updates: Array<TodosUpdates>;
};

/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

/** columns and relationships of "old_users" */
export type OldUsers = {
  __typename?: "old_users";
  age?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "old_users" */
export type OldUsersAggregate = {
  __typename?: "old_users_aggregate";
  aggregate?: Maybe<OldUsersAggregateFields>;
  nodes: Array<OldUsers>;
};

/** aggregate fields of "old_users" */
export type OldUsersAggregateFields = {
  __typename?: "old_users_aggregate_fields";
  avg?: Maybe<OldUsersAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<OldUsersMaxFields>;
  min?: Maybe<OldUsersMinFields>;
  stddev?: Maybe<OldUsersStddevFields>;
  stddev_pop?: Maybe<OldUsersStddevPopFields>;
  stddev_samp?: Maybe<OldUsersStddevSampFields>;
  sum?: Maybe<OldUsersSumFields>;
  var_pop?: Maybe<OldUsersVarPopFields>;
  var_samp?: Maybe<OldUsersVarSampFields>;
  variance?: Maybe<OldUsersVarianceFields>;
};

/** aggregate fields of "old_users" */
export type OldUsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OldUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type OldUsersAvgFields = {
  __typename?: "old_users_avg_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "old_users". All fields are combined with a logical 'AND'. */
export type OldUsersBoolExp = {
  _and?: InputMaybe<Array<OldUsersBoolExp>>;
  _not?: InputMaybe<OldUsersBoolExp>;
  _or?: InputMaybe<Array<OldUsersBoolExp>>;
  age?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** input type for incrementing numeric columns in table "old_users" */
export type OldUsersIncInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "old_users" */
export type OldUsersInsertInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type OldUsersMaxFields = {
  __typename?: "old_users_max_fields";
  age?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type OldUsersMinFields = {
  __typename?: "old_users_min_fields";
  age?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "old_users" */
export type OldUsersMutationResponse = {
  __typename?: "old_users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<OldUsers>;
};

/** Ordering options when selecting data from "old_users". */
export type OldUsersOrderBy = {
  age?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** select columns of table "old_users" */
export enum OldUsersSelectColumn {
  /** column name */
  AGE = "age",
  /** column name */
  ID = "id",
  /** column name */
  NAME = "name",
}

/** input type for updating data in table "old_users" */
export type OldUsersSetInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type OldUsersStddevFields = {
  __typename?: "old_users_stddev_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type OldUsersStddevPopFields = {
  __typename?: "old_users_stddev_pop_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type OldUsersStddevSampFields = {
  __typename?: "old_users_stddev_samp_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "old_users" */
export type OldUsersStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: OldUsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OldUsersStreamCursorValueInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type OldUsersSumFields = {
  __typename?: "old_users_sum_fields";
  age?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
};

export type OldUsersUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OldUsersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OldUsersSetInput>;
  /** filter the rows which have to be updated */
  where: OldUsersBoolExp;
};

/** aggregate var_pop on columns */
export type OldUsersVarPopFields = {
  __typename?: "old_users_var_pop_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type OldUsersVarSampFields = {
  __typename?: "old_users_var_samp_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type OldUsersVarianceFields = {
  __typename?: "old_users_variance_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = "asc",
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = "asc_nulls_first",
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = "asc_nulls_last",
  /** in descending order, nulls first */
  DESC = "desc",
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = "desc_nulls_first",
  /** in descending order, nulls last */
  DESC_NULLS_LAST = "desc_nulls_last",
}

export type QueryRoot = {
  __typename?: "query_root";
  /** fetch data from the table: "old_users" */
  old_users: Array<OldUsers>;
  /** fetch aggregated fields from the table: "old_users" */
  old_users_aggregate: OldUsersAggregate;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregate relationship */
  todos_aggregate: TodosAggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type QueryRootOldUsersArgs = {
  distinct_on?: InputMaybe<Array<OldUsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<OldUsersOrderBy>>;
  where?: InputMaybe<OldUsersBoolExp>;
};

export type QueryRootOldUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<OldUsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<OldUsersOrderBy>>;
  where?: InputMaybe<OldUsersBoolExp>;
};

export type QueryRootTodosArgs = {
  distinct_on?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};

export type QueryRootTodosAggregateArgs = {
  distinct_on?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};

export type QueryRootTodosByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type QueryRootUsersByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type SubscriptionRoot = {
  __typename?: "subscription_root";
  /** fetch data from the table: "old_users" */
  old_users: Array<OldUsers>;
  /** fetch aggregated fields from the table: "old_users" */
  old_users_aggregate: OldUsersAggregate;
  /** fetch data from the table in a streaming manner: "old_users" */
  old_users_stream: Array<OldUsers>;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregate relationship */
  todos_aggregate: TodosAggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table in a streaming manner: "todos" */
  todos_stream: Array<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type SubscriptionRootOldUsersArgs = {
  distinct_on?: InputMaybe<Array<OldUsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<OldUsersOrderBy>>;
  where?: InputMaybe<OldUsersBoolExp>;
};

export type SubscriptionRootOldUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<OldUsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<OldUsersOrderBy>>;
  where?: InputMaybe<OldUsersBoolExp>;
};

export type SubscriptionRootOldUsersStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<OldUsersStreamCursorInput>>;
  where?: InputMaybe<OldUsersBoolExp>;
};

export type SubscriptionRootTodosArgs = {
  distinct_on?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};

export type SubscriptionRootTodosAggregateArgs = {
  distinct_on?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};

export type SubscriptionRootTodosByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type SubscriptionRootTodosStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<TodosStreamCursorInput>>;
  where?: InputMaybe<TodosBoolExp>;
};

export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type SubscriptionRootUsersByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type SubscriptionRootUsersStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: "todos";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  is_completed?: Maybe<Scalars["Boolean"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars["Int"]["output"]>;
};

/** aggregated selection of "todos" */
export type TodosAggregate = {
  __typename?: "todos_aggregate";
  aggregate?: Maybe<TodosAggregateFields>;
  nodes: Array<Todos>;
};

export type TodosAggregateBoolExp = {
  bool_and?: InputMaybe<TodosAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<TodosAggregateBoolExpBoolOr>;
  count?: InputMaybe<TodosAggregateBoolExpCount>;
};

export type TodosAggregateBoolExpBoolAnd = {
  arguments: TodosSelectColumnTodosAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<TodosBoolExp>;
  predicate: BooleanComparisonExp;
};

export type TodosAggregateBoolExpBoolOr = {
  arguments: TodosSelectColumnTodosAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<TodosBoolExp>;
  predicate: BooleanComparisonExp;
};

export type TodosAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<TodosSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<TodosBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "todos" */
export type TodosAggregateFields = {
  __typename?: "todos_aggregate_fields";
  avg?: Maybe<TodosAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<TodosMaxFields>;
  min?: Maybe<TodosMinFields>;
  stddev?: Maybe<TodosStddevFields>;
  stddev_pop?: Maybe<TodosStddevPopFields>;
  stddev_samp?: Maybe<TodosStddevSampFields>;
  sum?: Maybe<TodosSumFields>;
  var_pop?: Maybe<TodosVarPopFields>;
  var_samp?: Maybe<TodosVarSampFields>;
  variance?: Maybe<TodosVarianceFields>;
};

/** aggregate fields of "todos" */
export type TodosAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TodosSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "todos" */
export type TodosAggregateOrderBy = {
  avg?: InputMaybe<TodosAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TodosMaxOrderBy>;
  min?: InputMaybe<TodosMinOrderBy>;
  stddev?: InputMaybe<TodosStddevOrderBy>;
  stddev_pop?: InputMaybe<TodosStddevPopOrderBy>;
  stddev_samp?: InputMaybe<TodosStddevSampOrderBy>;
  sum?: InputMaybe<TodosSumOrderBy>;
  var_pop?: InputMaybe<TodosVarPopOrderBy>;
  var_samp?: InputMaybe<TodosVarSampOrderBy>;
  variance?: InputMaybe<TodosVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "todos" */
export type TodosArrRelInsertInput = {
  data: Array<TodosInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<TodosOnConflict>;
};

/** aggregate avg on columns */
export type TodosAvgFields = {
  __typename?: "todos_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "todos" */
export type TodosAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type TodosBoolExp = {
  _and?: InputMaybe<Array<TodosBoolExp>>;
  _not?: InputMaybe<TodosBoolExp>;
  _or?: InputMaybe<Array<TodosBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_completed?: InputMaybe<BooleanComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "todos" */
export enum TodosConstraint {
  /** unique or primary key constraint on columns "id" */
  TODOS_PKEY = "todos_pkey",
}

/** input type for incrementing numeric columns in table "todos" */
export type TodosIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  user_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "todos" */
export type TodosInsertInput = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  is_completed?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type TodosMaxFields = {
  __typename?: "todos_max_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  user_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "todos" */
export type TodosMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TodosMinFields = {
  __typename?: "todos_min_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  user_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "todos" */
export type TodosMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "todos" */
export type TodosMutationResponse = {
  __typename?: "todos_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "todos" */
export type TodosOnConflict = {
  constraint: TodosConstraint;
  update_columns?: Array<TodosUpdateColumn>;
  where?: InputMaybe<TodosBoolExp>;
};

/** Ordering options when selecting data from "todos". */
export type TodosOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_completed?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: todos */
export type TodosPkColumnsInput = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "todos" */
export enum TodosSelectColumn {
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  DESCRIPTION = "description",
  /** column name */
  ID = "id",
  /** column name */
  IS_COMPLETED = "is_completed",
  /** column name */
  TITLE = "title",
  /** column name */
  UPDATED_AT = "updated_at",
  /** column name */
  USER_ID = "user_id",
}

/** select "todos_aggregate_bool_exp_bool_and_arguments_columns" columns of table "todos" */
export enum TodosSelectColumnTodosAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  IS_COMPLETED = "is_completed",
}

/** select "todos_aggregate_bool_exp_bool_or_arguments_columns" columns of table "todos" */
export enum TodosSelectColumnTodosAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  IS_COMPLETED = "is_completed",
}

/** input type for updating data in table "todos" */
export type TodosSetInput = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  is_completed?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  user_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type TodosStddevFields = {
  __typename?: "todos_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "todos" */
export type TodosStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TodosStddevPopFields = {
  __typename?: "todos_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "todos" */
export type TodosStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TodosStddevSampFields = {
  __typename?: "todos_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "todos" */
export type TodosStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "todos" */
export type TodosStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TodosStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TodosStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  is_completed?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  user_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type TodosSumFields = {
  __typename?: "todos_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
  user_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "todos" */
export type TodosSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** update columns of table "todos" */
export enum TodosUpdateColumn {
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  DESCRIPTION = "description",
  /** column name */
  ID = "id",
  /** column name */
  IS_COMPLETED = "is_completed",
  /** column name */
  TITLE = "title",
  /** column name */
  UPDATED_AT = "updated_at",
  /** column name */
  USER_ID = "user_id",
}

export type TodosUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TodosIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TodosSetInput>;
  /** filter the rows which have to be updated */
  where: TodosBoolExp;
};

/** aggregate var_pop on columns */
export type TodosVarPopFields = {
  __typename?: "todos_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "todos" */
export type TodosVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TodosVarSampFields = {
  __typename?: "todos_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "todos" */
export type TodosVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TodosVarianceFields = {
  __typename?: "todos_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "todos" */
export type TodosVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** 用户 */
export type Users = {
  __typename?: "users";
  age?: Maybe<Scalars["Int"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  is_online: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  password: Scalars["String"]["output"];
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregate relationship */
  todos_aggregate: TodosAggregate;
  updated_at: Scalars["timestamptz"]["output"];
};

/** 用户 */
export type UsersTodosArgs = {
  distinct_on?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};

/** 用户 */
export type UsersTodosAggregateArgs = {
  distinct_on?: InputMaybe<Array<TodosSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TodosOrderBy>>;
  where?: InputMaybe<TodosBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: "users_aggregate_fields";
  avg?: Maybe<UsersAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
  stddev?: Maybe<UsersStddevFields>;
  stddev_pop?: Maybe<UsersStddevPopFields>;
  stddev_samp?: Maybe<UsersStddevSampFields>;
  sum?: Maybe<UsersSumFields>;
  var_pop?: Maybe<UsersVarPopFields>;
  var_samp?: Maybe<UsersVarSampFields>;
  variance?: Maybe<UsersVarianceFields>;
};

/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type UsersAvgFields = {
  __typename?: "users_avg_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  age?: InputMaybe<IntComparisonExp>;
  country?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_online?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  password?: InputMaybe<StringComparisonExp>;
  todos?: InputMaybe<TodosBoolExp>;
  todos_aggregate?: InputMaybe<TodosAggregateBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "id" */
  USERS_PKEY = "users_pkey",
}

/** input type for incrementing numeric columns in table "users" */
export type UsersIncInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  is_online?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  todos?: InputMaybe<TodosArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: "users_max_fields";
  age?: Maybe<Scalars["Int"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: "users_min_fields";
  age?: Maybe<Scalars["Int"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  age?: InputMaybe<OrderBy>;
  country?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_online?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  password?: InputMaybe<OrderBy>;
  todos_aggregate?: InputMaybe<TodosAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  AGE = "age",
  /** column name */
  COUNTRY = "country",
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  EMAIL = "email",
  /** column name */
  ID = "id",
  /** column name */
  IS_ONLINE = "is_online",
  /** column name */
  NAME = "name",
  /** column name */
  PASSWORD = "password",
  /** column name */
  UPDATED_AT = "updated_at",
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  is_online?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type UsersStddevFields = {
  __typename?: "users_stddev_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type UsersStddevPopFields = {
  __typename?: "users_stddev_pop_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type UsersStddevSampFields = {
  __typename?: "users_stddev_samp_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  is_online?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type UsersSumFields = {
  __typename?: "users_sum_fields";
  age?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  AGE = "age",
  /** column name */
  COUNTRY = "country",
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  EMAIL = "email",
  /** column name */
  ID = "id",
  /** column name */
  IS_ONLINE = "is_online",
  /** column name */
  NAME = "name",
  /** column name */
  PASSWORD = "password",
  /** column name */
  UPDATED_AT = "updated_at",
}

export type UsersUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** aggregate var_pop on columns */
export type UsersVarPopFields = {
  __typename?: "users_var_pop_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type UsersVarSampFields = {
  __typename?: "users_var_samp_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type UsersVarianceFields = {
  __typename?: "users_variance_fields";
  age?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type GetAllUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUserQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "users";
    id: number;
    name: string;
    email: string;
  }>;
};

export const GetAllUserDocument = `
    query getAllUser {
  users {
    id
    name
    email
  }
}
    `;

export const useGetAllUserQuery = <TData = GetAllUserQuery, TError = unknown>(
  variables?: GetAllUserQueryVariables,
  options?: Omit<
    UseQueryOptions<GetAllUserQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<GetAllUserQuery, TError, TData>["queryKey"];
  },
) => {
  return useQuery<GetAllUserQuery, TError, TData>({
    queryKey:
      variables === undefined ? ["getAllUser"] : ["getAllUser", variables],
    queryFn: fetcher<GetAllUserQuery, GetAllUserQueryVariables>(
      GetAllUserDocument,
      variables,
    ),
    ...options,
  });
};
