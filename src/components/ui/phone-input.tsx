"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type PhoneInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  name?: string
  id?: string
  disabled?: boolean
  defaultCountry?: RPNInput.Country
}

const PhoneInput = React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
  ({ className, onChange, value, placeholder, name, id, disabled, defaultCountry = "MA", ...props }, ref) => {
    const [country, setCountry] = React.useState<RPNInput.Country>(defaultCountry)
    const [open, setOpen] = React.useState(false)

    const handleCountrySelect = React.useCallback((country: RPNInput.Country) => {
      setCountry(country)
      setOpen(false)
    }, [])

    return (
      <div className={cn("flex", className)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className="flex gap-1 rounded-r-none px-3"
            >
              <span className="text-lg">{flags[country]?.({})}</span>
              <CaretSortIcon className="h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  {Object.entries(RPNInput.getCountries()).map(([code, country]) => (
                    <CommandItem
                      key={code}
                      value={country}
                      onSelect={() => handleCountrySelect(code as RPNInput.Country)}
                    >
                      <span className="mr-2 text-lg">{flags[code as RPNInput.Country]?.({})}</span>
                      <span className="flex-1">{country}</span>
                      {code === country && <CheckIcon className="h-4 w-4 opacity-50" />}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Input
          ref={ref as React.RefObject<HTMLInputElement>}
          id={id}
          name={name}
          className="rounded-l-none"
          type="tel"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          {...props}
        />
      </div>
    )
  },
)

PhoneInput.displayName = "PhoneInput"

export { PhoneInput }

