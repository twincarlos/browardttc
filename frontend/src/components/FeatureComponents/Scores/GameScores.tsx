import type { GameScore } from '../../../types/matchType';

export default function GameScores({ gameScores }: { gameScores: GameScore[] | undefined }) {
  if (!gameScores) return null;

  return (
    <div className="game-scores f jc-se bb">
      {gameScores.map((gameScore: GameScore, index: number) => (
        <div key={index} className="game-score-container f fd-c w-100 br">
          <span className="game-score p-1 ta-c h-100 bt">{gameScore[0]}</span>
          <span className="game-score p-1 ta-c h-100 bt">{gameScore[1]}</span>
        </div>
      ))}
    </div>
  );
}