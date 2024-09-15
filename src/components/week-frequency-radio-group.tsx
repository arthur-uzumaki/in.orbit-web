import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'

export function WeekFrequencyRadioGroup() {
  return (
    <>
      <RadioGroupItem value="1">
        <RadioGroupIndicator />
        <span className="text-zinc-300 text-sm font-medium leading-none">
          1x na semana
        </span>
        <span className="text-lg leading-none">🥱</span>
      </RadioGroupItem>
      <RadioGroupItem value="2">
        <RadioGroupIndicator />
        <span className="text-zinc-300 text-sm font-medium leading-none">
          2x na semana{' '}
        </span>
        <span className="text-lg leading-none">🙂</span>
      </RadioGroupItem>
      <RadioGroupItem value="3">
        <RadioGroupIndicator />
        <span className="text-zinc-300 text-sm font-medium leading-none">
          3x na semana
        </span>
        <span className="text-lg leading-none">😎</span>
      </RadioGroupItem>
      <RadioGroupItem value="4">
        <RadioGroupIndicator />
        <span className="text-zinc-300 text-sm font-medium leading-none">
          4x na semana{' '}
        </span>
        <span className="text-lg leading-none">😜</span>
      </RadioGroupItem>
      <RadioGroupItem value="5">
        <RadioGroupIndicator />
        <span className="text-zinc-300 text-sm font-medium leading-none">
          5x na semana
        </span>
        <span className="text-lg leading-none">🤨</span>
      </RadioGroupItem>
      <RadioGroupItem value="6">
        <RadioGroupIndicator />
        <span className="text-zinc-300 text-sm font-medium leading-none">
          6x na semana
        </span>
        <span className="text-lg leading-none">🤯</span>
      </RadioGroupItem>
      <RadioGroupItem value="7">
        <RadioGroupIndicator />
        <span className="text-zinc-300 text-sm font-medium leading-none">
          Todos dias da semana
        </span>
        <span className="text-lg leading-none">🔥</span>
      </RadioGroupItem>
    </>
  )
}
