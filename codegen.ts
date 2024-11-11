import type { CodegenConfig } from "@graphql-codegen/cli";

import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.HASURA_ENDPOINT as string]: {
        headers: {
          "x-hasura-admin-secret": `${process.env.HASURA_ADMIN_SECRET}`,
        },
      },
    },
  ],
  documents: "./src/domain/**/**.gql",
  generates: {
    "./src/generates.ts": {
      // 不能用预设集 不然fetcher配置失效
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        reactQueryVersion: 5,
        namingConvention: {
          typeNames: "change-case-all#pascalCase",
          enumValues: "change-case-all#upperCase",
          strictScalars: true,
        },
        withHooks: true,
        preResolveTypes: true,
        // documentMode: "string",
        fetcher: {
          endpoint: process.env.HASURA_ENDPOINT,
          fetchParams: {
            headers: {
              "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
            },
          },
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
