import { parseAsStringLiteral, useQueryState } from 'nuqs'

export const useStep = () => {
  const [step, setStep] = useQueryState(
    'step',
    parseAsStringLiteral(['profile', 'attributes', 'done'])
      .withDefault('profile')
      .withOptions({ clearOnDefault: false })
  )

  return { step, setStep }
}
