import { Injectable } from '@nestjs/common';
import { groupMatch } from 'src/db/schema';
import { db } from 'src';
import { CreateGroupMatchDto } from './dto/create-group-match.dto';
import { UpdateGroupMatchDto } from './dto/update-group-match.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class GroupMatchRepository {
  async create(dto: CreateGroupMatchDto) {
    const [created] = await db.insert(groupMatch).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(groupMatch);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(groupMatch)
      .where(eq(groupMatch.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateGroupMatchDto) {
    const [updated] = await db
      .update(groupMatch)
      .set(dto)
      .where(eq(groupMatch.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(groupMatch).where(eq(groupMatch.id, id)).returning();
    return id;
  }
}
