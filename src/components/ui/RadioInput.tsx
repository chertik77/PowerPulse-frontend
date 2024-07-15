import * as RadioGroup from '@radix-ui/react-radio-group'

import { cn } from '@/lib/utils'

export const RadioInput = ({
  value,
  checked
}: RadioGroup.RadioGroupItemProps) => (
  <RadioGroup.Item
    checked={checked}
    className={cn('size-3.5 rounded-full')}
    value={value!}>
    <RadioGroup.Indicator
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={cn(
        `flex justify-center rounded-full after:size-3 after:rounded-full after:border-2
        after:border-white after:dark:border-black`
        // `after:${getPriorityColor(value as Priority)}`
      )}
    />
  </RadioGroup.Item>
)
