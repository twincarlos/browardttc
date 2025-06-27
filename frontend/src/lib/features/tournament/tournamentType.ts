export type TournamentStatus = 'upcoming' | 'open' | 'closed' | 'in_progress' | 'finished'

export interface Tournament {
  id: number
  name: string
  status: TournamentStatus
  registration_deadline?: string
  rating_cutoff?: string
  date?: string
  time?: string
  created_at: string
  updated_at: string
}