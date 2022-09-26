import React, { useState } from 'react';
import NavTabs from './pages/NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}