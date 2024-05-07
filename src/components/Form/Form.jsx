import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useRef, useState } from 'react';
const FormComponent = () => {

  // const [passwordVisible, setPasswordVisible] = useState(false);
  // const passwordInputRef = useRef(null);

  // const handleTogglePassword = () => {
  //   setPasswordVisible(!passwordVisible);
  //   if (passwordInputRef.current) {
  //     passwordInputRef.current.type = passwordVisible ? 'password' : 'text';
  //   }
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 container mb-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email", {
            required: true,
            // minLength: 10,
            pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
          })}
        />
        {errors.email && (
          <span className="text-danger fs-6">email is not valid</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          // ref={passwordInputRef}
          {...register("password", { required: true, minLength: 8 })}
        />
        {/* <button onClick={handleTogglePassword}>
        {passwordVisible ? 'Hide' : 'Show'} Password
      </button> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="btn-success">
        Submit
      </Button>
    </Form>
    
  );
};

export default FormComponent;




















// import { useState } from "react";
// import './form.css'
// import FormInput from "../FormInput/FormInput.jsx";

// const Form = () => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "Username should be 3-16 characters and shouldn't include any special character!",
//       label: "Username",
//       pattern: "^[A-Za-z0-9]{3,16}$",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "It should be a valid email address!",
//       label: "Email",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//       label: "Password",
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//       required: true,
//     },
//     {
//       id: 4,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password",
//       pattern: values.password,
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="app">
//       <form onSubmit={handleSubmit}>
//         <h1>Register</h1>
//         {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;