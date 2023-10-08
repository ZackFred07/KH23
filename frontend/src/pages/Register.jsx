import { useState } from 'react';
import './register.css';
import user_icon from '../assets/person.png';
import password_icon from '../assets/password.png';
import { supabase } from '../auth/supabase';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        throw error;
      }

      // Check if user is created successfully
      if (user) {
        alert('Check your email for verification link');
        // Optionally, you can redirect the user to a login page or another route.
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="container">
      <div className="register_header">
        <div className="register_text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form className="register_inputs" onSubmit={handleSubmit}>
        <div className="register_input">
          <img src={user_icon} alt="" />
          <input
            type="email" // Change this to type="email" for the email input
            name="email" // Set the name attribute to "email"
            placeholder="email" // Change the placeholder to "email"
            value={formData.email} // Bind the input value to formData.email
            onChange={handleChange}
          />
        </div>
        <div className="register_input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            name="password" // Set the name attribute to "password"
            placeholder="password"
            value={formData.password} // Bind the input value to formData.password
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="register_submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
