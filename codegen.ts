import type { CodegenConfig } from "@graphql-codegen/cli";

import "./envConfig";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string]: {
        headers: {
          "x-hasura-admin-secret": `${process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET}`,
        },
      },
    },
  ],
  documents: "./src/domain/**/**.gql",
  generates: {
    "./src/api/operations.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
    "./src/api/hooks.ts": {
      preset: "import-types",
      plugins: ["typescript-react-query"],
      presetConfig: {
        typesPath: "./operations",
      },
      config: {
        reactQueryVersion: 5,
        exposeDocument: true,
        namingConvention: {
          typeNames: "change-case-all#pascalCase",
          enumValues: "change-case-all#upperCase",
          strictScalars: true,
        },
        pureMagicComment: true, //  enforce tree-shaking
        exposeQueryKeys: true, // to prefetch queries (SSR)
        exposeMutationKeys: true,
        withHooks: true,
        // fetcher: {
        //   endpoint: process.env.HASURA_ENDPOINT,
        //   fetchParams: {
        //     headers: {
        //       "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
        //     },
        //   },
        // },
        fetcher: {
          func: "./fetcher#graphql",
          isReactHook: false, // optional, defaults to false, controls the function's signature. Read below
        },
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
