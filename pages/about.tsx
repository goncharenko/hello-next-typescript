import React from 'react';
import { NextStatelessComponent } from 'next';

import Layout from '../components/MyLayout';

const About: NextStatelessComponent = () => {
    return (
        <Layout>
            <p>This is the about page</p>
        </Layout>
    );
};

export default About;
