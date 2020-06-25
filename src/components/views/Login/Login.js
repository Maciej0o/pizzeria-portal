import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



const Login = () => (
  <Paper className={styles.component}>
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Login" />
      <TextField id="standard-basic" label="Hasło" />
    </form>
    <Button className={styles.btn} variant="contained">Zaloguj</Button>
  </Paper>
);

export default Login;