import React from "react";
import logo from "../../images/logo.png";
import farmerAvatarImage from "../../images/farmerImage.png";
import {useState} from "react";
import {Inertia} from "@inertiajs/inertia";
const LoginLayout = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/login', {
            email,
            password,
        });
    };
    return (
        <div>

            <div className="row">
                <div className="col-lg-7">
                    <img
                        src={farmerAvatarImage}
                        alt="Farmer Avatar"
                        style={{ width: "100%", height: "125%" }}


                    />
                </div>
                <div className="col-5">
                     <div className="row">

                <div className="col-2">

                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: "100px", height: "100px" }}
                        className="p-3"

                    />

                </div>
                <div className="col-2 pt-4 " >
                    <h2 className="aft-logo-green">Digitt+</h2>

                </div>


            </div>
                    <div className="row">
                        <div className="card  p-3 mb-5 rounded">
                            <div className="card-body">
                                <h5 className="card-title">Login</h5>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" value={email}
                                               onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" value={password}
                                               onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                            </div>
                </div>

            </div>


        </div>
    </div>
</div>
    )

}
export default LoginLayout
