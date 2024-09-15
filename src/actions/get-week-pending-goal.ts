'use server'

import { api } from '@/lib/api'
import { revalidatePath, revalidateTag } from 'next/cache'

export interface GetWeekPendingGoal {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}

export async function getWeekPendingGoal(): Promise<GetWeekPendingGoal[]> {
  const response = await api('/pending-goals', {
    cache: 'no-cache',
    next: {
      tags: ['pending-goals'],
    },
  })
  const data = await response.json()

  return data.pendingGoal
}
