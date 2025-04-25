import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RequireAuth } from './guards/RequireAuth';
import { Login, Home, Private, Progress, AddProgress, Support } from '@/pages';

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/add-progress" element={<AddProgress />} />
      <Route path="/support" element={<Support />} />

      <Route path="/login" element={<Login />} />
      <Route
        path="/protected"
        element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
