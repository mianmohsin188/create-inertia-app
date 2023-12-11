import {usePage} from "@inertiajs/inertia-react";
import Main from "@/Layouts/Main.jsx";
import {useEffect, useState} from "react";
import {getRequest} from "@/utility/request.js";

const Users = () => {
    const {auth} = usePage().props
    const title = "Users";
    const [users, setUsers] = useState([]);

    const getUsers =  () => {
        try {

            let users_list= getRequest('/users/all');
            users_list.then(
                (response) => {
                   setUsers(response.data.data);
                }
            ).catch(
                (error) => {

                }
            )
           // setUsers(users_list.data.data);
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(
        () => {
            getUsers()
        },[]
    )




    return (
        <Main auth={auth} title={title}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-primary float-end mdi mdi-plus m-2">Add User</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-light">
                                <tr>
                                    <th>
                                        <label className="customcheckbox">
                                            <input type="checkbox" id="mainCheckbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </th>
                                    <th>

                                            Avatar

                                    </th>


                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody className="customtable">
                                {
                                    users.length > 0 ? users.map((user) => (
                                            <tr>
                                                <th>
                                                    <label className="customcheckbox">
                                                        <input type="checkbox" className="listCheckbox"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </th>

                                                    <td><img src={user?.profile_photo_url+'&rounded=true&size=32'}/></td>

                                                <td>{user?.name}</td>
                                                <td>{user?.email}</td>
                                                <td>N/A</td>
                                                <td>{user?.created_at}</td>
                                                <td>
                                                    <button className="btn mdi mdi-pencil mdi-18px"></button>
                                                    <button className="btn text-danger mdi mdi-delete mdi-18px"></button>
                                                </td>
                                            </tr>
                                        ))
                                        : 'No users found'
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </Main>
    )
}
export default Users
