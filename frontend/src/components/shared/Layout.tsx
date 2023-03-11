import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div>
            Header
            <div className="container">
                {children}
            </div>
        </div>
    );
};

export default Layout;
