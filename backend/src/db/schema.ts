import {
  pgTable,
  varchar,
  integer,
  numeric,
  boolean,
  timestamp,
  date,
  time,
  json,
  pgEnum,
  serial,
} from 'drizzle-orm/pg-core';

export const tournamentStatusEnum = pgEnum('tournament_status', [
  'upcoming',
  'open',
  'closed',
  'in_progress',
  'finished',
]);

export const eventStatusEnum = pgEnum('event_status', [
  'upcoming',
  'in_progress',
  'finished',
]);

export const eventStageEnum = pgEnum('event_stage', ['groups', 'draw']);

export const eventTypeEnum = pgEnum('event_type', [
  'singles',
  'teams',
  'doubles',
]);

export const eventFormatEnum = pgEnum('event_format', [
  'rr',
  'grr',
  'single_elimination',
  'handicap',
]);

export const groupStatusEnum = pgEnum('group_status', [
  'upcoming',
  'in_progress',
  'finished',
]);

export const matchStatusEnum = pgEnum('match_status', [
  'upcoming',
  'ready',
  'in_progress',
  'pending',
  'finished',
  'forfeited',
]);

export const tournament = pgTable('tournament', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  status: tournamentStatusEnum('status').notNull().default('upcoming'),
  registration_deadline: date('registration_deadline'),
  rating_cutoff: date('rating_cutoff'),
  date: date('date'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const tournamentEvent = pgTable('tournament_event', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  date: date('date'),
  time: time('time'),
  entry_fee: numeric('entry_fee'),
  tournament_id: integer('tournament_id')
    .notNull()
    .references(() => tournament.id),
  max_players: integer('max_players'),
  status: eventStatusEnum('status').notNull().default('upcoming'),
  stage: eventStageEnum('stage'),
  type: eventTypeEnum('type').notNull().default('singles'),
  format: eventFormatEnum('format').notNull().default('rr'),
  max_rating: integer('max_rating'),
  min_age: integer('min_age'),
  max_age: integer('max_age'),
  unrated_may_advance: boolean('unrated_may_advance').notNull().default(true),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const tournamentPlayer = pgTable('tournament_player', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  birthday: date('birthday'),
  usatt: integer('usatt'),
  tournament_rating: integer('tournament_rating').notNull(),
  actual_rating: integer('actual_rating').notNull(),
  club: varchar('club', { length: 255 }),
  location: varchar('location', { length: 255 }),
  tournament_id: integer('tournament_id')
    .notNull()
    .references(() => tournament.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const tournamentTable = pgTable('tournament_table', {
  id: serial('id').primaryKey(),
  number: integer('number').notNull(),
  tournament_id: integer('tournament_id')
    .notNull()
    .references(() => tournament.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const eventPlayer = pgTable('event_player', {
  id: serial('id').primaryKey(),
  tournament_event_id: integer('tournament_event_id')
    .notNull()
    .references(() => tournamentEvent.id),
  tournament_player_id: integer('tournament_player_id')
    .notNull()
    .references(() => tournamentPlayer.id),
  has_paid: boolean('has_paid').notNull().default(false),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const eventGroup = pgTable('event_group', {
  id: serial('id').primaryKey(),
  tournament_event_id: integer('tournament_event_id')
    .notNull()
    .references(() => tournamentEvent.id),
  number: integer('number').notNull(),
  date: date('date'),
  time: time('time'),
  status: groupStatusEnum('status').notNull().default('upcoming'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const groupPlayer = pgTable('group_player', {
  id: serial('id').primaryKey(),
  position: integer('position'),
  event_group_id: integer('event_group_id')
    .notNull()
    .references(() => eventGroup.id),
  event_player_id: integer('event_player_id')
    .notNull()
    .references(() => eventPlayer.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const groupMatch = pgTable('group_match', {
  id: serial('id').primaryKey(),
  event_group_id: integer('event_group_id')
    .notNull()
    .references(() => eventGroup.id),
  group_player1_id: integer('group_player1_id')
    .notNull()
    .references(() => groupPlayer.id),
  group_player2_id: integer('group_player2_id')
    .notNull()
    .references(() => groupPlayer.id),
  best_of: integer('best_of').notNull().default(5),
  game_scores: json('game_scores'),
  winner_id: integer('winner_id').references(() => groupPlayer.id),
  sequence: integer('sequence').notNull(),
  status: matchStatusEnum('status').notNull().default('upcoming'),
  player1_ready: boolean('player1_ready').notNull().default(false),
  player2_ready: boolean('player2_ready').notNull().default(false),
  forfeited_player_id: integer('forfeited_player_id').references(
    () => groupPlayer.id,
  ),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
  started_at: timestamp('started_at'),
  completed_at: timestamp('completed_at'),
});

export const groupMatchTable = pgTable('group_match_table', {
  id: serial('id').primaryKey(),
  tournament_table_id: integer('tournament_table_id')
    .notNull()
    .references(() => tournamentTable.id),
  group_match_id: integer('group_match_id')
    .notNull()
    .references(() => groupMatch.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const eventDraw = pgTable('event_draw', {
  id: serial('id').primaryKey(),
  tournament_event_id: integer('tournament_event_id')
    .notNull()
    .references(() => tournamentEvent.id),
  date: date('date'),
  time: time('time'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const drawPlayer = pgTable('draw_player', {
  id: serial('id').primaryKey(),
  event_draw_id: integer('event_draw_id')
    .notNull()
    .references(() => eventDraw.id),
  event_player_id: integer('event_player_id')
    .notNull()
    .references(() => eventPlayer.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const drawMatch = pgTable('draw_match', {
  id: serial('id').primaryKey(),
  event_draw_id: integer('event_draw_id')
    .notNull()
    .references(() => eventDraw.id),
  draw_player1_id: integer('draw_player1_id').references(() => drawPlayer.id),
  draw_player2_id: integer('draw_player2_id').references(() => drawPlayer.id),
  best_of: integer('best_of').notNull().default(5),
  has_bye: boolean('has_bye').notNull().default(false),
  game_scores: json('game_scores'),
  winner_id: integer('winner_id').references(() => drawPlayer.id),
  status: matchStatusEnum('status').notNull().default('upcoming'),
  player1_ready: boolean('player1_ready').notNull().default(false),
  player2_ready: boolean('player2_ready').notNull().default(false),
  forfeited_player_id: integer('forfeited_player_id').references(
    () => drawPlayer.id,
  ),
  date: date('date'),
  time: time('time'),
  round: integer('round').notNull(),
  sequence: integer('sequence').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
  started_at: timestamp('started_at'),
  completed_at: timestamp('completed_at'),
});

export const drawMatchTable = pgTable('draw_match_table', {
  id: serial('id').primaryKey(),
  tournament_table_id: integer('tournament_table_id')
    .notNull()
    .references(() => tournamentTable.id),
  draw_match_id: integer('draw_match_id')
    .notNull()
    .references(() => drawMatch.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});
