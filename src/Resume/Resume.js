import React from 'react';
import styles from './Resume.module.css';

export default class App extends React.Component {
  render() {
    return (
    <div class={styles.container}>
      <div>
        <img src="/ResumePage.svg" alt="Resume" class={styles.image} />
        <div class={styles.overlay}> Hire me pls :)</div>
      </div>
    </div>
    );
  }
}