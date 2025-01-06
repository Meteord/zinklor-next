import React from "react";
import { Chip, Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import {
  UnitTags,
  parseUnitTags,
  unitTagsStrings,
} from "../types/tags";

const unitTags = unitTagsStrings;

export interface UnittagsComponentProps {
  tags: UnitTags[];
  setTags: (tags: UnitTags[]) => void;
}

const UnittagsComponent: React.FC<UnittagsComponentProps> = ({
  tags,
  setTags,
}: UnittagsComponentProps) => {
  const [selectedTags, setSelectedTags] = React.useState<UnitTags[]>(tags);

  const handleChange = (event: any, newValue: string[]) => {
    let filtered = newValue
      .filter((tag) => parseUnitTags(tag) !== null)
      .map((tag) => parseUnitTags(tag));
    console.log("Submitting Tags: " + JSON.stringify(filtered));
    setSelectedTags(filtered);
    setTags(filtered);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={unitTags}
        freeSolo
        onChange={handleChange}
        value={selectedTags}
        renderTags={(value: string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip variant="outlined" label={option} key={index} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Einheiten Tags"
            placeholder="Tags"
          />
        )}
      />
    </Box>
  );
};

export default UnittagsComponent;
