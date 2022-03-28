import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ['BRL','USD','SLL'];

export function ControllableStates(props) {
  return (
    <div>
      <Autocomplete
        id="controllable-states-demo"
        options={options}
        value={props.value}
        onChange={props.onChange}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Selecione a(s) Moeda" />
        )}
      />
    </div>
  );
}
