import { useParams } from 'react-router';
import { LocalStorage } from '@/contexts/localStorage';
import { useNavigate } from 'react-router-dom';
import { ProgressData } from '@/pages/progresses/AddProgress';
import { useEffect } from 'react';
import { differenceInDays } from 'date-fns';
import { LinearProgress, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { Milestones } from '@/pages/ProgressDetails/Milestones';
import { DeleteProgressButton } from '@/pages/ProgressDetails/DeleteProgressButton';

export const ProgressDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentProgress = LocalStorage.getInstance().getArrayItemById<ProgressData>('progresses', id as string);

  useEffect(() => {
    if (!currentProgress) navigate('/progress');
  }, [currentProgress, navigate]);

  if (!currentProgress) return null;

  const milestones = [10, 30, 120];

  const days = differenceInDays(new Date(), new Date(currentProgress.startDate));
  const nextMilestone = milestones.find((milestone) => milestone > days) ?? null;
  const daysToNextMilestone = nextMilestone ? nextMilestone - days : null;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#2c2d55] to-[#1e1f3d] px-4 pt-20 text-white">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">{currentProgress.addiction}</h1>
        <p className="text-xl opacity-80">{days} days sober</p>
      </div>

      <Milestones days={days} />

      {daysToNextMilestone !== null && (
        <div className="mb-10 text-center">
          <Typography variant="h6">
            Only <span className="font-bold text-green-400">{daysToNextMilestone}</span> days to get to the next
            milestone!
          </Typography>
          <div className="mx-auto mt-4 w-2/3">
            <LinearProgress
              variant="determinate"
              value={(days / nextMilestone!) * 100}
              className="h-3 rounded-full bg-gray-700"
            />
          </div>
        </div>
      )}

      <div className="my-1 text-center text-lg">
        <TypeAnimation
          sequence={[
            'Believe you can and you are halfway there.',
            3000,
            'Small steps every day lead to big changes.',
            3000,
            'Your journey is your strength.',
            3000
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>

      <DeleteProgressButton />
    </div>
  );
};
