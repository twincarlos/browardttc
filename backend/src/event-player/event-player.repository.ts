import { Injectable } from '@nestjs/common';
import { CreateEventPlayerDto } from './dto/create-event-player.dto';
import { eventPlayer } from 'src/db/schema';
import { db } from 'src';
import { eq } from 'drizzle-orm';
import { UpdateEventPlayerDto } from './dto/update-event-player.dto';

@Injectable()
export class EventPlayerRepository {
  async create(dto: CreateEventPlayerDto) {
    const [created] = await db.insert(eventPlayer).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(eventPlayer);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(eventPlayer)
      .where(eq(eventPlayer.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateEventPlayerDto) {
    const [updated] = await db
      .update(eventPlayer)
      .set(dto)
      .where(eq(eventPlayer.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(eventPlayer).where(eq(eventPlayer.id, id)).returning();
    return id;
  }
}
