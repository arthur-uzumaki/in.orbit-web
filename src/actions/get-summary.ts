'use server'

import { api } from '@/lib/api'

interface SummaryResponse {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await api('/summary', {
    cache: 'no-cache',
    next: {
      tags: ['summary'],
    },
  })

  const data = await response.json()

  return data.summary
}
