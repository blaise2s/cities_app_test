import * as React from 'react';
import { TextField } from '@material-ui/core';

export interface SearchProps {
  value: string;
  onSearch: (target: string) => void;
}

export const Search = (props: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearch(event.target.value);
  };

  return (
    <TextField
      fullWidth
      variant="filled"
      label="Search for a city"
      value={props.value}
      onChange={handleChange}
    >
    </TextField>
  );
};
