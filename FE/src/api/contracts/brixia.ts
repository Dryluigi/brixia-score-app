import { BrixiaScore } from "../../models/brixia";

export interface GetBrixiaScoreResponse {
    score: BrixiaScore;
    severity: string;
}