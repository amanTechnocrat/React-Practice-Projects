import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";


const SmsHistory = () => {
    const [datafromsidebar, setdatafromsidebar] = useState(true);
    // useEffect(() => {
    //     console.log(datafromsidebar);
    // }, [datafromsidebar]);
const NEW_MSG_SCHEDULE=(e)=>
{
    e.preventDefault()
}
    return (
        <>
            <SideNav
                getdata2={() => {
                    setdatafromsidebar(!datafromsidebar);
                }}
            />
            <div>
                <div className="main-wrapper fixed-nav sms-subnav">
                    <div className="site-wrapper smsrow" id="page">
                        {/* <section className="sms-nav-filter"> */}
                        <section
                            className={
                                datafromsidebar
                                    ? "campaigns-nav-filter"
                                    : "campaigns-nav-filter2"
                            }
                        >
                            {/* <ul className={datafromsidebar ? null : "ulchange"}> */}
                            <ul >
                                <li>
                                    <div>
                                        <a href="#" className="add-smsmessage" data-toggle="modal" data-target="#smsmessage">
                                            <img src="assets/images/add-campaign.png" alt="Add Message" />
                                        </a>
                                        <div className="modal fade" id="smsmessage" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title"> Schedule New Message </h4>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <div className="form-group">
                                                                <label> Group: </label>
                                                                <input type="text" className="form-control" placeholder="Enter Group Name" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label> Message: </label>
                                                                <textarea className="form-control" rows={5} placeholder="Type your message here" defaultValue={""} />
                                                            </div>
                                                            <div className="input-group">
                                                                <label> Start Date &amp; Time: </label>
                                                                <div className="date-time">
                                                                    <input type="date" className="form-control" />
                                                                    <input type="time" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="input-group">
                                                                <label> Repeat Date and Time: </label>
                                                                <div className="date-time">
                                                                    <input type="date" className="form-control" />
                                                                    <input type="time" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group schedule-message">
                                                                <button className="btn button btn-primary" onClick={NEW_MSG_SCHEDULE}> Schedule Message </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="assets/images/send-message.png"
                                            alt="send Message"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="assets/images/favourite.png"
                                            alt="Favourite Campaign"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="assets/images/draft.png" alt="Campaign draft" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="assets/images/trash.png"
                                            alt="Move Campaign Trash"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <section className="sms-listbar">
                            <div className="hamburger-menu">
                                <i className="fas fa-bars hamburger-menu" />
                            </div>
                            <div className="list-header">
                                <h5> Campaigns </h5>
                            </div>
                            <div className="search-form">
                                <form>
                                    <div className="search-box">
                                        <i className="fa-solid fa-magnifying-glass" />
                                        <input type="search" placeholder="Search for campaigns" />
                                    </div>
                                </form>
                            </div>
                            <div className="sms-list">
                                <ul>
                                    <li>
                                        <div className="sms-group-info">
                                            <h6> Brand Awareness Campaign </h6>
                                            <span> Created On: 10 Jan 2022 </span>
                                        </div>
                                        <div className="sms-group-icon">
                                            <a href="#">
                                              
                                                <i className="fa-solid fa-ellipsis-vertical" />
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sms-group-info">
                                            <h6> Brand Awareness Campaign </h6>
                                            <span> Created On: 10 Jan 2022 </span>
                                        </div>
                                        <div className="sms-group-icon">
                                            <a href="#">
                                                
                                                <i className="fa-solid fa-ellipsis-vertical" />
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sms-group-info">
                                            <h6> Brand Awareness Campaign </h6>
                                            <span> Created On: 10 Jan 2022 </span>
                                        </div>
                                        <div className="sms-group-icon">
                                            <a href="#">
                                                
                                                <i className="fa-solid fa-ellipsis-vertical" />
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sms-group-info">
                                            <h6> Brand Awareness Campaign </h6>
                                            <span> Created On: 10 Jan 2022 </span>
                                        </div>
                                        <div className="sms-group-icon">
                                            <a href="#">
                                                
                                                <i className="fa-solid fa-ellipsis-vertical" />
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sms-group-info">
                                            <h6> Brand Awareness Campaign </h6>
                                            <span> Created On: 10 Jan 2022 </span>
                                        </div>
                                        <div className="sms-group-icon">
                                            <a href="#">
                                                
                                                <i className="fa-solid fa-ellipsis-vertical" />
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sms-group-info">
                                            <h6> Brand Awareness Campaign </h6>
                                            <span> Created On: 10 Jan 2022 </span>
                                        </div>
                                        <div className="sms-group-icon">
                                            <a href="#">
                                                
                                                <i className="fa-solid fa-ellipsis-vertical" />
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sms-group-info">
                                            <h6> Brand Awareness Campaign </h6>
                                            <span> Created On: 10 Jan 2022 </span>
                                        </div>
                                        <div className="sms-group-icon">
                                            <a href="#">
                                                
                                                <i className="fa-solid fa-ellipsis-vertical" />
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sms-group-info">
                                            <h6> Brand Awareness Campaign </h6>
                                            <span> Created On: 10 Jan 2022 </span>
                                        </div>
                                        <div className="sms-group-icon">
                                            <a href="#">
                                                
                                                <i className="fa-solid fa-ellipsis-vertical" />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="show-sms">
                            <div className="show-sms-header">
                                <div className="sms-title">
                                    <h4> Brand Awareness Campaign </h4>
                                </div>
                                <div className="sms-icons">
                                    <i className="fa-solid fa-star" />
                                    <i className="fas fa-trash-alt" />
                                </div>
                            </div>
                            <div className="sms-form">
                                <form>
                                    <div className="form-group">
                                        <label>Sent To:</label>
                                        <div className="show-sms-user">
                                            <ul>
                                                <li className="smsimg-wrapper">
                                                    
                                                    <img
                                                        src="assets/images/user.png"
                                                        alt="sms-user"
                                                    />
                                                </li>
                                                <li className="smsimg-wrapper">
                                                    
                                                    <img
                                                        src="assets/images/user.png"
                                                        alt="sms-user"
                                                    />
                                                </li>
                                                <li className="smsimg-wrapper">
                                                    
                                                    <img
                                                        src="assets/images/user.png"
                                                        alt="sms-user"
                                                    />
                                                </li>
                                                <li className="smsimg-wrapper">
                                                    
                                                    <img
                                                        src="assets/images/user.png"
                                                        alt="sms-user"
                                                    />
                                                </li>
                                            </ul>
                                            <span> 164 Contacts </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Message:</label>
                                        <textarea
                                            className="form-control"
                                            rows={5}
                                            placeholder="Enter Message"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Date &amp; Time:</label>
                                        <div className="date-time">
                                            <input type="date" className="form-control" />
                                            <input type="time" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <label>Repeat Message:</label>
                                        <span> On Every </span>
                                        <div className="date-time">
                                            <input type="date" className="form-control" />
                                            <input type="time" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group save">
                                        <button className="btn button btn-primary"> Save </button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmsHistory;
