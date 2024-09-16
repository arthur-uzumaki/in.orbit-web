'use client'
import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { createGoalCompletion } from '@/actions/create-goal-completion'

interface CompleteGoalButtonProps {
  id: string
  title: string
  completionCount: number
  desiredWeeklyFrequency: number
}
export async function CompleteGoalButton({
  title,
  completionCount,
  desiredWeeklyFrequency,
  id,
}: CompleteGoalButtonProps) {
  async function handleCompletionGoal(goalId: string) {
    await createGoalCompletion({ goalId })
  }
  return (
    <div className="flex flex-wrap gap-2">
      <OutlineButton
        disabled={completionCount >= desiredWeeklyFrequency}
        className="bg-zinc-950"
        onClick={() => handleCompletionGoal(id)}
      >
        <Plus className="size-4 text-zinc-600" />
        {title}
      </OutlineButton>
    </div>
  )
}
