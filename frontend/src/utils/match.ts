import { GameScore, MatchBestOf, MatchScore } from "@/types/matchType";

const gamesNeededToWinMatch = {
    1: 1,
    3: 2,
    5: 3,
    7: 4,
    9: 5
} as const;

export function gameScoreIsValid(gameScore: GameScore): boolean {
    const [p1, p2]: [number, number] = gameScore;

    if (p1 === 11 && (p2 >= 0 && p2 <= 9)) return true;
    if (p2 === 11 && (p1 >= 0 && p1 <= 9)) return true;

    if (p1 > 11 && (p2 === p1 - 2)) return true;
    if (p2 > 11 && (p1 === p2 - 2)) return true;

    return false;
}

export function determineGameWinner(gameScore: GameScore): number {
    const [p1, p2]: [number, number] = gameScore;
    if (!gameScoreIsValid(gameScore)) return 0;
    if (p1 > p2) return 1;
    return 2;
}

export function determineMatchScore(gameScores: GameScore[] | undefined, bestOf: MatchBestOf): { matchScore: MatchScore, isValid: boolean } {
    const matchScore: MatchScore = [0, 0];
    const gamesNeeded: number = gamesNeededToWinMatch[bestOf];
    let isValid: boolean = true;
    let finished: boolean = false;

    if (!gameScores || gameScores.length === 0) return { matchScore, isValid: false };

    gameScores.forEach(gameScore => {
        if (gameScoreIsValid(gameScore)) {
            const gameWinner = determineGameWinner(gameScore);
            
            if (gameWinner === 1) matchScore[0]++;
            else if (gameWinner === 2) matchScore[1]++;
        } else {
            const [p1, p2]: [number, number] = gameScore;
            if (finished) {
                if (!(p1 === 0 && p2 === 0)) isValid = false;
            } else {
                isValid = false;
            }
        }
        if (matchScore[0] === gamesNeeded || matchScore[1] === gamesNeeded) finished = true;
    });

    return { matchScore, isValid };
}