import userEvent from '@testing-library/user-event';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsGoogle } from 'react-icons/bs';
import {GoMarkGithub} from 'react-icons/go'
import { AuthContext } from '../../components/Context/AuthProvider';
const Register = () => {
    const {user, setUser, createUser} = useContext(AuthContext)

    const handleSubmit = event =>{

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, password, email, photo);

        createUser(email, password)
        .then( result => {
            const user =  result.user;
            console.log(user)
            setUser(user)
        })
        .catch( error =>{
            console.log(error)
        })
    } 



    return (
        <div className='w-50 ' style={{margin:'0px auto', marginTop:'20px', border: '2px solid black', padding:'30px'}}>
        <Form onSubmit={handleSubmit}>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Your Name</Form.Label>
   <Form.Control name="name" type="text" placeholder="Your Name" />
   
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Photo URL</Form.Label>
   <Form.Control name="photo" type="text" placeholder="Enter Your Photo URL" />
   
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
   <Form.Control name="email" type="email" placeholder="Enter email" required/>
  
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control name="password" type="password" placeholder="Password" />
 </Form.Group>
 <Button  variant="primary" type="submit">
   Register
 </Button>

</Form>
        <div>
            <div className='text-center mb-4'>
            <span>-----------</span> <span>Register using</span> <span>---------------</span>
            </div>
            <div className='d-flex  justify-content-center'>
            <span><button className='border-1 me-4'><BsGoogle></BsGoogle></button></span>
            <span><button className='border-1'><GoMarkGithub></GoMarkGithub></button></span>
            </div>
        </div>
   </div>
    );
};

export default Register;