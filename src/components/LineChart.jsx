import React from 'react';
import {Col, Row, Typography} from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


const { Title } = Typography

const LineChart = ({ coinHistory, coinName, currentPrice}) => {

  const coinPrice = []
  const coinTimestamp = []

  for (let i = 0; i < coinHistory?.data?.history?.length ; i++) {
    if(i % 5 === 0){
      coinPrice.push(coinHistory.data.history[i].price)
      coinTimestamp.push(new Date((coinHistory.data.history[i].timestamp) *1000).toLocaleDateString())
    }
  }

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            autoSkip: true
          }
        }]
      }
    }
  };

  return (
    <>
      <Row className="chart-header">
        <Title
          level={2}
          className="chart-title"
        >
          {coinName}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
};

export default LineChart;