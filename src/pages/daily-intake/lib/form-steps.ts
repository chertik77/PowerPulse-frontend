import { defineStepper } from '@stepperize/react'

import { BodyAttributesSchema, BodyProfileSchema } from '../model/contract'

export const { Stepper, Scoped, useStepper } = defineStepper(
  {
    id: 'profile',
    title: 'Get closer to your goals!',
    description:
      'To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:',
    schema: BodyProfileSchema
  },
  {
    id: 'attributes',
    title: 'Get closer to your goals!',
    description: null,
    schema: BodyAttributesSchema
  },
  {
    id: 'done',
    title: 'Dear user',
    description:
      'Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach.',
    schema: undefined
  }
)
