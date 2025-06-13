import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { Link } from 'react-router-dom';

const HistoryPage = () => {
  const [selectedDate, setSelectedDate] = useState(26);
  const [chartInstance, setChartInstance] = useState(null);
  const days = [20, 21, 22, 23, 24, 25, 26];
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  useEffect(() => {
    const chartDom = document.getElementById('bpm-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      setChartInstance(myChart);

      const option = {
        animation: false,
        grid: {
          left: '5%',
          right: '5%',
          top: '10%',
          bottom: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May', '26 May'],
          axisLine: {
            lineStyle: {
              color: '#ddd',
            },
          },
          axisLabel: {
            color: '#666',
            fontSize: 10,
          },
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 200,
          interval: 50,
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: '#666',
            fontSize: 10,
          },
          splitLine: {
            lineStyle: {
              color: '#eee',
            },
          },
        },
        series: [
          {
            name: 'BPM',
            type: 'line',
            data: [85, 102, 78, 115, 92, 88, 110],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#D10000',
            },
            lineStyle: {
              color: '#D10000',
              width: 2,
            },
          },
          {
            name: 'Cholesterol',
            type: 'line',
            data: [10, 10, 10, 10, 10, 10, 10],
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              color: '#D10000',
              borderColor: '#fff',
              borderWidth: 1,
            },
            lineStyle: {
              color: '#eee',
              width: 1,
            },
          },
        ],
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
  return `${params[0].name}: ${params[0].value} BPM`;
},
        },
      };

      myChart.setOption(option);

      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white shadow-lg">
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-white border-r border-gray-200 hidden md:block">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">HealthTrack</h2>
            </div>
            <nav className="mt-6">
              <div className="px-4 py-3">
                <ul>
                  <li className="mb-4">
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <i className="fas fa-home text-xl w-8"></i>
                      <span>Home</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <i className="fas fa-map-marker-alt text-xl w-8"></i>
                      <span>LifeMap</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="flex items-center px-4 py-3 bg-red-50 text-red-600 rounded-lg cursor-pointer">
                      <i className="fas fa-robot text-xl w-8"></i>
                      <span>Assistant</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <i className="fas fa-comment-medical text-xl w-8"></i>
                      <span>Consult</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <i className="fas fa-heartbeat text-xl w-8"></i>
                      <span>LifeCare</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center">
                  <button className="mr-4 text-gray-400 cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <h1 className="text-xl font-semibold text-red-800">BPM History</h1>
                </div>
                <button className="text-gray-400 cursor-pointer">
                  <i className="far fa-calendar-alt"></i>
                </button>
              </div>
            </header>

            {/* Calendar Strip */}
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between">
                {days.map((day, index) => (
                  <div
                    key={day}
                    className={`flex flex-col items-center cursor-pointer ${selectedDate === day ? 'text-white' : 'text-gray-600'}`}
                    onClick={() => setSelectedDate(day)}
                  >
                    <span className="text-xs mb-1">{daysOfWeek[index]}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedDate === day ? 'bg-red-700' : ''}`}>
                      <span>{day}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter */}
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <div className="flex items-center text-gray-500">
                <i className="fas fa-filter mr-2"></i>
                <span>Filter By</span>
              </div>
            </div>

            {/* BPM Readings */}
            <div className="px-6 py-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-4xl font-bold">120</span>
                      <span className="text-sm text-red-600 ml-1 font-semibold">BPM</span>
                    </div>
                    <div className="bg-white border border-red-500 text-red-600 px-3 py-1 rounded-full text-xs">
                      High Cholesterol
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">6:30 • 26/05/2025</div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-4xl font-bold">94</span>
                      <span className="text-sm text-red-600 ml-1 font-semibold">BPM</span>
                    </div>
                    <div className="bg-white border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs">
                      Normal
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">6:44 • 26/05/2025</div>
                </div>
              </div>
            </div>

            {/* Weekly Recap */}
            <div className="px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Recap</h2>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div id="bpm-chart" className="w-full h-64"></div>
              </div>
            </div>

            {/* Weekly Average */}
            <div className="px-6 py-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-4xl font-bold">91</span>
                    <span className="text-sm text-red-600 ml-1 font-semibold">BPM</span>
                    <i className="fas fa-heart text-red-500 ml-2"></i>
                  </div>
                  <div className="bg-white border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Normal
                  </div>
                </div>
                <div className="text-sm text-gray-500 mt-2">BPM average this week</div>
              </div>
            </div>

            {/* Medical Recommendations */}
            <div className="px-6 py-4 mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Medical Recommendations</h2>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <i className="fas fa-heartbeat text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Maintain Regular Exercise</h3>
                    <p className="text-sm text-gray-600 mt-1">Your BPM readings show slight elevation. Consider 30 minutes of moderate exercise daily to improve cardiovascular health.</p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <i className="fas fa-utensils text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Dietary Adjustments</h3>
                    <p className="text-sm text-gray-600 mt-1">High cholesterol detected. Reduce saturated fats and increase intake of omega-3 fatty acids and fiber.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <i className="fas fa-clock text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Sleep Monitoring</h3>
                    <p className="text-sm text-gray-600 mt-1">BPM fluctuations may indicate sleep quality issues. Aim for 7-8 hours of uninterrupted sleep.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
