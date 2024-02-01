import React, { useState } from "react";


import SideNav from "../SideNav/SideNav";

const Campaigns = () => {
  const [datafromsidebar, setdatafromsidebar] = useState(true)
  // useEffect(() => {
  //   console.log(datafromsidebar);
  // }, [datafromsidebar])
const NEW_CAMP_CREATE=(e)=>
{
  e.preventDefault()
  
}
  return (
    <>
      <SideNav getdata={() => { setdatafromsidebar(!datafromsidebar) }} />



      <div className="site-wrapper campaignrow" id="page">
        {/* <section className="campaigns-nav-filter"> */}
        <section className={datafromsidebar ? "campaigns-nav-filter" : "campaigns-nav-filter2"}>
          {/* <ul className={datafromsidebar ? null : "ulchange"}> */}
          <ul>
            <div>
              <li>
                <a  href="#" className="add-campaign" data-toggle="modal" data-target="#campaign">
                  <img src="assets/images/add-campaign.png" alt="Add Campaign" />
                </a>
                <div className="modal fade" id="campaign" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title"> Create New Campaign </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            <label>Campaign Name:</label>
                            <input type="text" className="form-control" placeholder="Enter Campaign Name" />
                          </div>
                          <div className="form-group">
                            <label>Campaign Description:</label>
                            <textarea className="form-control" rows={5} placeholder="Enter campaign description" defaultValue={""} />
                          </div>
                          <div className="input-group">
                            <label>Start Date &amp; Time:</label>
                            <div className="date-time">
                              <input type="date" className="form-control" />
                              <input type="time" className="form-control" />
                            </div>
                          </div>
                          <div className="input-group">
                            <label>End Date and Time:</label>
                            <div className="date-time">
                              <input type="date" className="form-control" />
                              <input type="time" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group create-campaign">
                            <button className="btn button btn-primary" onClick={NEW_CAMP_CREATE}> Create Campaign </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>

            <li className="show-subnav">
              <a href="#">
                <img src="assets/images/sub-campaigns.png" alt="Campaigns" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/favourite.png" alt="Favourite Campaign" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/draft.png" alt="Campaign draft" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/trash.png" alt="Move Campaign Trash" />
              </a>
            </li>
          </ul>
        </section>

        <section className="campaigns-listbar">
          <div className="hamburger-menu">
            <i className="fas fa-bars hamburger-menu"></i>
          </div>
          <div className="list-header">
            <h5> All Campaigns </h5>
          </div>
          <div className="search-form">
            <form>
              <div className="search-box">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search for campaigns" />
              </div>
            </form>
          </div>
          <div className="campaigns-list">
            <ul>
              <li>
                <div className="campaigns-group-info">
                  <h6> Brand Awareness Campaign </h6>
                  <span> Created On: 10 Jan 2022 </span>
                </div>
                <div className="campaigns-group-icon">
                  <a href="#">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                </div>
              </li>
              <li>
                <div className="campaigns-group-info">
                  <h6> Brand Awareness Campaign </h6>
                  <span> Created On: 10 Jan 2022 </span>
                </div>
                <div className="campaigns-group-icon">
                  <a href="#">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                </div>
              </li>
              <li>
                <div className="campaigns-group-info">
                  <h6> Brand Awareness Campaign </h6>
                  <span> Created On: 10 Jan 2022 </span>
                </div>
                <div className="campaigns-group-icon">
                  <a href="#">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                </div>
              </li>
              <li>
                <div className="campaigns-group-info">
                  <h6> Brand Awareness Campaign </h6>
                  <span> Created On: 10 Jan 2022 </span>
                </div>
                <div className="campaigns-group-icon">
                  <a href="#">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                </div>
              </li>
              <li>
                <div className="campaigns-group-info">
                  <h6> Brand Awareness Campaign </h6>
                  <span> Created On: 10 Jan 2022 </span>
                </div>
                <div className="campaigns-group-icon">
                  <a href="#">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                </div>
              </li>
              <li>
                <div className="campaigns-group-info">
                  <h6> Brand Awareness Campaign </h6>
                  <span> Created On: 10 Jan 2022 </span>
                </div>
                <div className="campaigns-group-icon">
                  <a href="#">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                </div>
              </li>
              <li>
                <div className="campaigns-group-info">
                  <h6> Brand Awareness Campaign </h6>
                  <span> Created On: 10 Jan 2022 </span>
                </div>
                <div className="campaigns-group-icon">
                  <a href="#">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="edit-campaign">
          <div className="edit-campaign-header">
            <div className="campaign-title">
              <h4> Edit Campaign </h4>
            </div>
            <div className="campaign-icons">
              <i className="fa-solid fa-star"></i>
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>
          <div className="edit-campaign-form">
            <form>
              <div className="form-group">
                <label>Campaign Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Campaign Name"
                />
              </div>
              <div className="form-group">
                <label>Campaign Description:</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="input-group">
                <label>Start Date & Time:</label>
                <div className="date-time">
                  <input type="date" className="form-control" />
                  <input type="time" className="form-control" />
                </div>
              </div>
              <div className="input-group">
                <label>End Date and Time:</label>
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
    </>
  );
};

export default Campaigns;
