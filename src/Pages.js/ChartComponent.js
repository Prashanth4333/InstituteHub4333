import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement } from 'chart.js';
import './ChartComponent.css'; // Import CSS for styling

// Register the required components for the charts
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

const ChartComponent = () => {
  const chartRef = useRef(null); // Ref for the chart canvas

  // Data for the bar chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.5)', 
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true, // Make chart responsive
    maintainAspectRatio: false, // Allow the height to be controlled by CSS
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales',
        },
      },
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d'); // Get the context of the canvas
    let chartInstance = null;

    // Create a new chart instance
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Cleanup function to destroy the chart on unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy the previous chart instance
      }
    };
  }, [data, options]); // Recreate chart only if data or options change

  return (
    <div className="chart-container">
      <canvas ref={chartRef} /> {/* Use the ref for the canvas element */}
    </div>
  );
};

export default ChartComponent;
