import { graphql } from '@/shared/api'

export const DailyIntakeDocumet = graphql(`
  mutation calculateDailyIntake($input: CalculateDailyIntakeInput!) {
    calculateDailyIntake(input: $input) {
      dailyCalorieIntake
      dailyExerciseTime
    }
  }
`)
