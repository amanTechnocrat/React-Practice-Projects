import React, { useEffect, useRef } from "react";


import { NavLink, useLocation } from "react-router-dom";

// import Dashboard from "../Dasboard/Dasboard";
// import { $ }  from 'react-jquery-plugin';

const SideNav = ({getdata,getdata2}) => {
  const li1 = useRef();

   const chnagees_css=()=>{
    getdata()
   }
   const chnagees_css2=()=>{
    getdata2()
   }
 
  const loc = useLocation();
  useEffect(() => {
    // console.log(loc);
    li1.current.style.backgroundColor = "#E7EEFB";
    li1.current.style.borderLeft = "4px solid #5138EE";
    li1.current.style.borderRight = "0";
  
  //  li1.current.style.transition="width .35s ease-in-out"
   
  }, []);

  // background-color: #E7EEFB;
  // border-left: 4px solid #5138EE;
  // border-right: 0;

  return (
    <>
      <div className="side-nav">
        <div className="logo">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 177.88 133.91"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".cls-1{fill:#8d7df4;opacity:0.9;}.cls-1,.cls-5,.cls-6{isolation:isolate;}.cls-2{fill:#ffd963;}.cls-3,.cls-4{fill:none;stroke:#364f6b;stroke-linecap:round;}.cls-3{stroke-miterlimit:10;stroke-width:2.5px;}.cls-4{stroke-linejoin:round;stroke-width:3px;}.cls-6{font-size:24px;font-family:Poppins-Medium, Poppins;font-weight:500;}",
                }}
              />
            </defs>
            <g id="Group_76" data-name="Group 76">
              <g id="Group_75" data-name="Group 75">
                <g id="Group_74" data-name="Group 74">
                  <g id="Group_68" data-name="Group 68">
                    <g id="Group_66" data-name="Group 66">
                      <path
                        id="Path_294"
                        data-name="Path 294"
                        className="cls-1"
                        d="M149.29,99.79V126a11.05,11.05,0,0,1-11,11H94.67a11,11,0,0,1-11-11V102.35a5.08,5.08,0,0,0-.76-2.68L75.33,87.35a2.36,2.36,0,0,1,2-3.59h57.89A22.92,22.92,0,0,0,149.29,99.79Z"
                        transform="translate(-36.82 -58.19)"
                      />
                      <path
                        id="Rectangle_19"
                        data-name="Rectangle 19"
                        className="cls-2"
                        d="M94.91,96.15h38.82a2.62,2.62,0,0,1,2.62,2.62h0a2.61,2.61,0,0,1-2.62,2.61H94.91a2.61,2.61,0,0,1-2.62-2.61h0A2.62,2.62,0,0,1,94.91,96.15Z"
                        transform="translate(-36.82 -58.19)"
                      />
                      <path
                        id="Rectangle_20"
                        data-name="Rectangle 20"
                        className="cls-2"
                        d="M94.91,107.44h38.82a2.62,2.62,0,0,1,2.62,2.62h0a2.61,2.61,0,0,1-2.62,2.61H94.91a2.61,2.61,0,0,1-2.62-2.61h0A2.62,2.62,0,0,1,94.91,107.44Z"
                        transform="translate(-36.82 -58.19)"
                      />
                      <path
                        id="Rectangle_21"
                        data-name="Rectangle 21"
                        className="cls-2"
                        d="M94.91,119.28h28.63a2.62,2.62,0,0,1,2.62,2.62h0a2.61,2.61,0,0,1-2.62,2.61H94.91a2.61,2.61,0,0,1-2.62-2.61h0A2.62,2.62,0,0,1,94.91,119.28Z"
                        transform="translate(-36.82 -58.19)"
                      />
                    </g>
                    <g id="Group_67" data-name="Group 67">
                      <path
                        id="Path_295"
                        data-name="Path 295"
                        className="cls-2"
                        d="M176.55,78.4a19,19,0,0,1-38,1.95,17,17,0,1,0,24.59-20.14A19,19,0,0,1,176.55,78.4Z"
                        transform="translate(-36.82 -58.19)"
                      />
                      <path
                        id="Path_296"
                        data-name="Path 296"
                        className="cls-3"
                        d="M171.29,91.53a19,19,0,1,1,3.29-4.7"
                        transform="translate(-36.82 -58.19)"
                      />
                      <path
                        id="Path_297"
                        data-name="Path 297"
                        className="cls-4"
                        d="M157.56,64.9V78.82l6,5.6"
                        transform="translate(-36.82 -58.19)"
                      />
                    </g>
                  </g>
                </g>
                <g
                  id="SMS_Scheduler"
                  data-name="SMS Scheduler"
                  className="cls-5"
                >
                  <text className="cls-6" transform="translate(0 119.94)">
                    SMS Scheduler
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="side-navigation">
          <nav className="main-navigation">
            <ul className="menu">
              {/* className={loc?.pathname.includes("/dasboard") ? "menu2" : null} */}
              <li  ref={loc?.pathname.includes("/dasboard") ? li1 : null}>
                <img src="assets/images/dashboard.png" alt="dashboard" />
                <NavLink to="/dasboard">
                  <h5> Dashboard </h5>
                </NavLink>
              </li>
              {/* <button onClick={chnagees_css}></button> */}
              <li onClick={chnagees_css} ref={loc?.pathname.includes("/campaigns") ? li1 : null}>
                <img src="assets/images/campaign.png" alt="campaign" />
                <NavLink to="/campaigns">
                  <h5> Campaigns </h5>
                </NavLink>
              </li>
              <li onClick={chnagees_css2} ref={loc?.pathname.includes("/smshistory") ? li1 : null}>
                <img src="assets/images/history.png" alt="" />
                <NavLink to="/smshistory">
                  <h5> SMS History </h5>
                </NavLink>
              </li>
              <li ref={loc?.pathname.includes("/contact") ? li1 : null}>
                <img src="assets/images/friend-list.png" alt="" />
                <NavLink to="/contact">
                  <h5>Contact List</h5>
                </NavLink>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNav;
