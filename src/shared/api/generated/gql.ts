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
  'fragment MeBasic on User {\n  id\n  name\n  email\n  avatar\n}\n\nfragment MeBody on User {\n  height\n  currentWeight\n  desiredWeight\n  birthday\n  sex\n  blood\n}\n\nfragment MeFitness on User {\n  activityLevel\n  dailyCalorieIntake\n  dailyExerciseTime\n  isDailyIntakeFormCompleted\n}\n\nquery GetMeBasic {\n  me {\n    ...MeBasic\n  }\n}\n\nquery GetMeProfile {\n  me {\n    ...MeBasic\n    ...MeBody\n  }\n}\n\nquery GetMeFitness {\n  me {\n    ...MeFitness\n  }\n}': typeof types.MeBasicFragmentDoc
  'mutation RefreshTokens {\n  refreshTokens\n}': typeof types.RefreshTokensDocument
  'mutation CalculateDailyIntake($input: CalculateDailyIntakeInput!) {\n  calculateDailyIntake(input: $input) {\n    dailyCalorieIntake\n    dailyExerciseTime\n  }\n}': typeof types.CalculateDailyIntakeDocument
  'mutation Signin($input: SigninInput!) {\n  signin(input: $input)\n}': typeof types.SigninDocument
  'mutation Signup($input: SignupInput!) {\n  signup(input: $input)\n}': typeof types.SignupDocument
  'mutation Logout {\n  logout\n}': typeof types.LogoutDocument
}
const documents: Documents = {
  'fragment MeBasic on User {\n  id\n  name\n  email\n  avatar\n}\n\nfragment MeBody on User {\n  height\n  currentWeight\n  desiredWeight\n  birthday\n  sex\n  blood\n}\n\nfragment MeFitness on User {\n  activityLevel\n  dailyCalorieIntake\n  dailyExerciseTime\n  isDailyIntakeFormCompleted\n}\n\nquery GetMeBasic {\n  me {\n    ...MeBasic\n  }\n}\n\nquery GetMeProfile {\n  me {\n    ...MeBasic\n    ...MeBody\n  }\n}\n\nquery GetMeFitness {\n  me {\n    ...MeFitness\n  }\n}':
    types.MeBasicFragmentDoc,
  'mutation RefreshTokens {\n  refreshTokens\n}': types.RefreshTokensDocument,
  'mutation CalculateDailyIntake($input: CalculateDailyIntakeInput!) {\n  calculateDailyIntake(input: $input) {\n    dailyCalorieIntake\n    dailyExerciseTime\n  }\n}':
    types.CalculateDailyIntakeDocument,
  'mutation Signin($input: SigninInput!) {\n  signin(input: $input)\n}':
    types.SigninDocument,
  'mutation Signup($input: SignupInput!) {\n  signup(input: $input)\n}':
    types.SignupDocument,
  'mutation Logout {\n  logout\n}': types.LogoutDocument
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
  source: 'fragment MeBasic on User {\n  id\n  name\n  email\n  avatar\n}\n\nfragment MeBody on User {\n  height\n  currentWeight\n  desiredWeight\n  birthday\n  sex\n  blood\n}\n\nfragment MeFitness on User {\n  activityLevel\n  dailyCalorieIntake\n  dailyExerciseTime\n  isDailyIntakeFormCompleted\n}\n\nquery GetMeBasic {\n  me {\n    ...MeBasic\n  }\n}\n\nquery GetMeProfile {\n  me {\n    ...MeBasic\n    ...MeBody\n  }\n}\n\nquery GetMeFitness {\n  me {\n    ...MeFitness\n  }\n}'
): (typeof documents)['fragment MeBasic on User {\n  id\n  name\n  email\n  avatar\n}\n\nfragment MeBody on User {\n  height\n  currentWeight\n  desiredWeight\n  birthday\n  sex\n  blood\n}\n\nfragment MeFitness on User {\n  activityLevel\n  dailyCalorieIntake\n  dailyExerciseTime\n  isDailyIntakeFormCompleted\n}\n\nquery GetMeBasic {\n  me {\n    ...MeBasic\n  }\n}\n\nquery GetMeProfile {\n  me {\n    ...MeBasic\n    ...MeBody\n  }\n}\n\nquery GetMeFitness {\n  me {\n    ...MeFitness\n  }\n}']
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation Logout {\n  logout\n}'
): (typeof documents)['mutation Logout {\n  logout\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
