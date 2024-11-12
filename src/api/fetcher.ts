export function graphql<TData, TVariables>(
  query: string,
  variables?: TVariables,
) {
  return async (): Promise<TData> => {
    const res = await fetch(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, {
      method: "POST",
      ...{
        headers: {
          "x-hasura-admin-secret": process.env
            .NEXT_PUBLIC_HASURA_ADMIN_SECRET as string,
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
