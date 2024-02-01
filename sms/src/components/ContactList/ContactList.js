import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";

const ContactList = () => {
  const [csvFile, setCsvFile] = useState();
  const [groupName, setGroupName] = useState("");
  const [showgroupName, setShowGroupName] = useState("");

  const [csvArray, setCsvArray] = useState([]);
  let Counter = 0;
  const [ContactCount, setContactCount] = useState(0);
  // console.log(" set counter",ContactCount);
  // console.log("counter ",Counter);
  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });
    setCsvArray(newArray);
  };

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();
    console.log("GroupName:", groupName);
    reader.onload = function (e) {
      const text = e.target.result;
      console.log(text);
      processCSV(text);
      setContactCount(Counter);
      setShowGroupName(groupName);
    };

    reader.readAsText(file);
  };
const NEW_GROUP_CREATE=(e)=>
{
  e.preventDefault()
}
  return (
    <>
      <SideNav />
      <div className="main-wrapper">
        <div className="site-wrapper contactrow" id="page">
          <section className="contact-group">
            <div className="contactlist-header">
              <div className="hamburger-menu">
                <i className="fas fa-bars hamburger-menu" />
              </div>
              <div className="contact-group-header">
                <h5> Contact Group </h5>
              </div>
              <div className="new-group">
                <button
                  className="btn button btn-primary"
                  data-toggle="modal"
                  data-target="#opengroup"
                >
                  <i className="far fa-plus" /> Create New Group
                </button>
                <div
                  className="modal fade"
                  id="opengroup"
                  data-backdrop="static"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title"> Create new Group </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form id="csv-form">
                          <div className="form-group">
                            <label> Group Name: </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter campaign name"
                            />
                          </div>
                          <div className="form-group">
                            <label> Other Contacts: </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter numbers you want to add manually"
                            />
                          </div>
                          <div className="form-group">
                            <label> Other Contacts: </label>
                            <input
                              type="file"
                              className="form-control file-upload"
                            />
                          </div>
                          <div className="form-group create-group">
                            <button className="btn button btn-primary" onClick={NEW_GROUP_CREATE}>
                              Create Group
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-form">
              <form>
                <div className="search-box">
                  <i className="fa-solid fa-magnifying-glass" />
                  <input type="search" placeholder="Search for campaigns" />
                </div>
              </form>
            </div>
            <div className="group-list">
              <ul>
                <li className="group-detail">
                  <div className="group-name">
                    <h6> {showgroupName} </h6>
                  </div>
                  <div className="group-info">
                    <ul className="group-user">
                      <li>
                        <ul className="user-img-wrapper">
                          <li>
                            <img src="assets/images/user.png" alt="sms-user" />{" "}
                          </li>
                          <li>
                            
                            <img
                              src="assets/images/user.png"
                              alt="sms-user"
                            />
                          </li>
                          <li>
                            
                            <img
                              src="assets/images/user.png"
                              alt="sms-user"
                            />
                          </li>
                          <li>
                           
                            <img src="assets/images/user.png" alt="sms-user" />
                          </li>
                        </ul>
                        <span className="tot-user">
                         
                          {ContactCount} people
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="show-group">
            <div className="show-group-header">
              <div className="group-title">
                <h4> Edit Group </h4>
              </div>
              <div className="sms-icons">
                <i className="fa-solid fa-star" />
                <i className="fas fa-trash-alt" />
              </div>
            </div>
            <div className="group-form">
              <form>
                <div className="form-group">
                  <label>Group Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Group Name"
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>CSV File:</label>
                  <input
                    type="file"
                    accept=".csv"
                    id="csvFile"
                    className="form-control file-upload"
                    onChange={(e) => {
                      setCsvFile(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="form-group btn-group">
                  <button
                    className="btn button btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      if (csvFile) submit();
                    }}
                  >
                    Save Changes
                  </button>
                </div>
                {csvArray.length > 0 ? (
                  <>
                    {/* <table>
                      <thead>
                        <th>Name</th>
                        <th>Contact no.</th>
                      </thead>
                      <tbody> */}
                    {csvArray.map((item, i) => {
                      Counter++;
                      //   return (
                      //     <tr key={i}>
                      //       <td>
                      //         {item.first_name} {item.last_name}
                      //       </td>
                      //       <td>{item.phone}</td>
                      //     </tr>
                      //   );
                    })}
                    {/* </tbody>
                    </table> */}
                  </>
                ) : null}
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactList;
