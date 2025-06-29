import { Injectable } from '@nestjs/common';
import { drawPlayer } from 'src/db/schema';
import { db } from 'src';
import { CreateDrawPlayerDto } from './dto/create-draw-player.dto';
import { eq } from 'drizzle-orm';
import { UpdateDrawPlayerDto } from './dto/update-draw-player.dto';

@Injectable()
export class DrawPlayerRepository {
  async create(dto: CreateDrawPlayerDto) {
    const [created] = await db.insert(drawPlayer).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(drawPlayer);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(drawPlayer)
      .where(eq(drawPlayer.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateDrawPlayerDto) {
    const [updated] = await db
      .update(drawPlayer)
      .set(dto)
      .where(eq(drawPlayer.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(drawPlayer).where(eq(drawPlayer.id, id)).returning();
    return id;
  }
}
