import React from "react";
import { Chip, Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import {
  BuildingTags,
  buildingTagsStrings,
  parseBuildingTag,
} from "../types/tags";

const gebäudeTags = buildingTagsStrings;

export interface BuildingtagsComponentProps {
  tags: BuildingTags[];
  setTags: (tags: BuildingTags[]) => void;
}

const BuildingtagsComponent: React.FC<BuildingtagsComponentProps> = ({
  tags,
  setTags,
}: BuildingtagsComponentProps) => {
  const [selectedTags, setSelectedTags] = React.useState<BuildingTags[]>(tags);

  const handleChange = (event: any, newValue: string[]) => {
    let filtered = newValue
      .filter((tag) => parseBuildingTag(tag) !== null)
      .map((tag) => parseBuildingTag(tag));
    console.log("Submitting Tags: " + JSON.stringify(filtered));
    setSelectedTags(filtered);
    setTags(filtered);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={gebäudeTags}
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
            label="Gebäude Tags"
            placeholder="Tags"
          />
        )}
      />
    </Box>
  );
};

export default BuildingtagsComponent;
