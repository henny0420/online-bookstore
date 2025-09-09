import React from "react";
import './usertable.css'
import { Trash ,Pencil} from "lucide-react";

export default function UserTable(){

    const user_table_data = JSON.parse(localStorage.getItem('user_data'))

    return(
        <div className="users-table">
            <table cellSpacing='0' cellPadding='10px' width='100%' border='1px'>
                <thead height='80px'>
                 <tr>
                    <th width='250px' ><b>Name</b></th>
                    <th><b>First name</b></th>
                    <th><b>Last name</b></th>
                    <th><b>Email</b></th>
                    <th><b>password</b></th>
                    <th><b>Country</b></th>
                    <th><b>City</b></th>
                    <th><b>Gender</b></th>
                    <th><b>Language</b></th>
                    <th><b>selected genre</b></th>
                    <th><b>Action</b></th>
                 </tr>
                </thead>
                <tbody>
                    {
                        user_table_data.map((val) => {
                            return(
                            <tr >
                                <td align='left'>{val.firstName + '   ' +'  ' +  val.lastName}</td>
                                <td>{val.firstName}</td>
                                <td>{val.lastName}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>{val.country}</td>
                                <td>{val.city}</td>
                                <td>{val.gender}</td>
                                <td>{val.language}</td>
                                <td>{val.genre.join(' , ')}</td>
                                <td style={{display:'flex', gap:'10px'}}>
                                    
                                <button style={{padding: '5px'}}><Trash/></button>
                                
                                <button><Pencil /></button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}