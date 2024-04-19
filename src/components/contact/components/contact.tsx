import React, { FormEvent } from "react";
import "../styles/index.css";
import { EMAIL_SERVER_URL } from "../constants/contact";
import axios from "axios";

function ContactForm() {
  const handlePost = async (name: string, email: string, message: string) => {
    return await axios
      .post(`${EMAIL_SERVER_URL}/email/ammar_portfolio`, {
        name,
        email,
        message,
      })
      .then((data) => data)
      .catch((err) => err);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (
      (e.currentTarget.elements as any).fullname as HTMLInputElement
    ).value;
    const email = ((e.currentTarget.elements as any).email as HTMLInputElement)
      .value;
    const message = (
      (e.currentTarget.elements as any).message as HTMLInputElement
    ).value;

    let result = await handlePost(name, email, message);
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formgroup">
          <label htmlFor="fullname">
            full name <span>*</span>
          </label>
          <input type="text" id="fullname" autoComplete="true" />
        </div>
        <div className="formgroup">
          <label htmlFor="email">
            email address <span>*</span>
          </label>
          <input type="email" id="email" autoComplete="true" />
        </div>
        <div className="formgroup">
          <label htmlFor="message">
            message <span>*</span>
          </label>
          <textarea id="message" rows={10}></textarea>
        </div>
        <div className="formgroup">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
