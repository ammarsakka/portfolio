import React, { FormEvent, useState } from "react";
import "../styles/index.css";
import { EMAIL_SERVER_URL } from "../constants/contact";
import axios from "axios";
import Alert from "../../../shared/Alert";

interface message {
  status: number;
  message: string;
  date: string;
}

function ContactForm() {
  const [message, setMessage] = useState<message | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePost = async (name: string, email: string, message: string) => {
    return await axios
      .post(`${EMAIL_SERVER_URL}/email/ammar_portfolio`, {
        name,
        email,
        message,
      })
      .then((data) => data.data);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const name = (
      (e.currentTarget.elements as any).fullname as HTMLInputElement
    ).value;
    const email = ((e.currentTarget.elements as any).email as HTMLInputElement)
      .value;
    const message = (
      (e.currentTarget.elements as any).message as HTMLInputElement
    ).value;

    let result = await handlePost(name, email, message);

    if (result) {
      emptyFormElements(e.currentTarget.elements as any);
      setLoading(false);
    }

    setMessage(result);
  };

  const emptyFormElements = (form: any) => {
    (form.fullname as HTMLInputElement).value = "";
    (form.email as HTMLInputElement).value = "";
    (form.message as HTMLInputElement).value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formgroup">
          <label htmlFor="fullname">
            full name <span>*</span>
          </label>
          <input
            type="text"
            id="fullname"
            autoComplete="true"
            required
            disabled={loading}
          />
        </div>
        <div className="formgroup">
          <label htmlFor="email">
            email address <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            autoComplete="true"
            required
            disabled={loading}
          />
        </div>
        <div className="formgroup">
          <label htmlFor="message">
            message <span>*</span>
          </label>
          <textarea
            id="message"
            rows={10}
            required
            disabled={loading}
          ></textarea>
        </div>
        <div className="formgroup">
          <button type="submit" disabled={loading}>
            Submit
          </button>
        </div>
      </form>
      <Alert message={message} />
    </div>
  );
}

export default ContactForm;
