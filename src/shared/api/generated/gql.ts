/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

import * as types from './graphql'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  'mutation Logout {\n  logout\n}': typeof types.LogoutDocument
  'mutation RefreshTokens {\n  refreshTokens\n}': typeof types.RefreshTokensDocument
  'query GetUser {\n  me {\n    email\n    id\n  }\n}': typeof types.GetUserDocument
  'mutation CalculateDailyIntake($input: CalculateDailyIntakeInput!) {\n  calculateDailyIntake(input: $input) {\n    dailyCalorieIntake\n    dailyExerciseTime\n  }\n}': typeof types.CalculateDailyIntakeDocument
  'mutation Signin($input: SigninInput!) {\n  signin(input: $input)\n}': typeof types.SigninDocument
  'mutation Signup($input: SignupInput!) {\n  signup(input: $input)\n}': typeof types.SignupDocument
}
const documents: Documents = {
  'mutation Logout {\n  logout\n}': types.LogoutDocument,
  'mutation RefreshTokens {\n  refreshTokens\n}': types.RefreshTokensDocument,
  'query GetUser {\n  me {\n    email\n    id\n  }\n}': types.GetUserDocument,
  'mutation CalculateDailyIntake($input: CalculateDailyIntakeInput!) {\n  calculateDailyIntake(input: $input) {\n    dailyCalorieIntake\n    dailyExerciseTime\n  }\n}':
    types.CalculateDailyIntakeDocument,
  'mutation Signin($input: SigninInput!) {\n  signin(input: $input)\n}':
    types.SigninDocument,
  'mutation Signup($input: SignupInput!) {\n  signup(input: $input)\n}':
    types.SignupDocument
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation Logout {\n  logout\n}'
): (typeof documents)['mutation Logout {\n  logout\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation RefreshTokens {\n  refreshTokens\n}'
): (typeof documents)['mutation RefreshTokens {\n  refreshTokens\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetUser {\n  me {\n    email\n    id\n  }\n}'
): (typeof documents)['query GetUser {\n  me {\n    email\n    id\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CalculateDailyIntake($input: CalculateDailyIntakeInput!) {\n  calculateDailyIntake(input: $input) {\n    dailyCalorieIntake\n    dailyExerciseTime\n  }\n}'
): (typeof documents)['mutation CalculateDailyIntake($input: CalculateDailyIntakeInput!) {\n  calculateDailyIntake(input: $input) {\n    dailyCalorieIntake\n    dailyExerciseTime\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation Signin($input: SigninInput!) {\n  signin(input: $input)\n}'
): (typeof documents)['mutation Signin($input: SigninInput!) {\n  signin(input: $input)\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation Signup($input: SignupInput!) {\n  signup(input: $input)\n}'
): (typeof documents)['mutation Signup($input: SignupInput!) {\n  signup(input: $input)\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
