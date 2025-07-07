import './Score.css';
import { MatchScore } from "../../../types/matchType";

export default function Score({ score }: { score: MatchScore[] | undefined }) {
    if (!score) return null;
    return (
        <div className="score-set f jc-se">
            {score.map((set: MatchScore, index: number) => (
                <div key={index} className="score-set-item f f-c">
                    <span className="score p-1">{set[0] ?? ''}</span>
                    <span className="score p-1">{set[1] ?? ''}</span>
                </div>
            ))}
        </div>
    );
}