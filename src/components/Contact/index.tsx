import React from 'react';

const Contact = () => {
  return (
    <div className="item contact" id="contact">
      <h1 className="contact__title">Contact</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          pattern="[a-zA-Z ]+"
          required
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email..."
          required
        />
        <input
          type="text"
          id="message"
          name="message"
          placeholder="message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
