import { Injectable } from '@nestjs/common';
import { drawMatch } from 'src/db/schema';
import { db } from 'src';
import { CreateDrawMatchDto } from './dto/create-draw-match.dto';
import { eq } from 'drizzle-orm';
import { UpdateDrawMatchDto } from './dto/update-draw-match.dto';

@Injectable()
export class DrawMatchRepository {
  async create(dto: CreateDrawMatchDto) {
    const [created] = await db.insert(drawMatch).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(drawMatch);
  }

  async findOne(id: number) {
    const rows = await db.select().from(drawMatch).where(eq(drawMatch.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateDrawMatchDto) {
    const [updated] = await db
      .update(drawMatch)
      .set(dto)
      .where(eq(drawMatch.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(drawMatch).where(eq(drawMatch.id, id)).returning();
    return id;
  }
}
