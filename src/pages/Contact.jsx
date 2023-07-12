import React from "react";

const Contact = () => {
  return (
    <section>
      <div>
        <p>You can connect with me on Github or LinkedIn!</p>
      </div>
      <form action method="get" className="contact-form form-info">
        <div className="form-name form-info">
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-email form-info">
          <label htmlFor="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-message form-info">
          <label htmlFor="message"></label>
          <input
            type="message"
            name="message"
            id="message"
            className="input-field-message"
            placeholder="Write me a message!"
          />
        </div>
        <div className="form-submit form-info">
          <input type="submit" defaultValue="Subscribe!" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
