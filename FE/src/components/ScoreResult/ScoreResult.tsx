import { Box, Stack, Typography } from '@mui/material';

function getPalleteByScore(score: number) {
    switch (score) {
        case 1:
            return { backgroundColor: 'rgba(52, 158, 235, .5)', color: 'black', };
        case 2:
            return { backgroundColor: 'rgba(255, 255, 0, .4)', color: 'black', };
        case 3:
            return { backgroundColor: 'rgba(255, 0, 0, .4)', color: 'black', };
        default:
            return { backgroundColor: 'rgba(0, 255, 0, .4)', color: 'black', };
    }
}

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
                            <td style={{ padding: '2rem', ...getPalleteByScore(props.topScore.left) }}>{props.topScore.left}</td>
                            <td style={{ padding: '2rem', ...getPalleteByScore(props.topScore.right) }}>{props.topScore.right}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '2rem', ...getPalleteByScore(props.middleScore.left) }}>{props.middleScore.left}</td>
                            <td style={{ padding: '2rem', ...getPalleteByScore(props.middleScore.right) }}>{props.middleScore.right}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '2rem', ...getPalleteByScore(props.lowerScore.left) }}>{props.lowerScore.left}</td>
                            <td style={{ padding: '2rem', ...getPalleteByScore(props.lowerScore.right) }}>{props.lowerScore.right}</td>
                        </tr>
                    </tbody>
                </table>
                <Box>
                    <Typography variant="body1" mb={1}>Penjelasan:</Typography>
                    <Typography variant="body2" mb={1}>Skor-skor di kiri merepresentasikan tingkat keparahan pada tiap area toraks. Rentang skor adalah <strong>0 - 3</strong> dengan ketentuan,</Typography>
                    <Typography variant="body2">
                        <Box
                            component={'span'}
                            sx={{
                                display: 'inline-block',
                                height: '9px',
                                width: '9px',
                                backgroundColor: 'rgba(0, 255, 0, .4)',
                                border: '1px solid black'
                            }}
                        >
                        </Box> &nbsp;
                        <strong>0</strong> : tidak terdapat indikasi Pneumonia COVID-19.
                    </Typography>
                    <Typography variant="body2">
                        <Box
                            component={'span'}
                            sx={{
                                display: 'inline-block',
                                height: '9px',
                                width: '9px',
                                backgroundColor: 'rgba(52, 158, 235, .5)',
                                border: '1px solid black'
                            }}
                        >
                        </Box> &nbsp;
                        <strong>1</strong> : terdapat bekas luka/goresan pada jaringan kulit paru-paru.
                    </Typography>
                    <Typography variant="body2">
                        <Box
                            component={'span'}
                            sx={{
                                display: 'inline-block',
                                height: '9px',
                                width: '9px',
                                backgroundColor: 'rgba(255, 255, 0, .4)',
                                border: '1px solid black'
                            }}
                        >
                        </Box> &nbsp;
                        <strong>2</strong> : terdapat alveolus yang membengkak.
                    </Typography>
                    <Typography variant="body2">
                        <Box
                            component={'span'}
                            sx={{
                                display: 'inline-block',
                                height: '9px',
                                width: '9px',
                                backgroundColor: 'rgba(255, 0, 0, .4)',
                                border: '1px solid black'
                            }}
                        >
                        </Box> &nbsp;
                        <strong>3</strong> : terdapat bekas luka/goresan dan alveolus yang membengkak. Alveolus yang membekak lebih dominan.
                    </Typography>

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