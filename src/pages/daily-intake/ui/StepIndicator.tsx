import { cn } from '@/shared/lib'

import { useStepper } from '../lib/form-steps'

export const StepIndicator = () => {
  const stepper = useStepper()

  return (
    <ol
      className='tablet:bottom-8 absolute bottom-5 flex items-center gap-3.5'
      aria-orientation='horizontal'
      role='tablist'>
      {stepper.state.all.map((s, i) => (
        <li key={i}>
          <button
            type='button'
            data-active={i === stepper.state.current.index}
            onClick={() => stepper.navigation.goTo(s.id)}
            className={cn(
              `bg-gray tablet:w-20 data-[active=true]:bg-coral
              data-[active=true]:shadow-base h-1 w-12.5 rounded-xs`,
              i < stepper.state.current.index && 'bg-beige'
            )}
          />
        </li>
      ))}
    </ol>
  )
}
