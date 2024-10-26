import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const userRetentionData = [
  { name: "Jan", retention: 3 },
  { name: "Feb", retention: 6 },
  { name: "Mar", retention: 3 },
  { name: "Apr", retention: 7 },
  { name: "Jun", retention: 25 },
  { name: "Jul", retention: 34 },
  { name: "Aug", retention: 46 },
  { name: "Sept", retention: 52 },
  { name: "Oct", retention: 59 },
  { name: "Nov", retention: 62 },
  { name: "Dec", retention: 64 },
];

const UserRetention = () => {
  return (
    <motion.div
      className=" bg-green-950 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-green-700 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Total Requests
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={userRetentionData} className="text-gray-100">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgb(5 46 22)",
                borderColor: "rgb(20 83 45)",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="retention"
              stroke="green"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default UserRetention;
