
import React from 'react';
import '../styles/globals.css';
import Layout from '../components/layout';

interface MyAppProps {
    Component: React.ComponentType<any>;
    pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;