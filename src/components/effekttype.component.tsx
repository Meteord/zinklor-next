import { Select, MenuItem, Chip, Avatar, ImageListItem } from "@mui/material";
import React, { useState } from "react";
import { EffektType } from "../types/effekt";
const schuss = require("../data/effekt/schuss.jpg");
const sonstiger = require("../data/effekt/sonstiger.png");

interface EffektTypeComponentProps {
  type: EffektType;
  setEffektType: (type: EffektType) => void;
}

const EffektTypeComponent: React.FC<EffektTypeComponentProps> = ({
  type,
  setEffektType,
}) => {
  const [et, setEt] = useState<EffektTypeObject>(getEffektTypeObject(type));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let result = event.target.value as EffektType;
    setEt(getEffektTypeObject(result));
    setEffektType(result);
  };

  return (
    <div>
      <Select value={type} onChange={handleChange}>
        {effektTypes.map((effektobjects) => (
          <MenuItem key={effektobjects.type} value={effektobjects.type}>
            <Chip
              avatar={<Avatar src={effektobjects.img} />}
              label={effektobjects.title}
            />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export interface EffektTypeObject {
  img: string;
  title: string;
  type: EffektType;
}

const effektTypes: EffektTypeObject[] = [
  {
    img: schuss,
    title: "Schuss",
    type: EffektType.Schuss,
  },
  {
    img: sonstiger,
    title: "Sonstiger",
    type: EffektType.Sonstiger,
  },
];

export const getEffektTypeObject = (effektType: EffektType): EffektTypeObject => {
  let result = effektTypes.find(
    (form) => form.type === effektType
  ) as EffektTypeObject;
  if (result === undefined) {
    return effektTypes[0];
  } else {
    return result;
  }
};

export default EffektTypeComponent;
