import { Navigate, Outlet} from 'react-router-dom';
const ProtectedRoutes=({isLogged})=>{
    console.log("user Login",isLogged);
    return isLogged?<Outlet/>:<Navigate to="/"/>
}
export default ProtectedRoutes;