'use client';
import { DrawPlayer } from "@/types/drawPlayerType";
import EventPlayer from "../EventPlayer/EventPlayer";
import { GroupPlayer } from "@/types/groupPlayerType";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectEventPlayerById } from "@/store/slices/eventPlayerSlice";

export default function MatchPlayer({ matchPlayer }: { matchPlayer: GroupPlayer | DrawPlayer }) {
    const eventPlayer = useAppSelector((state) => selectEventPlayerById(state, matchPlayer.event_player_id));
    return (
        <div className="match-player">
            <EventPlayer eventPlayer={eventPlayer} />
        </div>
    )
}