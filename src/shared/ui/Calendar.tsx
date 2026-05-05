'use client'

import type { ComponentProps } from 'react'
import type { ChevronProps } from 'react-day-picker'
import type { Button } from './Button'

import { formatters } from 'date-fns'
import { DayPicker } from 'react-day-picker'

import { cn } from '../lib'
import { Icon } from './Icon'

export const Calendar = ({
  className,
  locale,
  classNames,
  ...props
}: ComponentProps<typeof DayPicker> & {
  buttonVariant?: ComponentProps<typeof Button>['variant']
}) => (
  <DayPicker
    weekStartsOn={1}
    showOutsideDays
    fixedWeeks
    autoFocus
    className={cn('bg-coral relative rounded-lg p-3.5', className)}
    formatters={{
      formatMonthDropdown: date =>
        date.toLocaleString(locale?.code, { month: 'short' }),
      ...formatters
    }}
    classNames={{
      month_caption: 'border-b border-white/20 pb-3.5 mb-3.5',
      dropdowns:
        'flex w-full items-center justify-center gap-3 text-base font-medium',
      dropdown_root: 'relative rounded-full',
      dropdown: 'absolute inset-0 opacity-0',
      caption_label:
        'text-md font-medium flex items-center justify-center gap-1',
      button_previous: 'absolute left-3.5 top-4.75',
      button_next: 'absolute right-3.5 top-4.75',
      weekdays: 'flex',
      weekday: 'w-7 text-white/50 text-base font-medium',
      weeks: 'block mt-1',
      week: 'flex w-full justify-end',
      day: 'text-base rounded-full group',
      day_button:
        'size-7 rounded-full not-group-aria-selected:hocus:bg-black outline-none',
      today: 'bg-black',
      selected: 'opacity-100 bg-black',
      outside:
        'opacity-20 aria-selected:opacity-100 hocus:opacity-100 data-today:opacity-100',
      ...classNames
    }}
    components={{
      // eslint-disable-next-line @eslint-react/no-nested-component-definitions
      Chevron: ({ orientation }: ChevronProps) => {
        if (orientation === 'left') {
          return (
            <Icon
              name='chevron'
              className={cn(
                'size-3 stroke-white',
                orientation === 'left' && 'rotate-180'
              )}
            />
          )
        }

        if (orientation === 'right') {
          return (
            <Icon
              name='chevron'
              className='size-3 stroke-white'
            />
          )
        }

        return (
          <Icon
            name='chevron'
            className='size-2 rotate-90 stroke-white'
          />
        )
      }
    }}
    {...props}
  />
)
