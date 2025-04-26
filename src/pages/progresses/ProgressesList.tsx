import { Link } from 'react-router-dom';
import { differenceInDays, format } from 'date-fns';
import { Card, CardContent, Chip, Typography } from '@mui/material';
import { LocalStorage } from '@/contexts/localStorage';
import { ProgressData } from '@/pages/progresses/AddProgress';
import { AddProgressButton, EmptyState } from '@/pages/progresses/components';
export const ProgressesList = () => {
  const currentProgresses = LocalStorage.getInstance().getArrayItem<ProgressData>('progresses');

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#2c2d55] to-[#1e1f3d] px-4 pt-20 text-white">
      {currentProgresses.length > 0 ? (
        <div className="flex flex-col space-y-4 pb-6">
          {currentProgresses.map((progress) => (
            <Link key={progress.id} to={`/progress/${progress.id}`}>
              <div className="rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 shadow-lg transition-transform duration-300">
                <Card
                  style={{
                    background: 'transparent',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <CardContent className="flex flex-col items-center text-center text-white">
                    <Chip
                      label={progress.addiction}
                      color="error"
                      variant="filled"
                      className="mb-4 text-xl font-bold"
                    />
                    <Typography variant="h3" component="div" className="font-extrabold">
                      {differenceInDays(new Date(), new Date(progress.startDate))} days
                    </Typography>
                    <Typography variant="body2" className="opacity-80" marginY={'1em'}>
                      {format(new Date(progress.startDate), 'MMM dd yyyy')}
                    </Typography>
                    <Typography variant="body1" className=" text-sm leading-relaxed">
                      {progress.note || 'Trust in the Lord with all your heart and lean not on your own understanding.'}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
      <AddProgressButton />
    </div>
  );
};
