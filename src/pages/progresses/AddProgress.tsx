import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { nanoid } from 'nanoid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useNavigate } from 'react-router-dom';
import { LocalStorage } from '@/contexts/localStorage';

interface FormValues {
  addiction: string;
  startDate: Date;
  note: string;
}

export interface ProgressData extends FormValues {
  id: string;
}

export const AddProgress: React.FC = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      addiction: '',
      startDate: new Date(),
      note: ''
    }
  });

  const onSubmit = (data: FormValues) => {
    LocalStorage.getInstance().pushArrayItem('progresses', {
      ...data,
      id: nanoid(6)
    } as ProgressData);

    navigate('/progress');
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#2c2d55] to-[#1e1f3d] px-4 py-8 pt-20 text-white">
      <h1 className="mb-6 text-2xl font-bold">Add Progress</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-6">
        {/* Addiction Name */}
        <TextField
          {...register('addiction', { required: 'This field is required' })}
          fullWidth
          label="Addiction Name"
          variant="outlined"
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff' } }}
        />

        {/* Start Date */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Start Date"
                disableFuture
                {...field}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  />
                )}
              />
            )}
          />
        </LocalizationProvider>

        <TextField
          {...register('note')}
          label="Note / Motivation (optional)"
          multiline
          rows={3}
          fullWidth
          variant="outlined"
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff' } }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth className="bg-blue-600 hover:bg-blue-700">
          Save
        </Button>
      </form>
    </div>
  );
};
