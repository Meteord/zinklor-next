import { Typography } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Typography variant="h5" component="h1" gutterBottom>
        404, Seite von Dr. Knuddel geklaut
      </Typography>
      <p>Kann in Kicherode gefunden werden.</p>
      <p>
        <i>{(error as any).statusText || (error as any).message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
