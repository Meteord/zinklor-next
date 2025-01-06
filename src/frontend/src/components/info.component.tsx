import React from "react";
import { Box, TextField } from "@mui/material";
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
    <Box my={2}
    display="flex"
    flexDirection="column"
    alignItems="start"
    sx={{ width: "100%" }}
    gap={1}>
      <TextField
        label={labelName}
        value={info.name}
        onChange={handleTitleChange}
        size="small"
        fullWidth
      />
      <TextField
        label={labelBeschreibung}
        value={info.beschreibung}
        onChange={handleDescriptionChange}
        size="medium"
        multiline
        minRows={3}
        fullWidth
      />
    </Box>
  );
};

export default InfoComponent;
