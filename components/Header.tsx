import React from 'react';
import Link from 'next/link';
import { NextStatelessComponent } from 'next';

const linkStyle = {
    marginRight: 15,
};

const Header: NextStatelessComponent = () => {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </div>
    );
};

export default Header;
