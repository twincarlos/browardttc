'use client'

import { useAppSelector, useAppDispatch } from '../lib/hooks'
import { 
  addTournament, 
  setCurrentTournament,
  addTournamentEvent,
  addTournamentPlayer,
  clearError 
} from '../lib/features/tournament/tournamentSlice'
import type { 
  Tournament, 
  TournamentEvent, 
  TournamentPlayer 
} from '../lib/features/tournament/tournamentSlice'

export default function TournamentExample() {
  const dispatch = useAppDispatch()
  const { 
    tournaments, 
    currentTournament, 
    tournamentEvents, 
    tournamentPlayers, 
    loading, 
    error 
  } = useAppSelector((state) => state.tournament)

  const handleAddTournament = () => {
    const newTournament: Tournament = {
      id: Date.now(),
      name: `Tournament ${tournaments.length + 1}`,
      status: 'upcoming',
      registration_deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      rating_cutoff: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      time: '09:00:00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    dispatch(addTournament(newTournament))
  }

  const handleAddEvent = (tournamentId: number) => {
    const newEvent: TournamentEvent = {
      id: Date.now(),
      name: `Event ${tournamentEvents.length + 1}`,
      tournament_id: tournamentId,
      entry_fee: '25.00',
      max_players: 16,
      status: 'upcoming',
      type: 'singles',
      format: 'rr',
      unrated_may_advance: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    dispatch(addTournamentEvent(newEvent))
  }

  const handleAddPlayer = (tournamentId: number) => {
    const newPlayer: TournamentPlayer = {
      id: Date.now(),
      name: `Player ${tournamentPlayers.length + 1}`,
      tournament_rating: 1500,
      actual_rating: 1500,
      tournament_id: tournamentId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    dispatch(addTournamentPlayer(newPlayer))
  }

  const handleSetCurrentTournament = (tournament: Tournament) => {
    dispatch(setCurrentTournament(tournament))
  }

  const handleClearError = () => {
    dispatch(clearError())
  }

  if (loading) {
    return <div>Loading tournaments...</div>
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tournament Redux Example</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
          <button 
            onClick={handleClearError}
            className="ml-2 text-red-800 underline"
          >
            Clear
          </button>
        </div>
      )}

      <div className="mb-4 space-x-2">
        <button 
          onClick={handleAddTournament}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Sample Tournament
        </button>
        {currentTournament && (
          <>
            <button 
              onClick={() => handleAddEvent(currentTournament.id)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Event to Tournament
            </button>
            <button 
              onClick={() => handleAddPlayer(currentTournament.id)}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Player to Tournament
            </button>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Tournaments ({tournaments.length})</h3>
          <div className="space-y-2">
            {tournaments.map((tournament) => (
              <div 
                key={tournament.id} 
                className={`border p-3 rounded cursor-pointer hover:bg-gray-50 ${
                  currentTournament?.id === tournament.id ? 'bg-blue-100 border-blue-500' : ''
                }`}
                onClick={() => handleSetCurrentTournament(tournament)}
              >
                <h4 className="font-medium">{tournament.name}</h4>
                <p className="text-sm text-gray-600">Status: {tournament.status}</p>
                {tournament.date && (
                  <p className="text-sm text-gray-600">Date: {tournament.date}</p>
                )}
                {tournament.registration_deadline && (
                  <p className="text-sm text-gray-600">
                    Registration: {tournament.registration_deadline}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Events ({tournamentEvents.filter(e => e.tournament_id === currentTournament?.id).length})
          </h3>
          <div className="space-y-2">
            {tournamentEvents
              .filter(event => event.tournament_id === currentTournament?.id)
              .map((event) => (
                <div key={event.id} className="border p-3 rounded bg-green-50">
                  <h4 className="font-medium">{event.name}</h4>
                  <p className="text-sm">Type: {event.type} | Format: {event.format}</p>
                  <p className="text-sm">Status: {event.status}</p>
                  {event.max_players && (
                    <p className="text-sm">Max Players: {event.max_players}</p>
                  )}
                  {event.entry_fee && (
                    <p className="text-sm">Entry Fee: ${event.entry_fee}</p>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Players ({tournamentPlayers.filter(p => p.tournament_id === currentTournament?.id).length})
          </h3>
          <div className="space-y-2">
            {tournamentPlayers
              .filter(player => player.tournament_id === currentTournament?.id)
              .map((player) => (
                <div key={player.id} className="border p-3 rounded bg-purple-50">
                  <h4 className="font-medium">{player.name}</h4>
                  <p className="text-sm">Rating: {player.tournament_rating}</p>
                  {player.actual_rating !== player.tournament_rating && (
                    <p className="text-sm">Actual: {player.actual_rating}</p>
                  )}
                  {player.club && (
                    <p className="text-sm">Club: {player.club}</p>
                  )}
                  {player.usatt && (
                    <p className="text-sm">USATT: {player.usatt}</p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {currentTournament && (
        <div className="mt-6 border p-4 rounded bg-blue-50">
          <h3 className="text-xl font-semibold mb-2">Selected Tournament Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">{currentTournament.name}</h4>
              <p className="text-sm">Status: <span className="font-medium">{currentTournament.status}</span></p>
              {currentTournament.date && (
                <p className="text-sm">Tournament Date: {currentTournament.date}</p>
              )}
              {currentTournament.time && (
                <p className="text-sm">Start Time: {currentTournament.time}</p>
              )}
            </div>
            <div>
              {currentTournament.registration_deadline && (
                <p className="text-sm">Registration Deadline: {currentTournament.registration_deadline}</p>
              )}
              {currentTournament.rating_cutoff && (
                <p className="text-sm">Rating Cutoff: {currentTournament.rating_cutoff}</p>
              )}
              <p className="text-sm">Created: {new Date(currentTournament.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 