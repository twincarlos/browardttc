'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useModal } from '@/context/ModalContext';
import { CreateTournamentDto, Tournament } from '@/types/tournamentType';
import useCreateTournament from '@/hooks/Tournament/useCreateTournament';

export default function CreateTournamentForm() {
  const router = useRouter();
  const { setModalContent } = useModal();
  const [formData, setFormData] = useState<CreateTournamentDto>({
    name: '',
    status: 'upcoming',
    registration_deadline: undefined,
    rating_cutoff: undefined,
    date: undefined,
  });

  const { createTournament, isCreating } = useCreateTournament();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value ? value : name === 'name' ? '' : undefined,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createTournament(formData as Tournament);
      router.push(`/${response.data?.id}`);
      toast.success('Tournament created successfully');
      setModalContent(null);
    } catch (error) {
      toast.error('Failed to create tournament');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="registration_deadline">
        Registration Deadline
        <input
          type="date"
          name="registration_deadline"
          value={formData.registration_deadline}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="rating_cutoff">
        Rating Cutoff
        <input
          type="date"
          name="rating_cutoff"
          value={formData.rating_cutoff}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="date">
        Date
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <button disabled={isCreating} type="submit">
        {isCreating ? 'Creating...' : 'Create Tournament'}
      </button>
    </form>
  );
}
