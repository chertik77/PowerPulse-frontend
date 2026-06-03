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

export type MeBasicFragment = {
  id: string
  name: string
  email: string
  avatar: string | null
}

export type MeBodyFragment = {
  height: number | null
  currentWeight: number | null
  desiredWeight: number | null
  birthday: unknown
  sex: Sex | null
  blood: Blood | null
}

export type MeFitnessFragment = {
  activityLevel: number | null
  dailyCalorieIntake: number | null
  dailyExerciseTime: number
  isDailyIntakeFormCompleted: boolean
}

export type GetMeBasicQueryVariables = Exact<{ [key: string]: never }>

export type GetMeBasicQuery = {
  me: { id: string; name: string; email: string; avatar: string | null }
}

export type GetMeProfileQueryVariables = Exact<{ [key: string]: never }>

export type GetMeProfileQuery = {
  me: {
    id: string
    name: string
    email: string
    avatar: string | null
    height: number | null
    currentWeight: number | null
    desiredWeight: number | null
    birthday: unknown
    sex: Sex | null
    blood: Blood | null
  }
}

export type GetMeFitnessQueryVariables = Exact<{ [key: string]: never }>

export type GetMeFitnessQuery = {
  me: {
    activityLevel: number | null
    dailyCalorieIntake: number | null
    dailyExerciseTime: number
    isDailyIntakeFormCompleted: boolean
  }
}

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never }>

export type RefreshTokensMutation = { refreshTokens: boolean }

export type CalculateDailyIntakeMutationVariables = Exact<{
  input: CalculateDailyIntakeInput
}>

export type CalculateDailyIntakeMutation = {
  calculateDailyIntake: {
    dailyCalorieIntake: number
    dailyExerciseTime: number
  }
}

export type SigninMutationVariables = Exact<{
  input: SigninInput
}>

export type SigninMutation = { signin: boolean }

export type SignupMutationVariables = Exact<{
  input: SignupInput
}>

export type SignupMutation = { signup: boolean }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { logout: boolean }

export const MeBasicFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MeBasic' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<MeBasicFragment, unknown>
export const MeBodyFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MeBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currentWeight' } },
          { kind: 'Field', name: { kind: 'Name', value: 'desiredWeight' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blood' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<MeBodyFragment, unknown>
export const MeFitnessFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MeFitness' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'activityLevel' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dailyCalorieIntake' }
          },
          { kind: 'Field', name: { kind: 'Name', value: 'dailyExerciseTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isDailyIntakeFormCompleted' }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<MeFitnessFragment, unknown>
export const GetMeBasicDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMeBasic' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'MeBasic' }
                }
              ]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MeBasic' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetMeBasicQuery, GetMeBasicQueryVariables>
export const GetMeProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMeProfile' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'MeBasic' }
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'MeBody' }
                }
              ]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MeBasic' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MeBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currentWeight' } },
          { kind: 'Field', name: { kind: 'Name', value: 'desiredWeight' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blood' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetMeProfileQuery, GetMeProfileQueryVariables>
export const GetMeFitnessDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMeFitness' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'MeFitness' }
                }
              ]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MeFitness' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'activityLevel' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'dailyCalorieIntake' }
          },
          { kind: 'Field', name: { kind: 'Name', value: 'dailyExerciseTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isDailyIntakeFormCompleted' }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetMeFitnessQuery, GetMeFitnessQueryVariables>
export const RefreshTokensDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RefreshTokens' },
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
export const CalculateDailyIntakeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CalculateDailyIntake' },
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
export const SigninDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Signin' },
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
      name: { kind: 'Name', value: 'Signup' },
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
export const LogoutDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Logout' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'logout' } }]
      }
    }
  ]
} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>
