import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SparklineChart = ({ data, type }) => {
    // Prepare series data for the sparkline chart
    const seriesData = useMemo(() => {
        return data.map(entry => ({
            value: entry[type]
        }));
    }, [data, type]);

    const chartStyles = {
        container: {
            height: '50px',
            width: '100%',
            padding: '5px',
            borderRadius: '8px',
            boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
        },
    };

    return (
        <div style={chartStyles.container}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seriesData}>
                    <XAxis dataKey="value" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SparklineChart;
