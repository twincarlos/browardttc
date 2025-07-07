import { MatchScore } from "../../../types/matchType";

export default function Score({ score }: { score: MatchScore[] | undefined }) {
    if (!score) return null;
    return (
        <div className="f g-1">
            {score.map((set: MatchScore, index: number) => (
                <div key={index} className="f f-c">
                    <span>{set[0] ?? ''}</span>
                    <span>{set[1] ?? ''}</span>
                </div>
            ))}
        </div>
    );
}