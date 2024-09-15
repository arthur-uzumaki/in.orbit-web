import { Dialog } from '@/components/ui/dialog'
import { EmptyGoals } from '@/components/empty-goals'
import { CreateGoal } from '@/components/create-goal'
import { Summary } from '@/components/summary'
import { getSummary } from '@/actions/get-summary'

export default async function Home() {
  const data = await getSummary()

  return (
    <Dialog>
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
