import { useState } from "react";
import swal from "sweetalert";


const Mylogin = () =>{

    let[emailid, pickEmail] = useState("");
    let[emailError, updateEmailError] = useState("");

    let[password, pickPassword] = useState("");
    let[passwordError, updatePasswordError] = useState(""); 

    let[message, updateMessage] = useState("");


    const login = () =>{
        // alert(emailid + password)
        let formstatus = true;
        updateMessage("");
        
        if(emailid=="")
        {
            formstatus = false;
            updateEmailError("Invalid or Empty Email Id !")
        }else{
            updateEmailError("")
        }


        if(password=="")
        {
            formstatus = false;
            updatePasswordError("Invalid or Empty Email Id !")
        }else{
            updatePasswordError("")
        }

        if(formstatus == true)
        {
           updateMessage("please wait Processing...");

           let url = "http://localhost:1234/account?email="+emailid+"&password="+password;
           fetch(url)
           .then(response=>response.json())
           .then(userinfo=>{

               if(userinfo.length>0){
                          updateMessage("Success : please wait Redirecting...");
                          localStorage.setItem("type", userinfo[0].type);
                          localStorage.setItem("id", userinfo[0].id);
                          localStorage.setItem("name", userinfo[0].name);
                          window.location.reload(); // refresh the page a
               }else{
                          updateMessage("Fail : Invalid Email or Password...");

               }
           })
        }
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <p className="text-danger text-center"> {message} </p>
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white">
                              <i className="fa fa-lock"></i> <b>Login</b>
                         </div>

                        <div className="card-body">
                                <div className="mb-3">
                                    <label> e-Mail Id </label>
                                    <input type="email" className="form-control"
                                    onChange={obj=>pickEmail(obj.target.value)}/>
                                    <i className="text-danger">{emailError}</i>

                                </div>
                                <div className="mb-3">
                                    <label> Password </label>
                                    <input type="password" className="form-control"
                                    onChange={obj=>pickPassword(obj.target.value)}/>
                                    <i className="text-danger">{passwordError}</i>
                                </div>
                        </div>

                        <div className="card-footer text-center">
                              <button className="btn btn-danger" onClick={login}> Login </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}

export default Mylogin;



