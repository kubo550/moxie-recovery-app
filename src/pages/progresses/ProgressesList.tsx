import { Link } from 'react-router-dom';
import { differenceInDays, differenceInMonths, format } from 'date-fns';
import { Button, Typography } from '@mui/material';
import { LocalStorage } from '@/contexts/localStorage';
import { ProgressData } from '@/pages/progresses/AddProgress';
import { AddProgressButton, EmptyState } from '@/pages/progresses/components';

const imageBgUrl =
  'https://img.freepik.com/free-photo/aesthetic-colorful-background-handmade-experimental-art_53876-104559.jpg?t=st=1745871835~exp=1745875435~hmac=402af6cb5acf273709c551633363aaf8a3119ae72149476879d25c2682055050&w=996';
export const ProgressesList = () => {
  const currentProgresses = LocalStorage.getInstance().getArrayItem<ProgressData>('progresses');

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#2c2d55] to-[#1e1f3d] px-4 pt-20 text-gray-600">
      {currentProgresses.length > 0 ? (
        <div className="flex flex-col space-y-4 pb-6">
          {currentProgresses.map((progress) => {
            const days = differenceInDays(new Date(), new Date(progress.startDate)) + 1;
            const months = differenceInMonths(new Date(), new Date(progress.startDate));
            const extraDays = days - months * 30; // approx (you can refine if needed)

            return (
              <div key={progress.id} className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70"
                  style={{
                    backgroundImage: `url(${imageBgUrl})`
                  }}
                ></div>

                <div className="relative flex flex-col items-center p-6 text-center text-gray-500">
                  <Typography variant="h6" className="mb-2 font-semibold drop-shadow-md">
                    You&apos;ve Been Sober For:
                  </Typography>

                  <Typography variant="h3" className="font-extrabold drop-shadow-md">
                    {months > 0 ? `${months} Months` : ''} {extraDays} Days
                  </Typography>

                  {months > 0 && (
                    <Typography variant="h5" className="mt-2 font-bold drop-shadow-md">
                      or {days} days
                    </Typography>
                  )}

                  <Typography variant="body1" className="mt-4 italic opacity-90 drop-shadow-md">
                    &quot;One Day At A Time&quot;
                  </Typography>

                  <Typography variant="caption" className="mt-4 text-gray-900 ">
                    {format(new Date(progress.startDate), 'MMM dd, yyyy')}
                  </Typography>

                  <Link to={`/progress/${progress.id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{
                        backgroundColor: '#008083',
                        '&:hover': {
                          backgroundColor: '#008083'
                        },
                        marginTop: '5px'
                      }}
                    >
                      See your progress
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}{' '}
        </div>
      ) : (
        <EmptyState />
      )}
      <AddProgressButton />
    </div>
  );
};
