import { Box, Stack, Typography } from '@mui/material';

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
            <Stack direction="row">
                <table
                    border={1}
                    style={{ borderCollapse: 'collapse', alignSelf: 'flex-start', marginRight: '24px' }}
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
                <Box>
                    <Typography variant="body1" mb={1}>Penjelasan:</Typography>
                    <Typography variant="body2" mb={1}>Skor-skor di kiri merepresentasikan tingkat keparahan pada tiap area toraks. Rentang skor adalah <strong>0 - 3</strong> dengan ketentuan,</Typography>
                    <Typography variant="body2"><strong>0</strong> : tidak terdapat indikasi Pneumonia COVID-19.</Typography>
                    <Typography variant="body2"><strong>1</strong> : terdapat bekas luka/goresan pada jaringan kulit paru-paru.</Typography>
                    <Typography variant="body2"><strong>2</strong> : terdapat alveolus yang membengkak.</Typography>
                    <Typography variant="body2"><strong>3</strong> : terdapat bekas luka/goresan dan alveolus yang membengkak. Alveolus yang membekak lebih dominan..</Typography>

                </Box>
            </Stack>
            <Typography mt={2}>
                Tingkat keparahan: <strong>{props.severity}</strong>
            </Typography>
            <Typography mt={2}>
                <span style={{ color: "red" }}>*</span> Pemberian label tingkat keparahan didasarkan oleh metode <i>thresholding</i>. Metode ini menggunakan rentang skor brixia total (0 - 18) dan membaginya menjadi beberapa kategori.
            </Typography>
            <Typography><strong>0</strong> : Normal</Typography>
            <Typography><strong>1 - 6</strong> : Ringan</Typography>
            <Typography><strong>7 - 12</strong> : Sedang</Typography>
            <Typography mb={2}><strong>13 - 18</strong> : Berat</Typography>
        </Box>
    )
}

export default ScoreResult