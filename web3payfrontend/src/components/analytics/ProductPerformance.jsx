import { Clock, Circle,CircleDashed ,  Bitcoin   } from "lucide-react";
import { motion } from "framer-motion";

import StatCard from "./StatsCard";
const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>


			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
			<h2 className='text-xl font-semibold text-black'>Total Transactions till Date</h2>
				<motion.div

					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-2 border-b- p-3 '
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					
					<StatCard name='Bitcoin'value='1133' color='#f5ea20' />
					<StatCard name='Ether'value='2353' color='#10B981' />
					<StatCard name='Solana'  value='2423' color='#ef4444' />
					{/* <StatCard name='Build time ' icon={Clock} value='9:21 min' color='#377ae6' /> */}
				</motion.div>
			
			</main>
		</div>
	);
};
export default OverviewPage;
