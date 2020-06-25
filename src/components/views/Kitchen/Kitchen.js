import React from 'react';
import styles from './Kitchen.module.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: '1.', tables: '5', orderContent: 'xyz' },
  {id: '2.', tables: '4', orderContent: 'zxc' },
  {id: '3.', tables: '3', orderContent: 'asd' },
  {id: '4.', tables: '8', orderContent: 'fgf' },
  {id: '5.', tables: '2', orderContent: 'rtt' },
  {id: '6.', tables: '1', orderContent: 'err' },
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <List>
      {demoContent.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value.id}`;
        return (
          <ListItem key={value} button>
            <ListItemText id={labelId} primary={value.id} />
            <ListItemText id={labelId} primary={value.tables} />
            <ListItemText id={labelId} primary={value.orderContent} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  </Paper>
);

export default Kitchen;