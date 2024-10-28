import {
  // LineChart,
  // Line,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { useState } from "react";

import { AreaChart, Area } from "recharts";

const revenueData = [
	{ month: "Jan", Solana: 0.26 , Bitcoin: 0.26,Ether:0.23 },
	{ month: "Feb", Solana: 0.23, Bitcoin: 0.4 ,Ether:0.22},
	{ month: "Mar", Solana: 0.22, Bitcoin: 0.287,Ether:0.25},
	{ month: "Apr", Solana: 0.28 , Bitcoin: 0.278,Ether:0.22 },
	{ month: "May", Solana:0.24,Bitcoin: 0.21 ,Ether:0.24},
	{ month: "Jun", Solana: 0.23 , Bitcoin: 0.26,Ether:0.25 },
	{ month: "Jul", Solana: 0.24, Bitcoin: 0.23 ,Ether:0.21},
];
// const userRetentionData = [
//   { name: "Jan", retention: 3 },
//   { name: "Feb", retention: 6 },
//   { name: "Mar", retention: 3 },
//   { name: "Apr", retention: 7 },
//   { name: "Jun", retention: 25 },
//   { name: "Jul", retention: 34 },
//   { name: "Aug", retention: 46 },
//   { name: "Sept", retention: 52 },
//   { name: "Oct", retention: 59 },
//   { name: "Nov", retention: 62 },
//   { name: "Dec", retention: 64 },
// ];

const UserRetention = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  return (
		<motion.div
			className=' bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg } rounded-xl p-6 border mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-black'>No of requests</h2>
				<select
					className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
					value={selectedTimeRange}
					onChange={(e) => setSelectedTimeRange(e.target.value)}
				>
					<option>This Week</option>
					<option>This Month</option>
					<option>This Quarter</option>
					<option>This Year</option>
				</select>
			</div>

			<div style={{ width: "100%", height: 325 }}>

				<ResponsiveContainer>
					<AreaChart data={revenueData}>
				
						<XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Area type='monotone' dataKey='Bitcoin' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
						<Area type='monotone' dataKey='Solana' stroke='#10B981' fill='#10B981' fillOpacity={0.3} />
            <Area type='monotone' dataKey='Ether' stroke='#ff3300' fill='#ff3300' fillOpacity={0.3} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
  );
};
export default UserRetention;
