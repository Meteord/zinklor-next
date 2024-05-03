import React from "react";
import { TextField } from "@mui/material";
import Info from "../types/Info";

export interface InfoComponentProps {
  info: Info;
  setInfo: (info: Info) => void;
  labelName?: string;
  labelBeschreibung?: string;
}

const InfoComponent: React.FC<InfoComponentProps> = ({
  info,
  setInfo,
  labelName = "Name",
  labelBeschreibung = "Beschreibung",
}) => {
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, name: event.target.value });
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInfo({ ...info, beschreibung: event.target.value });
  };

  return (
    <div>
      <TextField
        label={labelName}
        value={info.name}
        onChange={handleTitleChange}
        fullWidth
      />
      <TextField
        label={labelBeschreibung}
        value={info.beschreibung}
        onChange={handleDescriptionChange}
        fullWidth
      />
    </div>
  );
};

export default InfoComponent;
