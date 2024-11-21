import { jwtDecode } from "jwt-decode";
import { FormUser } from "../lib2/interfaces";
import toastService from "../services/toastService";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { IAuthContext } from "../../lib/interfaces";


class UserRESTService {

    optionsPOST = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: ''
    };

    async registerUser(form: FormUser) {
        this.optionsPOST.body = JSON.stringify(form);
        let token: string = '';
        await fetch('http://localhost:3000/api/register', this.optionsPOST)
            .then(response => {
                const res = response.json();
                res.then(data => {
                    if (data.token) {
                        console.log("SUCCESSO" + JSON.stringify(data));
                        toastService.toastSuccess('Login avvenuto con successo!');
                        token = data.token;
                    } else {
                        console.error(data.message)
                        toastService.toastError(data.message);

                    }

                })
            })

        const user = jwtDecode(token);
        console.log(JSON.stringify(user));


    }

    loginUser(form: FormUser) {
        
        const { email, password } = form;
        let token: string = '';
        let user = {};
        this.optionsPOST.body = JSON.stringify({ email, password });
        fetch('http://localhost:3000/api/login', this.optionsPOST)
            .then(response => {
                const res = response.json();
                res.then(data => {
                    if (data.token) {
                        console.log("SUCCESSO" + JSON.stringify(data.token));
                        toastService.toastSuccess('Login avvenuto con successo!');
                        user = jwtDecode(data.token); 
                                              
                    } else {
                        console.error(data.message)
                        toastService.toastError(data.message);
                    }

                })
            })

    }
}

export default new UserRESTService();