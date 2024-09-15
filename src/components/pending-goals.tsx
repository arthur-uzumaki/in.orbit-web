import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { getWeekPendingGoal } from '@/actions/get-week-pending-goal'
import { CompleteGoalButton } from './complete-goa-button'
import { createGoalCompletion } from '@/actions/create-goal-completion'

export async function PendingGoals() {
  const pendingGoals = await getWeekPendingGoal()

  return (
    <div className="flex flex-wrap gap-2">
      {pendingGoals?.map(goal => {
        return (
          <CompleteGoalButton
            key={goal.id}
            id={goal.id}
            title={goal.title}
            completionCount={goal.completionCount}
            desiredWeeklyFrequency={goal.desiredWeeklyFrequency}
          />
        )
      })}
    </div>
  )
}

/**
 * 
 * const [pendingGoals, setPendingGoals] = useState<GetWeekPendingGoal[]>([])

  const fetchPendingGoals = useCallback(async () => {
    const response = await getWeekPendingGoal()
    setPendingGoals(response)
  }, [])

  useEffect(() => {
    fetchPendingGoals()
  }, [fetchPendingGoals])

  async function handleCompletionGoal(goalId: string) {
    await createGoalCompletion({ goalId })
    fetchPendingGoals() // Atualiza as metas após completar uma
  }
 */
