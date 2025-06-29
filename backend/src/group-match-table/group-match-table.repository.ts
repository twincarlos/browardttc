import { Injectable } from '@nestjs/common';
import { groupMatchTable } from 'src/db/schema';
import { db } from 'src';
import { CreateGroupMatchTableDto } from './dto/create-group-match-table.dto';
import { eq } from 'drizzle-orm';
import { UpdateGroupMatchTableDto } from './dto/update-group-match-table.dto';

@Injectable()
export class GroupMatchTableRepository {
  async create(dto: CreateGroupMatchTableDto) {
    const [created] = await db.insert(groupMatchTable).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(groupMatchTable);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(groupMatchTable)
      .where(eq(groupMatchTable.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateGroupMatchTableDto) {
    const [updated] = await db
      .update(groupMatchTable)
      .set(dto)
      .where(eq(groupMatchTable.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db
      .delete(groupMatchTable)
      .where(eq(groupMatchTable.id, id))
      .returning();
    return id;
  }
}
