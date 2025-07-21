'use client';

import { useState } from 'react';

interface CreateTournamentDto {
  name: string;
  status: 'upcoming' | 'open' | 'closed' | 'in_progress' | 'finished';
  registration_deadline?: string;
  rating_cutoff?: string;
  date?: string;
}

export default function CreateTournamentForm() {
  const [formData, setFormData] = useState<CreateTournamentDto>({
    name: '',
    status: 'upcoming',
    registration_deadline: '',
    rating_cutoff: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="date"
        name="registration_deadline"
        value={formData.registration_deadline}
        onChange={handleChange}
      />
      <input
        type="number"
        name="rating_cutoff"
        value={formData.rating_cutoff}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit">Create Tournament</button>
    </form>
  );
}
