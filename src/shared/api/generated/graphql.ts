import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }

export type Blood = 'A' | 'AB' | 'B' | 'O'

export type CalculateDailyIntakeInput = {
  activityLevel: number
  birthday: unknown
  blood: Blood
  currentWeight: number
  desiredWeight: number
  height: number
  sex: Sex
}

export type Sex = 'female' | 'male'

export type SigninInput = {
  email: string
  password: string
}

export type SignupInput = {
  email: string
  name: string
  password: string
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { me: { id: string } }

export type CalculateDailyIntakeMutationVariables = Exact<{
  input: CalculateDailyIntakeInput
}>

export type CalculateDailyIntakeMutation = {
  calculateDailyIntake: {
    dailyCalorieIntake: number
    dailyExerciseTime: number
  }
}

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never }>

export type RefreshTokensMutation = { refreshTokens: boolean }

export type SigninMutationVariables = Exact<{
  input: SigninInput
}>

export type SigninMutation = { signin: boolean }

export type SignupMutationVariables = Exact<{
  input: SignupInput
}>

export type SignupMutation = { signup: boolean }

export const MeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'me' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<MeQuery, MeQueryVariables>
export const CalculateDailyIntakeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'calculateDailyIntake' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CalculateDailyIntakeInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'calculateDailyIntake' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'dailyCalorieIntake' }
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'dailyExerciseTime' }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  CalculateDailyIntakeMutation,
  CalculateDailyIntakeMutationVariables
>
export const RefreshTokensDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'refreshTokens' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokens' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  RefreshTokensMutation,
  RefreshTokensMutationVariables
>
export const SigninDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'signin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SigninInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
                }
              }
            ]
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<SigninMutation, SigninMutationVariables>
export const SignupDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'signup' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SignupInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signup' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
                }
              }
            ]
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>
