import "../styles/Signup.css";
import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DateOfBirth from "./DateOfBirth";
const Signup = () => {
  const { login } = useContext(AuthContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("client submitting");
    // const url = "https://twitter-clone-615.herokuapp.com/register";
    const url = "http://localhost:5000/register";

    try {
      const res = await axios.post(url, {
        firstname,
        lastname,
        email,
        username,
        password,
        dateOfBirth: {
          month,
          day,
          year,
        },
      });

      console.log("res", res.data);

      login(res.data);
    } catch (err) {
      console.log("Error", err);
      setErrors(err.response.data.errors);
    }
  };

  const ableBtn = () => {
    return (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      password === "" ||
      email === "" ||
      year === "" ||
      month === "" ||
      day === ""
    );
  };
  return (
    <div className='signup-container'>
      <svg viewBox='0 0 24 24' aria-hidden='true' className='center'>
        <g>
          <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
        </g>
      </svg>

      <form onSubmit={handleSubmit}>
        <h4>Create your account</h4>
        <input
          type='text'
          placeholder='Firstname'
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        {errors.firstname && <p className='error'>{errors.firstname} </p>}

        <input
          type='text'
          placeholder='Lastname'
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        {errors.lastname && <p className='error'>{errors.lastname} </p>}

        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {errors.username && <p className='error'>{errors.username} </p>}

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errors.password && <p className='error'>{errors.password} </p>}

        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {errors.email && <p className='error'>{errors.email} </p>}
        <DateOfBirth
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
          errors={errors}
        />
        <input type='submit' value='Signup' disabled={ableBtn()} />
      </form>
    </div>
  );
};

export default Signup;
