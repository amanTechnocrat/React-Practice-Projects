import './App.css';
import ResponsiveAppBar from './components/Navbar'
import { useState } from 'react';
import Signup from './components/Signup'
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './Services/Protectedroutes';


function App() {
  const [user, setuser] = useState(false);

  return (
    <>
      {/* <Routes>
      {!user && (
        <>
        {console.log(user)}
        <Route
          path="/"
          element={<Login authenticate={() => setuser(true)} />}
        />
        </>
      )}
      <Route exact path='/signup' element={<Signup />} />
      <Route path="*" element={<Navigate to={user ? "/home" : "/"} />} />
      {user && (<>
        {console.log("home",user)}
        <Route exact path='/home' element={<ResponsiveAppBar logout={()=>setuser(false)} />} />
        </>)}

      </Routes> */}
      <Routes>
        <Route exact path="/" element={<Login authenticate={() => setuser(true)} />}/>
        <Route exact path='/signup' element={<Signup />} />

        <Route element={<ProtectedRoutes user={user} />}>
          <Route exact path='/home' element={<ResponsiveAppBar logout={() => setuser(false)} />} />
        </Route>
        {/* <Route><ProtectedRoutes component={ResponsiveAppBar} path={"/home"} user={user}/></Route> */}
      
      </Routes>
    </>
  );
}

export default App;
