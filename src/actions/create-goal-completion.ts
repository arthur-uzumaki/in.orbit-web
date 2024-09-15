'use server'

import { api } from '@/lib/api'
import { revalidatePath, revalidateTag } from 'next/cache'

interface CreateGoalCompletionRequest {
  goalId: string
}

export async function createGoalCompletion({
  goalId,
}: CreateGoalCompletionRequest) {
  await api('/completions', {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ goalId }),
  })
  revalidateTag('summary')
  revalidateTag('pending-goals')
}
