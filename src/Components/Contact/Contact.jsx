import React from 'react';
import classes from './Contact.module.css';
import close from '../../Assets/close.svg';
import emailjs from 'emailjs-com';
import emailKey from '../../Assets/emailKey';

const Contact = ({onClose}) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(`gmail`, emailKey.TEMPLATE_ID, e.target, emailKey.USER_ID)
        .then((result) => {
        alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
        alert("An error occurred, Please try again", error.text);
        });
        };

  const closeModalHandler = () => {
    onClose();
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <img src={close} className={classes.close} onClick={closeModalHandler} />
        <form onSubmit={handleSubmit}>
          <div className={classes.title}>
            <h2 className={classes.name}>HOW CAN I HELP?</h2>
            <p className={classes.msgT}>Send a message...</p>
          </div>
          <div className={classes.name}>
            <label>Name</label>
            <input type="text" />
          </div>
          <div className={classes.sub}>
            <label>Subject</label>
            <input type="text" />
          </div>
          <div className={classes.mail}>
            <label>Email</label>
            <input type="email" />
          </div>
          <div className={classes.msg}>
            <label>Leave a message..</label>
            <textarea className={classes.msg}>Hii there!</textarea>
          </div>
          <div className={classes.btn}>
            <button type="submit" className={classes.subBtn}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
