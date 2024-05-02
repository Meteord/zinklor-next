import React from "react";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import Info from "../types/Info";

export interface InfoComponentProps {
    info: Info;
    setInfo: (info: Info) => void;
  }
  
const InfoComponent: React.FC<InfoComponentProps> = ({ info, setInfo }) => {
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({ ...info, name: event.target.value });
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({ ...info, beschreibung: event.target.value });
    };

    return (
        <Card>
            <CardContent>
                <TextField label="Name" value={info.name} onChange={handleTitleChange} />
                <TextField label="Beschreibung" value={info.beschreibung} onChange={handleDescriptionChange} />
            </CardContent>
        </Card>
    );
};

export default InfoComponent;
