import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LocalStorage } from '@/contexts/localStorage';
import { ProgressData } from '@/pages/progresses/AddProgress';
import { Box, Button, Modal, Typography } from '@mui/material';

export const DeleteProgressButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    if (id) {
      LocalStorage.getInstance().removeArrayItemById<ProgressData>('progresses', id);
      navigate('/progress');
    }
  };

  return (
    <>
      <div className="my-10 flex justify-center">
        <Button
          variant="contained"
          color="error"
          size="large"
          className="!hover:bg-red-700 !rounded-full !bg-red-600 !py-4 !px-8 text-xl !text-white"
          onClick={() => setOpen(true)}
        >
          Delete My Progress
        </Button>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="absolute left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-[#2c2d55] p-8 text-white shadow-lg">
          <Typography id="modal-title" variant="h5" className="mb-4 text-center font-bold">
            Are you sure you want to delete this progress?
          </Typography>
          <Typography id="modal-description" my="1rem" className="mb-8 text-center opacity-80">
            This action cannot be undone. All your progress data will be permanently deleted.
          </Typography>
          <div className="flex justify-between">
            <Button variant="contained" color="error" className="!hover:bg-red-700 !bg-red-600" onClick={handleDelete}>
              Yes, Delete
            </Button>
            <Button
              variant="outlined"
              className="!border-gray-300 !text-gray-300 hover:!border-white hover:!text-white"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
