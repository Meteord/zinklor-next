import { Chip, Avatar } from "@mui/material";
import React, { useState } from "react";
import { EffektType } from "../types/effekt";
import { EffektTypeObject, getEffektTypeObject } from "./effekttype.component";

interface EffektTypeReadonlyComponentProps {
    type: EffektType;
}
const EffektTypeReadonlyComponent: React.FC<
    EffektTypeReadonlyComponentProps
> = ({ type }) => {
    const [et, setEt] = useState<EffektTypeObject>(getEffektTypeObject(type));
    return <Chip size="small" avatar={<Avatar src={et.img} />} label={et.title} />;
};

export default EffektTypeReadonlyComponent;