import { useState } from "react";

const EditMyProfile = () =>{

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                              <i className="fa fa-edit"></i> <b> Edit Profile </b>
                         </div>

                        <div className="card-body">
                                <div className="mb-3">
                                    <label> Full Name </label>
                                    <input type="text" className="form-control" value="Akram Shekh" />
                                </div>
                                <div className="mb-3">
                                    <label> e-Mail Id </label>
                                    <input type="email" className="form-control" value="1akramshekh@gmail.com"/>
                                </div>
                                <div className="mb-3">
                                    <label> Password </label>
                                    <input type="password" className="form-control" value="123456"/>
                                </div>
                                <div className="mb-3">
                                    <label> City Name </label>
                                    <input type="text" className="form-control" value="Bangalore"/>
                                </div>
                                <div className="mb-3">
                                    <label> Full Address </label>
                                    <textarea className="form-control" value="Rt Nagar"></textarea>  
                                </div>
                        </div>

                        <div className="card-footer text-center">
                              <button className="btn btn-danger"> Update Profile </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}

export default EditMyProfile;



