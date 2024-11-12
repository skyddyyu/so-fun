import * as Types from "./operations";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { graphql } from "./fetcher";

export const GetAllUserDocument = /*#__PURE__*/ `
    query getAllUser {
  users {
    id
    name
    email
  }
}
    `;

export const useGetAllUserQuery = <
  TData = Types.GetAllUserQuery,
  TError = unknown,
>(
  variables?: Types.GetAllUserQueryVariables,
  options?: Omit<
    UseQueryOptions<Types.GetAllUserQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<
      Types.GetAllUserQuery,
      TError,
      TData
    >["queryKey"];
  },
) => {
  return useQuery<Types.GetAllUserQuery, TError, TData>({
    queryKey:
      variables === undefined ? ["getAllUser"] : ["getAllUser", variables],
    queryFn: graphql<Types.GetAllUserQuery, Types.GetAllUserQueryVariables>(
      GetAllUserDocument,
      variables,
    ),
    ...options,
  });
};

useGetAllUserQuery.document = GetAllUserDocument;

useGetAllUserQuery.getKey = (variables?: Types.GetAllUserQueryVariables) =>
  variables === undefined ? ["getAllUser"] : ["getAllUser", variables];
