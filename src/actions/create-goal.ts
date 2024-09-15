'use server'

import { api } from '@/lib/api'
import { revalidatePath, revalidateTag } from 'next/cache'

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  desiredWeeklyFrequency,
  title,
}: CreateGoalRequest): Promise<void> {
  await api('/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  })
  revalidateTag('summary')
  revalidateTag('pending-goals')
}
