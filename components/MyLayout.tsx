import React, { ReactNode } from 'react';

import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
};

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <div style={layoutStyle}>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
