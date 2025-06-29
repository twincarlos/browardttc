import { Injectable } from '@nestjs/common';
import { eventGroup } from 'src/db/schema';
import { db } from 'src';
import { CreateEventGroupDto } from './dto/create-event-group.dto';
import { eq } from 'drizzle-orm';
import { UpdateEventGroupDto } from './dto/update-event-group.dto';

@Injectable()
export class EventGroupRepository {
  async create(dto: CreateEventGroupDto) {
    const [created] = await db.insert(eventGroup).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(eventGroup);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(eventGroup)
      .where(eq(eventGroup.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateEventGroupDto) {
    const [updated] = await db
      .update(eventGroup)
      .set(dto)
      .where(eq(eventGroup.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(eventGroup).where(eq(eventGroup.id, id)).returning();
    return id;
  }
}
