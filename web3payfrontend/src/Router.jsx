import {createBrowserRouter} from "react-router-dom"
import ApiPage from "./page/apiPage"
import DashBoard from "./page/dashBoard"
import LoginPage from './page/AuthPage.jsx'
const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<DashBoard/>
        },
        {
            path:"/apicreate",
            element:<ApiPage/>
        },
        {
            path:"/login",
            element:<LoginPage/>
        }
    ]
)

export default router