import { NumberField as NumberFieldPrimitive } from '@base-ui/react/number-field'

import { cn } from '../lib'

const NumberInputRoot = ({
  children,
  ...props
}: NumberFieldPrimitive.Root.Props) => (
  <NumberFieldPrimitive.Root {...props}>{children}</NumberFieldPrimitive.Root>
)

const NumberInput = ({
  className,
  ...props
}: NumberFieldPrimitive.Input.Props) => (
  <NumberFieldPrimitive.Input
    className={cn(
      `autofill:text-fill-white focus-visible:border-orange disabled:bg-gray/30
      focus-visible:ring-orange/50 aria-invalid:border-red
      aria-invalid:ring-red/20 h-11.5 w-full min-w-0 rounded-xl border
      border-white/30 bg-transparent px-3.5 py-1 transition-colors outline-none
      placeholder:text-white/60 autofill:bg-clip-text focus-visible:ring-3
      disabled:pointer-events-none disabled:cursor-not-allowed
      aria-invalid:ring-3`,
      className
    )}
    {...props}
  />
)

export { NumberInputRoot, NumberInput }
