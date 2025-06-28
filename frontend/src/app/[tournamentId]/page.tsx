'use client'
import { use } from 'react'
import { useGetTournamentFullQuery } from '@/store/apis/tournamentApi'

export default function TournamentPage({ params }: { params: Promise<{ tournamentId: string }> }) {
  const { tournamentId } = use(params)
  const { isLoading, error } = useGetTournamentFullQuery(tournamentId)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {(error as any).data.message}</div>

  return (
    <div>
    </div>
  )
}