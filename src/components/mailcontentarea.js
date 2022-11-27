import React, { useState } from 'react';
import { envelopeicon } from '../assets/icons';
import styles from './styles/mailcontentarea.module.css';

const MailContentArea = () => {
  const [state, setState] = useState({
    sender: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setState({
      [name]: value,
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.container}>
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
            type="text"
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
      />
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

/*

.top-bar {
    background: rgb(0, 0, 124);
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 0;
    margin-bottom: 0;
}

.top-bar-window {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    z-index: 10;
    margin: 2px;
    padding: 2px 2px 2px 2px;
}

.top-bar-deactivated {
    background: rgb(123, 125, 123);
}

.top-bar:hover {
    cursor: default;
}

.window-name {
    color: white;
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0;
    font-size: 16px;
    margin: 0 0 0 3px;
}

.subject {
    width: 100%;
    background: none;
    border: none;
}

p {
    color: rgb(155, 155, 155);
    margin-right: 5px;
    font-size: 14px;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
}

button {
    outline: none;
}

hr {
    background-color: rgb(155, 155, 155, 0.2);
    width: 100%;
}

.sent {
    vertical-align: middle;
    box-shadow: 1.5px 1.5px black;
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    background: rgb(192, 192, 192);
    padding: 1px;
}

.sent:active {
    box-shadow: none;
    background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%, rgb(255, 255, 255) 0% 50%)
              50% / 2px 2px;
    border-top: solid rgb(0, 0, 0) 1.5px;
    // border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.border {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
}

.border:active {
    border: black dotted 1px;
}

.sent:hover {
    cursor: pointer;
}

.container-details {
    border: 1px white solid;
    background: white;
    width: 100%;
}

.header {
    font-weight: 700;
    font-size: 24px;
    padding-top: 10px;
    margin-left:8px;
    text-overflow: ellipsis;
    overflow: auto;
    max-width: auto;
}

.send-bar {
    border: 1px white solid;
    outline: 1px rgb(123, 125, 123) solid;
    font-size: 12px;
    padding: 4px;
    margin: 2px;
}

.receipient {
    background: rgb(194, 214, 252);
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 3px;
    font-size: 14px;
}

.subject-container {
    display: flex;
    height: 20px;
    align-items: center;
}

.from-container {
    display: flex;
    height: 20px;
    align-items: center;
}

input {
    outline: none;
}

textarea {
    margin: 0;
    background: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    caret-color: black;
    color: black;
    font-size: 14px;
    border-radius: 0;
    flex-grow: 1;
    width: 100% !important;
} */
