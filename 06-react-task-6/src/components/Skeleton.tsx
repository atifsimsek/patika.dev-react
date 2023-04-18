import * as React from 'react';
import { Skeleton as MuiSkeleton } from '@mui/material/';
import Box from '@mui/material/Box';
import { flexCenter } from '@/styles/commonStyle';

export default function Skeleton() {
  return (
    <Box
      sx={{
        maxWidth: 345,
        ...flexCenter,
        flexDirection: 'column',
        boxShadow: 3,
      }}
    >
      <MuiSkeleton
        sx={{ bgcolor: 'grey.400' }}
        variant="rectangular"
        width={345}
        height={200}
      />
    </Box>
  );
}
