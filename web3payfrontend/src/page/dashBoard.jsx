import Navbar from '../components/Navbar'
import ProductPerformance from '../components/analytics/ProductPerformance';
import TransactionsTable from '../components/analytics/TransactionsTable';

import UserRetention from "../components/analytics/UserRetention";


const dashBoard = () => {
    return (
        <>
          <Navbar />
          <div className='w-5/6 mx-auto mt-4 p-4'>
    
            <UserRetention />
            <ProductPerformance/>
         <TransactionsTable/>
          </div>
        </>
      )
}

export default dashBoard