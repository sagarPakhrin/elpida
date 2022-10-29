import styles from './dashboard-hooks.module.css';

/* eslint-disable-next-line */
export interface DashboardHooksProps {}

export function DashboardHooks(props: DashboardHooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DashboardHooks!</h1>
    </div>
  );
}

export default DashboardHooks;
