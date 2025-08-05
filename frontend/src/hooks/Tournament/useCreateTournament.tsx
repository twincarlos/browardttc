'use client';
import { useCreateTournamentMutation } from '@/store/apis/tournamentApi';

export default function useCreateTournament() {
  const [createTournament, { isLoading: isCreating, error, data }] = useCreateTournamentMutation();
  
  return { 
    createTournament, 
    isCreating, 
    error, 
    createdTournament: data 
  };
}