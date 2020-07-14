import React from 'react'
import DashboardSummary from './DashboardInner/DashboardSummary';
import DashboardSavings from './DashboardInner/DashboardSavings';
import DashboardAnalysis from './DashboardInner/DashboardAnalysis';
import SummaryFeeds from '../components/DashboardInner/SummaryFeeds';


 const DasboardHome=()=> {
    return (
        <div className="px-12 flex flex-col fadeIn">
        <h1 className="text-4xl mb-6 font-medium">
            Overview
        </h1>

        <div className="flex-wrap flex justify-between max-cards">
            <div className="flex home-card summary-analysis">
                <DashboardSummary />
                <DashboardSavings />
                <DashboardAnalysis />
            </div>
            <div className="flex home-card card summary-feeds">
                <SummaryFeeds />
            </div>
        </div>
    </div>
    )
}

export default DasboardHome;