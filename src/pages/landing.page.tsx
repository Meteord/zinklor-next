import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <Box
      my={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ width: "100%" }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Willkommen in Zinklor
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LandingPage;
