import { Injectable } from '@nestjs/common';
import { drawMatchTable } from 'src/db/schema';
import { db } from 'src';
import { CreateDrawMatchTableDto } from './dto/create-draw-match-table.dto';
import { UpdateDrawMatchTableDto } from './dto/update-draw-match-table.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class DrawMatchTableRepository {
  async create(dto: CreateDrawMatchTableDto) {
    const [created] = await db.insert(drawMatchTable).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(drawMatchTable);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(drawMatchTable)
      .where(eq(drawMatchTable.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateDrawMatchTableDto) {
    const [updated] = await db
      .update(drawMatchTable)
      .set(dto)
      .where(eq(drawMatchTable.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db
      .delete(drawMatchTable)
      .where(eq(drawMatchTable.id, id))
      .returning();
    return id;
  }
}
