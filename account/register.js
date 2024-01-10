import { useState } from "react";
import swal from 'sweetalert';

const CreateAccount = () =>{
    let[fullname, pickName] = useState("");
    let[nameError, updateNameError] = useState("");

    let[emailid, pickEmail] = useState("");
    let[emailError, updateEmailError] = useState("");

    let[password, pickPassword] = useState("");
    let[passwordError, updatePasswordError] = useState("");

    let[actype, pickType] = useState("CUSTOMER");
    let[city, pickCity] = useState("");
    let[address, pickAddress] = useState("");




    const save = async() =>{
        let formstatus = true;
        if(fullname == "")
        {
            formstatus = false;
            updateNameError("Invalid Name !");
        }else{
            updateNameError("");
        }
// for Emial code start

if(emailid == "")
{
    formstatus = false;
    updateEmailError("Invalid Email Id !");
}else{
    updateEmailError("");
}


//for password code start

if(password == "")
{
    formstatus = false;
    updatePasswordError("Invalid Password !");
}else{
    updatePasswordError("");
}

         // write code before this line below this code  is last code 
        if (formstatus==true)
        {
          let userdata ={
            name:fullname,
            email:emailid,
            password:password,
            type:actype,
            city:city,
            address:address
        };// last work done here
         
        let url = "http://localhost:1234/account";
        let postdata = {
            headers:{'Content-type':'application/json'},
            method:'POST',
            body:JSON.stringify(userdata)
       }


        await fetch(url, postdata)
              .then(response=>response.json())
              .then(serverRes=>{
                swal("Success", "Account Created Successfully", "success");
                pickName(""); pickEmail(""); pickCity(""); pickPassword(""); pickAddress("");
              })


        }else{
            swal("Invaild Input", "Plese Enter All Requred input", "warning");
        }

}



    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                              <i className="fa fa-user-plus"></i> <b>CreateAccount</b>
                         </div>

                        <div className="card-body">
                              <smail className="text-danger">* Marked fields are mandatory</smail>
                              <div className="row ">
                                       <div className="mb-4 col-lg-6">
                                            <label> Full Name <i className="text-danger">*</i></label>
                                            <input type="text" className="form-control" 
                                            value={fullname} onChange={obj=>pickName(obj.target.value)}/>
                                            <i className="text-danger">{nameError}</i>
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                                <label> Account Type </label>
                                                    <select className="form-select" onChange={obj=>pickType(obj.target.value)}>
                                                        <option>Customer</option>
                                                        <option>Seller</option>
                                                    </select>
                                        </div>

                              </div>
                            
                              <div className="row">
                                <div className="mb-3 col-lg-6">
                                    <label> e-Mail Id <i className="text-danger">*</i></label>
                                    <input type="email" className="form-control"
                                    value={emailid} onChange={obj=>pickEmail(obj.target.value)}/>
                                    <i className="text-danger">{emailError}</i>
                                </div>
                                <div className="mb-3 col-lg-6">
                                    <label> Password <i className="text-danger">*</i></label>
                                    <input type="password" className="form-control"
                                    value={password} onChange={obj=>pickPassword(obj.target.value)}/>
                                    <i className="text-danger">{passwordError}</i>
                                </div>
                                   
                            </div>

                                <div className="mb-3">
                                    <label> City Name </label>
                                    <input type="text" className="form-control"
                                    value={city} onChange={obj=>pickCity(obj.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label> Full Address </label>
                                    <textarea className="form-control"
                                     value={address} onChange={obj=>pickAddress(obj.target.value)}></textarea>
                                    
                                </div>
                        </div>

                        <div className="card-footer text-center">
                              <button className="btn btn-danger" onClick={save}> Register </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}

export default CreateAccount;



