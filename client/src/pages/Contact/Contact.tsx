import { useEffect, useState } from 'react';
import { sendEmail } from '../../api/sendEmail';

import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleInputValidation = () => {
    const errors = { name: "", email: "", message: "" };

    if (form.name === "") {
      errors.name = "Name is required";
    } else if (form.name.length < 2) {
      errors.name = "Name should be at least 2 characters";
    }

    if (form.email === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Invalid email";
    }

    if (form.message === "") {
      errors.message = "Message is required";
    } else if (form.message.length > 1000) {
      errors.message = "Message should not exceed 1000 characters";
    }

    setErrorMessages(errors);
    return Object.values(errors).every(error => error === "");
  };

  const sendForm = async (e:any) => {
    e.preventDefault();
    setSubmitted(true);
    if (handleInputValidation()) {
      await sendEmail(form);
      setForm({
        name: "",
        email: "",
        message: ""
      })
      setSubmitted(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      handleInputValidation();
    }
  }, [form]);

  return (
    <div className="contact" id="contact">
      <form onSubmit={sendForm}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your name"
          onChange={handleInputChange}
        />
        {submitted && <div className="errorMessage">{errorMessages.name}</div>}
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Your email"
          onChange={handleInputChange}
        />
        {submitted && <div className="errorMessage">{errorMessages.email}</div>}
        <textarea
          name="message"
          value={form.message}
          id="message"
          cols={30}
          rows={10}
          placeholder="Your message"
          maxLength={1000}
          onChange={handleInputChange}
        ></textarea>
        {submitted && <div className="errorMessage">{errorMessages.message}</div>}
        <input type="submit" value="Send message" />
      </form>
      <h1>Let's stay in touch</h1>
    </div>
  );
}

export default Contact;
