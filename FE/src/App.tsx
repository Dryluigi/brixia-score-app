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

function App() {
  const [xrayImage, setXrayImage] = useState<string>('');

  const fileInputChangeHandler = (fileSrc: string) => {
    setXrayImage(fileSrc)
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
              topScore={{ left: 4, right: 2 }}
              middleScore={{ left: 2, right: 2 }}
              lowerScore={{ left: 3, right: 2 }}
              severity={'Parah'}
              show
            />
            <ImageInput
              onFileChange={fileInputChangeHandler}
            />
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}

export default App
