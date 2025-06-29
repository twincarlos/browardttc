import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { db } from 'src';
import { tournament } from '../db/schema';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

@Injectable()
export class TournamentRepository {
  async create(dto: CreateTournamentDto) {
    const [created] = await db.insert(tournament).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(tournament);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(tournament)
      .where(eq(tournament.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateTournamentDto) {
    const [updated] = await db
      .update(tournament)
      .set(dto)
      .where(eq(tournament.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db
      .delete(tournament)
      .where(eq(tournament.id, id))
      .returning();
    return id;
  }
} 