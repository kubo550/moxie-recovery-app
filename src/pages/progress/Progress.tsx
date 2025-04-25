import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export const Progress = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#2c2d55] px-4 text-white">
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold">Progress</h1>
        <p className="mt-4 text-lg">No progress yet. Click the button below to add your first progress.</p>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <Link
          to="/add-progress"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition duration-300 hover:bg-blue-700"
        >
          <AddIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
};
