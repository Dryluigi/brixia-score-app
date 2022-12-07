import { Box, Typography } from '@mui/material';

interface ScorePair {
    left: number;
    right: number;
}

interface ScoreResultProps {
    topScore: ScorePair;
    middleScore: ScorePair;
    lowerScore: ScorePair;
    severity: string;
    show?: boolean;
}

function ScoreResult(props: ScoreResultProps) {

    if (!props.show) {
        return null;
    }

    return (
        <Box>
            <table
                border={1}
                style={{ borderCollapse: 'collapse' }}
            >
                <tbody>
                    <tr>
                        <td style={{ padding: '2rem' }}>{props.topScore.left}</td>
                        <td style={{ padding: '2rem' }}>{props.topScore.right}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '2rem' }}>{props.middleScore.left}</td>
                        <td style={{ padding: '2rem' }}>{props.middleScore.right}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '2rem' }}>{props.lowerScore.left}</td>
                        <td style={{ padding: '2rem' }}>{props.lowerScore.right}</td>
                    </tr>
                </tbody>
            </table>
            <Typography mt={2}>
                Tingkat keparahan: <strong>{props.severity}</strong>
            </Typography>
        </Box>
    )
}

export default ScoreResult