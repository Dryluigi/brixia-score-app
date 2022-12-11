import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import XRayImage from './components/XRayImage/XRayImage';
import ScoreResult from './components/ScoreResult/ScoreResult';
import ImageInput from './components/ImageInput/ImageInput';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import getBrixiaScore from './api/call/getBrixiaScore';
import { BrixiaScore } from './models/brixia';

interface ScorePair {
  left: string;
  right: string;
}

function App() {
  const [xrayImage, setXrayImage] = useState<string>('');
  const [showScore, setShowScore] = useState<boolean>(false);
  const [brixiaScore, setBrixiaScore] = useState<BrixiaScore>({
    upper: { left: 0, right: 0 },
    middle: { left: 0, right: 0 },
    lower: { left: 0, right: 0 },
  });
  const [severity, setSeverity] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fileInputChangeHandler = (fileSrc: string) => {
    setXrayImage(fileSrc)
  }

  const imageSubmitHandler = (xRay: File) => {
    setLoading(true);
    getBrixiaScore(xRay)
      .then(res => {
        console.log(res.data.data.score)
        setBrixiaScore(res.data.data.score);
        setSeverity(res.data.data.severity);
        setShowScore(true);
      })
      .catch(e => {
        setShowScore(false);
      })
      .finally(() => {
        setLoading(false)
      });
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Brixia Scoring
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ minWidth: '200px', width: '60%', height: 'auto', margin: '4rem auto 0' }}>
        <Stack direction="row">
          <XRayImage imgUrl={xrayImage} />
          <Stack sx={{ flex: 1, height: 'auto' }} direction="column" justifyContent="space-between">
            <Typography variant="h5">Brixia Scoring</Typography>
            <ScoreResult
              topScore={brixiaScore.upper}
              middleScore={brixiaScore.middle}
              lowerScore={brixiaScore.lower}
              severity={severity}
              show={showScore}
            />
            <ImageInput
              onFileChange={fileInputChangeHandler}
              onSubmit={imageSubmitHandler}
              loading={loading}
            />
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}

export default App
