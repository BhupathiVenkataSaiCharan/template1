import React, {useState, useEffect} from 'react'
import "./design.css";
import { useNavigate } from 'react-router-dom';

const Design1 = () => {

    const initialvalues = {email:"", password:""}
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [rememberMe, setRememberMe] = useState({});


    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
      };


    const handleChange = (e) =>{
        const{ name, value} = e.target;
        setFormValues({...formValues, [name]:value});
        // console.log(formValues);
    }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     setFormErrors(validate(formValues));
    //     setIsSubmit(true);
    // }

    let navigate = useNavigate();

    const handleSubmit = (e) =>{
         e.preventDefault();
        
         const passerrors = validate(formValues);
      
        if (Object.keys(passerrors).length) {
          setFormErrors(passerrors);
        } else {
          localStorage.setItem("formValues",JSON.stringify(formValues));
          navigate("/profilepage");
        }
    }

    useEffect(()=>{
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
        // setFormErrors(formErrors);
        //   } else {
        //     setIsSubmit(true);
        //   }
    },[formErrors])

    // useEffect(()=>{
    //     localStorage.getItem("values",JSON.stringify(formValues));
    // },[formValues])

    const errors = {}

    const validate = (values) =>{
            
        const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;
        const regexe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email){
            errors.email = "!";
        }else if(!regexe.test(values.email)){
            errors.email = "!";
        }

        if(!values.password){
            errors.password = "!";
        }else if(!regexp.test(values.password)){
            errors.password = "!";
        }
        else if(values.password.length < 4){
            errors.password = "!";
        }else if (values.password.length > 6){
            errors.password = "!";
        }
        return errors;
    }


  return (
    <>
        <div className="container-fluid text-lg-center">
            <div className="row">
    	        <div className="col-lg-4 offset-lg-4 float-lg-start">
    		        <div className="panel panel-default">
			  	        <div className="panel-heading">
                          {/* <img className='panel-img' src='http://www.bizwy.com/images/Bizwy-logo-180.svg'
                                alt='logo' width="100" height="100" /> */}
                          <img className='panel-img' src='../../images/img1.jpg'
                                alt='logo' width="100" height="100" style={{borderRadius:"50%"}} />
			 	        </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <input className='form-control'
                                        placeholder={`${errors.email}` ? `email` : 'abcd'}
                                        name="email" type="text"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    
                                        />
                                    <p>{formErrors.email}</p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" 
                                        placeholder="Password" 
                                        name="password" type={passwordShown ? "text" : "password"}
                                        value={formValues.password}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        />
                                <p>{formErrors.password}</p>
                                <button className='buton' onClick={togglePassword}>
                                    <i className='fas fa-eye'></i>
                                </button>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input name="remember" type="checkbox" 
                                            value={rememberMe}/> Remember Me
                                </label>
                            </div>
                            <button className="btn btn-lg btn-success btn-block" 
                                    type="submit" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Design1;