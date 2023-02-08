import type { APIUser, GatewayActivity, GatewayActivityTimestamps, PresenceUpdateStatus } from 'discord-api-types/v10';

export interface LanyardUser {
  spotify: Spotify;
  listening_to_spotify: boolean;
  kv: object;
  discord_user: APIUser;
  discord_status: PresenceUpdateStatus;
  activities: GatewayActivity[];
  active_on_discord_web: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
}

export interface Spotify {
  track_id: string;
  timestamps: GatewayActivityTimestamps;
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
}

export enum LanyardOpcode {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

export type LanyardIncomingPayload = LanyardEventInitStatePayload | LanyardEventPresenceUpdatePayload | LanyardHelloPayload;

interface LanyardEventInitStatePayload {
  op: LanyardOpcode.Event;
  seq: number;
  t: 'INIT_STATE';
  d: LanyardUser;
}

interface LanyardEventPresenceUpdatePayload {
  op: LanyardOpcode.Event;
  seq: number;
  t: 'INIT_STATE';
  d: LanyardUser;
}

interface LanyardHelloPayload {
  op: LanyardOpcode.Hello;
  d: { heartbeat_interval: number };
}
