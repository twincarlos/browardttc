export type TournamentEventStatus = 'upcoming' | 'in_progress' | 'finished'
export type TournamentEventStage = 'groups' | 'draw'
export type TournamentEventType = 'singles' | 'teams' | 'doubles'
export type TournamentEventFormat = 'rr' | 'grr' | 'single_elimination' | 'handicap'

export interface TournamentEvent {
  id: number
  name: string
  date: string
  time: string
  entry_fee: string
  tournament_id: number
  max_players: number
  status: TournamentEventStatus
  stage: TournamentEventStage
  type: TournamentEventType
  format: TournamentEventFormat
  max_rating: number
  min_age: number
  max_age: number
  unrated_may_advance: boolean
  created_at: string
  updated_at: string
}