import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const TimeSeriesChart = ({ data }) => {
    // Prepare data for the chart
    const chartData = useMemo(() => {
        return data.map(entry => ({
            date: `${entry.arrival_date_year}-${entry.arrival_date_month}-${entry.arrival_date_day_of_month}`,
            totalVisitors: entry.adults + entry.children + entry.babies
        }));
    }, [data]);

    const chartStyles = {
        container: {
            height: '300px',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
        },
        title: {
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#333',
        },
    };

    return (
        <div style={chartStyles.container}>
            <h2 style={chartStyles.title}>Visitors Over Time</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                    <XAxis 
                        dataKey="date" 
                        tickFormatter={(date) => new Date(date).toLocaleDateString()} 
                    />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line 
                        type="monotone" 
                        dataKey="totalVisitors" 
                        stroke="#8884d8"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TimeSeriesChart;
