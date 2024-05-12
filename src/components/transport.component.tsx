import React from "react";
import { TextField } from "@mui/material";
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
    <div>
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
    </div>
  );
};

export default TransportComponent;
