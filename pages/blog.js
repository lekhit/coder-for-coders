import * as React from 'react';
import { Container, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const src1 =
  'https://images.unsplash.com/photo-1657296950265-e17c3db4e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const myLoader = ({ src, width, quality }) => {
  return 'https://images.unsplash.com/photo-1657296950265-e17c3db4e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
};

export default function BoxSx() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 10,
        borderRadius: 2,
        p: 2,
        m: '30px',
        minWidth: 300,
      }}
    >
      <Typography component="div">
        <Container>
          <Image
            loader={myLoader}
            src={src1}
            alt="Picture of the author"
            width="200"
            height="200"
          />
        </Container>

        <Box sx={{ textAlign: 'justify', m: 1 }}>
          Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
          sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
        </Box>
        <Box sx={{ textAlign: 'left', m: 1 }}>Left aligned text.</Box>
        <Box sx={{ textAlign: 'center', m: 1 }}>Center aligned text.</Box>
        <Box sx={{ textAlign: 'right', m: 1 }}>Right aligned text.</Box>
      </Typography>
    </Box>
  );
}
