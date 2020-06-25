import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const demoContent = [
  {id: '1', localOrder: 2323, onlineOrder: null},
  {id: '2', localOrder: null, onlineOrder: 456},
  {id: '3', localOrder: null, onlineOrder: 789},
  {id: '4', localOrder: 987, onlineOrder: null},
  {id: '5', localOrder: 587, onlineOrder: null},
  {id: '6', localOrder: null, onlineOrder: 123},
];

const Dashboard = () => (
  <div>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>nr zamówienia</TableCell>
            <TableCell>Zamówienia lokalne</TableCell>
            <TableCell>Zamówienia zdalne</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => ( 
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.localOrder}
              </TableCell>
              <TableCell>
                {row.onlineOrder}
              </TableCell>
            </TableRow>
          ))};
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rezerwacje</TableCell>
            <TableCell>Eventy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              abc
            </TableCell>
            <TableCell>
              wer
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </div>
  
);

export default Dashboard;