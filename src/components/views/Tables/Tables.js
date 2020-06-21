import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link exact to={`${process.env.PUBLIC_URL}/booking/new`} >New Booking </Link>
    <Link exact to={`${process.env.PUBLIC_URL}/booking/123abc`} >Booking 123abc </Link>
    <Link exact to={`${process.env.PUBLIC_URL}/event/new`} >New Event </Link>
    <Link exact to={`${process.env.PUBLIC_URL}/event/123abc`} >Event 123abc </Link>
  </div>
);

export default Tables;