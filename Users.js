import React, { useEffect, useState, Fragment } from 'react';
// import {Button} from 'react-bootstrap'
import { Table } from 'react-bootstrap';

function Users() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
            data.json().then(result => {
                console.warn("result", result)
                setUser(result.data)
            })
        })
    }, [])

    return (
        <Fragment>
            <h1>Hello from User</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                    {
                        user.map((item, index) =>
                            <tr key={index}>
                                <td> {item.id} </td>
                                <td> {item.employee_name} </td>
                                <td> {item.employee_salary} </td>
                                <td> {item.employee_age} </td>
                            </tr>
                        )
                    }
                </thead>
                <tbody>

                </tbody>
            </Table>
        </Fragment>
    )
}

export default Users;





// Without API

// { name: 'MS', age: '24', address: 'Noida', number:'1234567890' },
// { name: 'PDS', age: '34', address: 'Delhi', number:'2345678901'},
// { name: 'Peter', age: '45' },
// { name: 'Karan', age: '80' },
// { name: 'PD', age: '76' },
// { name: 'Panda', age: '32' }


// {
//     user.map((item,index)=> <tr>
//         <td>{index}</td>
//         <td>{item.name}</td>
//         <td>{item.age}</td>
//         <td>{item.address}</td>
//         <td>{item.number}</td>
//     </tr>
//     )
// }