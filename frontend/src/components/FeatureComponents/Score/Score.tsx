import { memo } from 'react';
import './Score.css';
import { GameScore } from "../../../types/matchType";

function Score({ score }: { score: GameScore[] | undefined }) {
    if (!score) return null;
    return (
        <div className="score-set f jc-se">
            {score.map((set: GameScore, index: number) => (
                <div key={index} className="score-set-item f f-c">
                    <span className="score p-1 ta-c">{set[0]}</span>
                    <span className="score p-1 ta-c">{set[1]}</span>
                </div>
            ))}
        </div>
    );
}

export default memo(Score);