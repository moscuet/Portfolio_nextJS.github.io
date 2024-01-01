import React from 'react';
import { Grid, Box } from '@mui/material';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone'; const ProjectStorySection = () => {
  return (
    <Box className="my-4 p-2">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={4} className="flex items-center justify-center lg:justify-start">
          <AutoStoriesTwoToneIcon className="mr-2 text-indigo-500" />

          <h2 className="text-gray-800 font-bold text-xl">Project Story</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <p className="text-justify text-base md:text-xl lg:text-lg text-gray-800">
            This is a group project for a business intelligence consulting company. Because of privacy reasons, we can&apos;t share the code publicly. The site demo was deployed on Netlify by removing the company&apos;s credentials, and here is the demo link.
          </p>

        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectStorySection;
