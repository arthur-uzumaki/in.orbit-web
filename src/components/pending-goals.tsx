import { getWeekPendingGoal } from '@/actions/get-week-pending-goal'
import { CompleteGoalButton } from './complete-goal-button'

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
