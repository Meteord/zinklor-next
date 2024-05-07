import React, { useState } from "react";
import { Select, MenuItem, ImageListItem } from "@mui/material";
import Spell from "../types/spell";
const eis = require("../data/spell/eis.jpg");
const erde = require("../data/spell/erde.jpg");
const feuer = require("../data/spell/feuer.jpg");
const luft = require("../data/spell/luft.jpg");

interface SpellComponentProps {
  spell: Spell;
  setSpell: (spell: Spell) => void;
}

const SpellComponent: React.FC<SpellComponentProps> = ({
  spell,
  setSpell,
}) => {
  const [st, setSt] = useState<SpellObject>(
    getSpellObject(spell)
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let result = event.target.value as Spell;
    setSt(getSpellObject(result));
    setSpell(result);
  };

  return (
    <div>
      <Select value={spell} onChange={handleChange} fullWidth>
        {Object.values(Spell).map((form) => (
          <MenuItem key={form} value={form}>
            {form}
          </MenuItem>
        ))}
      </Select>

      <ImageListItem>
        <img
          srcSet={`${st.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${st.img}?w=164&h=164&fit=crop&auto=format`}
          alt={st.title}
          loading="lazy"
        />
      </ImageListItem>
    </div>
  );
};

interface SpellObject {
  img: string;
  title: string;
  spell: Spell;
}

const spells: SpellObject[] = [
  {
    img: feuer,
    title: "Feuer",
    spell: Spell.Feuer
  },
  {
    img: luft,
    title: "Luft",
    spell: Spell.Luft
  },
  {
    img: eis,
    title: "Eis",
    spell: Spell.Eis
  },
  {
    img: erde,
    title: "Erde",
    spell: Spell.Erde
  },
];

const getSpellObject = (spell: Spell): SpellObject => {
  let result = spells.find(
    (form) => form.spell === spell
  ) as SpellObject;
  if (result === undefined) {
    return spells[0];
  } else {
    return result;
  }
};

export default SpellComponent;
