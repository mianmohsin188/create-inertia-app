
import logo from "../../images/logo.png";
import farmerAvatarImage from "../../images/farmerImage.png";

import {Inertia} from "@inertiajs/inertia";
import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import '../../js/bootstrap.js';


const LoginLayout = ({ children }) => {
    return (
        <div>
            {children}
            </div>
    )
}
export default LoginLayout
