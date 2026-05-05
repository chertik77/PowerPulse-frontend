import type { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { useState } from 'react'
import { format } from 'date-fns'

import { cn } from '@/shared/lib'
import { Icon, Popover, PopoverContent, PopoverTrigger } from '@/shared/ui'
import { Calendar } from '@/shared/ui/Calendar'

export const BirthdayDatePicker = <T extends FieldValues>({
  value,
  onChange
}: ControllerRenderProps<T>) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <Popover
      open={isCalendarOpen}
      onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger
        className={cn(
          `enabled:focus-visible:border-orange flex h-11.5 w-full items-center
          justify-between rounded-xl border border-white/30 px-3.5 text-white/60
          outline-none`,
          value && 'text-white'
        )}>
        {value && format(value, 'dd.MM.yyyy')}
        <Icon
          name='calendar'
          className='ml-auto size-4.5 stroke-white'
        />
      </PopoverTrigger>
      <PopoverContent side='top'>
        <Calendar
          mode='single'
          defaultMonth={value}
          captionLayout='dropdown'
          startMonth={new Date(1900, 0)}
          selected={value}
          onSelect={date => {
            if (date) onChange(date.toString())
            setIsCalendarOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
