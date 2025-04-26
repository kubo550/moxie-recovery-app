import { Button } from '@mui/material';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export const Home: FunctionComponent = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2c2d55] to-[#1e1f3d] px-4 text-white">
      <TypeAnimation
        sequence={[
          'Commit to the Lord whatever you do, and He will establish your plans.',
          1000,
          'The plans of the diligent lead surely to abundance.',
          1000,
          'Be strong and courageous. Do not be afraid; do not be discouraged!',
          1000,
          'I can do all things through Christ who strengthens me!',
          1000,
          'With God all things are possible.',
          1000,
          'Trust in the Lord with all your heart and lean not on your own understanding.',
          1000,
          'Let us not grow weary of doing good, for in due season we will reap if we do not give up!',
          1000
        ]}
        wrapper="h1"
        speed={50}
        style={{ fontSize: '2.5em', display: 'inline-block', minHeight: '40vh', maxWidth: '420px' }}
        repeat={Infinity}
      />

      <div className="flex flex-col space-y-6">
        <Link className="flex w-full" to="/progress">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4d6ecf',
              borderRadius: '0.5rem',
              paddingX: '2rem',
              '&:hover': {
                backgroundColor: '#3a5abc'
              }
            }}
          >
            Track Your Progress
          </Button>
        </Link>

        <Link className="flex w-full" to="/support">
          <Button
            variant="contained"
            className="flex w-full"
            sx={{
              backgroundColor: '#6b8ed6',
              borderRadius: '0.5rem',
              paddingX: '2rem',
              '&:hover': {
                backgroundColor: '#5477c5'
              }
            }}
          >
            Need Support?
          </Button>
        </Link>
      </div>

      <div className="mt-32 text-center">
        <p className="text-lg">&quot;With God all things are possible&quot;</p>
        <p className="mt-1 text-end text-sm italic">Matthew 19:26</p>
      </div>
    </div>
  );
};
