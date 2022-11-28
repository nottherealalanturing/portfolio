import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { envelopeicon } from '../assets/icons';
import styles from './styles/mailcontentarea.module.css';

const MailContentArea = () => {
  const [result, showResult] = useState(false);
  const formRef = useRef();
  const [state, setState] = useState({
    sender: '',
    subject: '',
    message: '',
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bjcaxk2',
        'template_p2bn4me',
        formRef.current,
        'bwlZat1rjw2YJEAy2'
      )
      .then((result) => result.text);
    e.target.reset();
    showResult(true);
    setTimeout(() => {
      showResult(false);
    }, 5000);
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setState({
      [name]: value,
    });
  };

  return (
    <form
      className={styles.container}
      method="POST"
      onSubmit={sendEmail}
      ref={formRef}
      id="contact"
    >
      <div className={styles.row}>
        <input
          className={styles.subjectheader}
          defaultValue="New Message"
          value={state.subject}
          style={{
            outline: 'none',
            backgroundColor: '#ffffff00',
            border: 'none',
            boxShadow: 'none',
          }}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="reciever" className={styles.label}>
          To:
          <input
            id="reciever"
            className={styles.receiverbadge}
            readOnly
            style={{
              outline: 'none',
              backgroundColor: '#ffffff00',
              border: 'none',
              boxShadow: 'none',
            }}
            value="Assad Isah"
          />
        </label>
      </div>
      <div className={styles.row}>
        <label htmlFor="sender" className={styles.label}>
          From:
          <input
            id="sender"
            className={styles.sender}
            type="email"
            required
            style={{
              outline: 'none',
              backgroundColor: '#ffffff00',
              border: 'none',
              boxShadow: 'none',
            }}
            onChange={handleInputChange}
            value={state.sender}
            name="sender"
            placeholder="example@email.com"
          />
        </label>
      </div>
      <div className={styles.row}>
        <label htmlFor="subject" className={styles.label}>
          Subject:
          <input
            id="subject"
            className={styles.subject}
            type="text"
            required
            style={{
              outline: 'none',
              backgroundColor: '#ffffff00',
              border: 'none',
              boxShadow: 'none',
            }}
            onChange={handleInputChange}
            value={state.subject}
            name="subject"
          />
        </label>
      </div>
      <textarea
        className={styles.message}
        onChange={handleInputChange}
        value={state.message}
        name="message"
        required
        id="message"
      />
      <div className={styles.btnrow}>
        {result && (
          <h2 style={{ fontSize: '13px' }}>
            Thanks for reaching out!. I&apos;ll get back to you within 24 hours.
          </h2>
        )}
      </div>
      <div className={styles.btnrow}>
        <button type="submit" className={styles.sendbtn}>
          <img
            src={envelopeicon}
            alt="envelop icon"
            className={styles.mailIcon}
          />
          Send
        </button>
      </div>
    </form>
  );
};

export default MailContentArea;
