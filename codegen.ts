import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema:
    process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL ?? 'http://localhost:8080/query',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
