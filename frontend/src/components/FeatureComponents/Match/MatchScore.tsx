import type { MatchScore } from '@/types/matchType';

export default function MatchScore({ matchScore }: { matchScore: MatchScore }) {
  return (
    <div className="match-scores f f-c jc-sb">
      <span className="match-score ta-c f jc-c ai-c fs-lg p-1 h-100 bb">
        {matchScore[0]}
      </span>
      <span className="match-score ta-c f jc-c ai-c fs-lg p-1 h-100">
        {matchScore[1]}
      </span>
    </div>
  );
}
