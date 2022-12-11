interface ScorePair {
    left: number;
    right: number;
}

export interface BrixiaScore {
    upper: ScorePair;
    middle: ScorePair;
    lower: ScorePair;
}