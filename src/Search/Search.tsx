import * as React from 'react';
import { TextField } from '@material-ui/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export interface SearchProps {
  onSearch: (target: string) => void;
  debounceTime: number;
}

export const Search = (props: SearchProps) => {
  const [value, setValue] = React.useState('')
  const [target$] = React.useState(new Subject<string>())
  React.useEffect(() => {
    target$.pipe(debounceTime(props.debounceTime)).subscribe((target) => props.onSearch(target))
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value
    setValue(target)
    target$.next(target)
  };

  return (
    <TextField
      fullWidth
      variant="filled"
      label="Search for a city"
      value={value}
      onChange={handleChange}
    >
    </TextField>
  );
};
