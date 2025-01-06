import React from "react";
import { Box, TextField } from "@mui/material";
import Transport from "../types/transport";

export interface TransportComponentProps {
  transport: Transport;
  setTransport: (transport: Transport) => void;
}

const TransportComponent: React.FC<TransportComponentProps> = ({
  transport,
  setTransport,
}) => {
  const handleRohstoffeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransport(
      new Transport(parseInt(event.target.value), transport.einheiten)
    );
  };

  const handleEinheitenChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransport(
      new Transport(transport.rohstoffe, parseInt(event.target.value))
    );
  };

  return (
    <Box my={2} display="flex" flexDirection="row" alignItems="start" gap={1}>
      <TextField
        label="Rohstoffe"
        value={transport.rohstoffe}
        onChange={handleRohstoffeChange}
        size="small"
      />
      <TextField
        label="Einheiten"
        value={transport.einheiten}
        onChange={handleEinheitenChange}
        size="small"
      />
    </Box>
  );
};

export default TransportComponent;
