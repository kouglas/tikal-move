import Head from 'next/head';


import styles from './Layout.module.css';

const Layout = ({ children, className, ...rest }) => {
  return (
    <div className={styles.layout}>

    
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;