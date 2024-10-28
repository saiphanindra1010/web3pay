import { motion } from "framer-motion";

const StatCard = ({ name,  value, color }) => {
  return (
    <motion.div
      className='bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl'
    //   style={{
    //     borderColor: color,
    //   }}
      whileHover={{
        y: -5,
        // boxShadow: `0 0 15px ${color}, 0 0 25px ${color}`,
      }}
    >
      <div className='px-1 py-5 sm:p-4 flex flex-col justify-center items-center shadow-blue-600'>
        <span className='flex items-center text-lg font-medium text-black'>
          {/* <Icon size={20} className='mr-2 glowing-icon-hover' style={{ color }} /> */}
           {name} in USD
        </span>
        <p className='mt-1 text-3xl font-semibold text-black'>{value} $ </p>
      </div>
    </motion.div>
  );
};

export default StatCard;
