import { Injectable } from '@nestjs/common';
import { groupPlayer } from 'src/db/schema';
import { db } from 'src';
import { CreateGroupPlayerDto } from './dto/create-group-player.dto';
import { UpdateGroupPlayerDto } from './dto/update-group-player.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class GroupPlayerRepository {
  async create(dto: CreateGroupPlayerDto) {
    const [created] = await db.insert(groupPlayer).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(groupPlayer);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(groupPlayer)
      .where(eq(groupPlayer.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateGroupPlayerDto) {
    const [updated] = await db
      .update(groupPlayer)
      .set(dto)
      .where(eq(groupPlayer.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(groupPlayer).where(eq(groupPlayer.id, id)).returning();
    return id;
  }
}
