import React from 'react';
import styles from './layout.module.css'


export const Layout = ( props ) => {


return (

<div className={styles.outerMost}>   
    {props.children}
</div>
);








}