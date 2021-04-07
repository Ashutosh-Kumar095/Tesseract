import {Form, FormGroup,Button ,Card} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { useDispatch} from 'react-redux';
import axios from 'axios';
import { login } from './action/actions';

const LoginForm=()=>{
const [inputs,setInputs]=useState({name:'',password:'',email:''});
const [nameError,setNameError]=useState(false);
const [emailError,setEmailError]=useState(false);
const [passwordError,setPasswordError]=useState(false);
const dispatch=useDispatch();

const onChange=(e)=>{
    if(e.target.name==='name')
        setInputs({...inputs,name:e.target.value});
    else if(e.target.name==='email')
        setInputs({...inputs,email:e.target.value});
    else
        setInputs({...inputs,password:e.target.value});        
}
const handleSubmit=(e)=>{
    e.preventDefault();
    let reqObj={};
    const{name,email,password}=e.target;
    if(name.value)
    {
        setNameError(false)
        reqObj.name=name.value
    }
    else
    {
        setNameError(true)
    }

     if(email.value)
    {
        setEmailError(false)
        reqObj.email=email.value
    }
    else
    {
        setEmailError(true)
    }
    if(password.value)
    {
            setPasswordError(false)
            reqObj.password=password.value
    }
    else
    {
        setPasswordError(true)
    } 
    if(name.value && email.value && password.value)
    {
        axios.post('http://exptest-env.eba-vpud9n93.us-east-2.elasticbeanstalk.com/api/createAdmin',reqObj).then((result)=>{
            dispatch(login(result))
        }).catch(()=>{
            console.log('error occured');
            const errObj={
                data:{
                    errorMessage:'Some internal server error occured.'
                }
            }
            dispatch(login(errObj))
        })
    }
}

return (
    <>
    <Form className="col-md-4 offset-md-4 form-class" onSubmit={handleSubmit}>
    <Card>
    <Card.Title className='card-title form-header-labels'>Admin Login/Registration Page.</Card.Title>
    <Card.Body>
    <FormGroup>
            <Form.Label className="form-header-labels">Name *:</Form.Label>
            <Form.Control type="text" placeholder="Enter the name." 
            name="name" onChange={onChange} value={inputs.name}
            className={nameError && 'form-error'}
            />
        </FormGroup>
        <FormGroup >
            <Form.Label className="form-header-labels">Email *:</Form.Label>
            <Form.Control type="email" placeholder="example@email.com" 
            name="email" value={inputs.email} onChange={onChange}
            className={emailError && 'form-error'}
            />
        </FormGroup>
        <FormGroup >
            <Form.Label className="form-header-labels">Password *:</Form.Label>
            <Form.Control type="password" placeholder="Enter the password." name="password" 
            value={inputs.password} onChange={onChange}
            className={passwordError && 'form-error'}
            />
        </FormGroup>
        <Button type="submit" variant="primary">Submit</Button>
        </Card.Body>
        </Card>
    </Form>
    </>
)
}

export default LoginForm;
