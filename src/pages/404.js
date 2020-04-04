import React from 'react'
import styles from './404.module.scss'
import Layout from '../components/layout'
import {Link} from 'gatsby'

export default () => (
    <Layout>
        <div className={styles.content}>
            <h1 className={styles.header}>Page Not Found</h1>
            <p className={styles.errorMessage}>
                The page you are looking for does not exist.
            </p>
            <p className={styles.errorMessage}>Go back to the <Link to="/">Home</Link> page</p>
        </div>
    </Layout>
)