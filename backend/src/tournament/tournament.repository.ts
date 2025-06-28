import { Injectable } from '@nestjs/common';
import { eq, or } from 'drizzle-orm';
import { db } from '../index';
import { drawMatch, drawMatchTable, drawPlayer, eventDraw, eventGroup, eventPlayer, groupMatch, groupMatchTable, groupPlayer, tournament, tournamentEvent, tournamentPlayer, tournamentTable } from '../db/schema';
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

  async findOneFull(id: number) {
    const tournamentPromise = db.select().from(tournament).where(eq(tournament.id, id));
    const tournamentPlayersPromise = db.select().from(tournamentPlayer).where(eq(tournamentPlayer.tournament_id, id));
    const tournamentEventsPromise = db.select().from(tournamentEvent).where(eq(tournamentEvent.tournament_id, id));
    const tournamentTablesPromise = db.select().from(tournamentTable).where(eq(tournamentTable.tournament_id, id));

    const eventPlayersPromise = db.select().from(eventPlayer).innerJoin(tournamentEvent, eq(eventPlayer.tournament_event_id, tournamentEvent.id)).where(eq(tournamentEvent.tournament_id, id));
    const eventGroupsPromise = db.select().from(eventGroup).innerJoin(tournamentEvent, eq(eventGroup.tournament_event_id, tournamentEvent.id)).where(eq(tournamentEvent.tournament_id, id));
    const eventDrawPromise = db.select().from(eventDraw).innerJoin(tournamentEvent, eq(eventDraw.tournament_event_id, tournamentEvent.id)).where(eq(tournamentEvent.tournament_id, id));

    const groupPlayersPromise = db.select().from(groupPlayer).innerJoin(eventGroup, eq(groupPlayer.event_group_id, eventGroup.id)).innerJoin(tournamentEvent, eq(eventGroup.tournament_event_id, tournamentEvent.id)).where(eq(tournamentEvent.tournament_id, id));
    const drawPlayersPromise = db.select().from(drawPlayer).innerJoin(eventDraw, eq(drawPlayer.event_draw_id, eventDraw.id)).innerJoin(tournamentEvent, eq(eventDraw.tournament_event_id, tournamentEvent.id)).where(eq(tournamentEvent.tournament_id, id));

    const groupMatchesPromise = db.select().from(groupMatch).innerJoin(groupPlayer, or(eq(groupMatch.group_player1_id, groupPlayer.id), eq(groupMatch.group_player2_id, groupPlayer.id))).innerJoin(eventGroup, eq(groupPlayer.event_group_id, eventGroup.id)).innerJoin(tournamentEvent, eq(eventGroup.tournament_event_id, tournamentEvent.id)).where(eq(tournamentEvent.tournament_id, id));
    const drawMatchesPromise = db.select().from(drawMatch).innerJoin(drawPlayer, or(eq(drawMatch.draw_player1_id, drawPlayer.id), eq(drawMatch.draw_player2_id, drawPlayer.id))).innerJoin(eventDraw, eq(drawPlayer.event_draw_id, eventDraw.id)).innerJoin(tournamentEvent, eq(eventDraw.tournament_event_id, tournamentEvent.id)).where(eq(tournamentEvent.tournament_id, id));
    
    const groupMatchTablesPromise = db.select().from(groupMatchTable).innerJoin(tournamentTable, eq(groupMatchTable.tournament_table_id, tournamentTable.id)).where(eq(tournamentTable.tournament_id, id));
    const drawMatchTablesPromise = db.select().from(drawMatchTable).innerJoin(tournamentTable, eq(drawMatchTable.tournament_table_id, tournamentTable.id)).where(eq(tournamentTable.tournament_id, id));

    const [
      tournamentResult,
      tournamentPlayersResult,
      tournamentEventsResult,
      tournamentTablesResult,
      eventPlayersResult,
      eventGroupsResult,
      eventDrawResult,
      groupPlayersResult,
      drawPlayersResult,
      groupMatchesResult,
      drawMatchesResult,
      groupMatchTablesResult,
      drawMatchTablesResult
    ] = await Promise.all([
      tournamentPromise,
      tournamentPlayersPromise,
      tournamentEventsPromise,
      tournamentTablesPromise,
      eventPlayersPromise,
      eventGroupsPromise,
      eventDrawPromise,
      groupPlayersPromise,
      drawPlayersPromise,
      groupMatchesPromise,
      drawMatchesPromise,
      groupMatchTablesPromise,
      drawMatchTablesPromise
    ]);

    return {
      tournament: tournamentResult[0],
      tournamentPlayers: tournamentPlayersResult,
      tournamentEvents: tournamentEventsResult,
      tournamentTables: tournamentTablesResult,
      eventPlayers: eventPlayersResult.map(e => e.event_player),
      eventGroups: eventGroupsResult.map(e => e.event_group),
      eventDraw: eventDrawResult.map(e => e.event_draw),
      groupPlayers: groupPlayersResult.map(e => e.group_player),
      drawPlayers: drawPlayersResult.map(e => e.draw_player),
      groupMatches: groupMatchesResult.map(e => e.group_match),
      drawMatches: drawMatchesResult.map(e => e.draw_match),
      groupMatchTables: groupMatchTablesResult.map(e => e.group_match_table),
      drawMatchTables: drawMatchTablesResult.map(e => e.draw_match_table)
    }
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
    const [deleted] = await db
      .delete(tournament)
      .where(eq(tournament.id, id))
      .returning();
    return deleted;
  }
} 