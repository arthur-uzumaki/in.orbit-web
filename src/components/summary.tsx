import { Button } from '@/components/ui/button'
import { CheckCircle2, Plus } from 'lucide-react'
import { DialogTrigger } from '@/components/ui/dialog'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress'
import { Separator } from './ui/separator'
import { PendingGoals } from './pending-goals'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { getSummary } from '@/actions/get-summary'
dayjs.locale(ptBr)

export async function Summary() {
  const data = await getSummary()

  if (!data) {
    return null
  }

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPercentual = Math.round((data.completed * 100) / data.total)

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>

        <DialogTrigger asChild>
          <Button className=" gap-2 bg-violet-500 hover:bg-violet-600">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress max={15} value={8}>
          <ProgressIndicator style={{ width: `${completedPercentual}%` }} />
        </Progress>

        <div className="flex justify-between">
          <span className="text-zinc-400 text-xs ">
            Você completou {data.completed} de {data?.total} metas nessa semana.
          </span>
          <span className="text-zinc-400 text-xs ">
            {completedPercentual}%.
          </span>
        </div>
      </div>

      <Separator className="h-[1px] bg-zinc-900" />

      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium text-zinc-100">Sua semana</h2>
        {data.goalsPerDay && Object.keys(data.goalsPerDay).length > 0 ? (
          Object.entries(data.goalsPerDay).map(([date, goals]) => {
            const weekDay = dayjs(date).format('dddd')
            const formattedDate = dayjs(date).format('D [de] MMMM')

            return (
              <div key={date} className="flex flex-col gap-4 ">
                <h3 className="font-medium ">
                  <span className="capitalize">{weekDay}</span>{' '}
                  <span className="text-zinc-400 text-xs">
                    ({formattedDate})
                  </span>
                </h3>

                <ul className="flex flex-col gap-3">
                  {goals.map(goal => {
                    const time = dayjs(goal.completedAt).format('HH:mm')
                    return (
                      <li key={goal.id} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-sm text-zinc-400">
                          Você completou{' '}
                          <span className="text-zinc-100">{goal.title}</span> às{' '}
                          <span className="text-zinc-100"> {time}h</span>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })
        ) : (
          <span className="text-sm text-zinc-400">
            Você ainda não completou nenhuma meta essa semana.
          </span>
        )}
      </div>
    </div>
  )
}
