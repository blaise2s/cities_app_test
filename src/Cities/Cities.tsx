import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';

import * as styles from "./Cities.module.less";

export interface CityData {
  [key: string]: string[];
}

export const Cities = (props: { cityData: CityData }) => {

  const states = () => {
    return Object.keys(props.cityData);
  };

  return (
    <div>
      <List subheader={<li />}>
        {states().map((state) => (
          <li key={state}>
            <ul>
              <ListSubheader className={styles.listSubheader}>{state}</ListSubheader>
              {props.cityData[state].map((city) => (
                <ListItem key={city}>
                  <ListItemText primary={city} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </div>
  );
};
