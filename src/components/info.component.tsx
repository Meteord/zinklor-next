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
    console.log("Info, titel geändert: " + event.target.value);
    setInfo(new Info(event.target.value, info.beschreibung));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("Info, beschreibung geändert: " + event.target.value);
    setInfo(new Info(info.name, event.target.value));
  };

  return (
    <div>
      <TextField
        label={labelName}
        value={info.name}
        onChange={handleTitleChange}
        size="small"
      />
      <TextField
        label={labelBeschreibung}
        value={info.beschreibung}
        onChange={handleDescriptionChange}
        size="small"
        multiline
        minRows={5}
      />
    </div>
  );
};

export default InfoComponent;
