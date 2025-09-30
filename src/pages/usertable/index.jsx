import React, { useEffect, useState } from "react";
import './usertable.css'
import { Trash ,Pencil} from "lucide-react";
import { useNavigate, useParams } from "react-router";

export default function UserTable(){
    const navigate=useNavigate()
    const {firstName} = useParams()

    
    const handle_edit = (value) =>{
        
        navigate(`/userdetails/${value.firstName}`);
        
    }
    
    const [updated_user,setUpdated_user] = useState(() => {
        
        const user_table_data = JSON.parse(localStorage.getItem('user_data'))
        return user_table_data

    })

    const handle_delete =(val) => {


        const user_delete = updated_user.filter((user)=> user.id !== val.id)
        setUpdated_user(user_delete)

        
    }
    
    useEffect(()=> {
        
        localStorage.setItem('user_data',JSON.stringify(updated_user))
    },[updated_user])

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
                        updated_user.map((val,index) => {
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
                                <td>{val?.genre?.join(' , ')}</td>
                                <td style={{display:'flex', gap:'10px'}}>
                                    
                                
                                <button style={{padding: '5px'}} onClick={()=>handle_edit(val,index)}><Pencil /></button>
                                <button style={{padding: '5px'}} onClick={()=> handle_delete(val)}><Trash/></button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}