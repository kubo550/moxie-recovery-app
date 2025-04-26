import { motion } from 'framer-motion';
import { Card, CardContent, Typography } from '@mui/material';

export const Milestones = ({ days }: { days: number }) => {
  const milestones = [10, 30, 120];

  const milestoneColors = {
    achieved: 'from-green-400 via-emerald-500 to-green-600',
    pending: 'from-gray-500 via-gray-600 to-gray-700'
  };

  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      {milestones.map((milestone, idx) => {
        const achieved = days >= milestone;

        return (
          <motion.div
            key={milestone}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx }}
            whileHover={{ scale: 1.05 }}
            className={`rounded-xl bg-gradient-to-br ${
              achieved ? milestoneColors.achieved : milestoneColors.pending
            } shadow-lg transition-transform`}
          >
            <Card
              className="bg-transparent shadow-none"
              style={{
                background: 'transparent',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center text-white">
                <Typography variant="h4" className="font-extrabold">
                  {milestone} days
                </Typography>
                <Typography variant="body2" className={`text-md mt-2 ${achieved ? 'text-green-100' : 'text-gray-300'}`}>
                  {achieved ? 'Achieved! 🎉' : `${milestone - days} days to go`}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};
