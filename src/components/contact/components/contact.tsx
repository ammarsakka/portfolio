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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await axios
      .post(`${EMAIL_SERVER_URL}/email/ammar_portfolio`, {
        name,
        email,
        messageText,
      })
      .then((data) => {
        if (data.data) {
          emptyFormElements();
          setLoading(false);
        }

        setMessage(data.data);
      });
  };

  const emptyFormElements = () => {
    setName("");
    setEmail("");
    setMessageText("");
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={messageText}
            onChange={(e) => {
              setMessageText(e.target.value);
            }}
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
