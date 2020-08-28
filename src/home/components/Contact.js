import React from "react";

export default () => {
    /**
     * THIS DOES NOT WORK. WE WILL FIX THIS LAST PART TOGETHER
     * https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
     */
  return (
    <React.Fragment>
      <h3 style={{ textAlign: "center" }}>Contact Me</h3>
      <form id="contact-form" method="post" data-netlify="true">
        <input
          class="input-field"
          type="text"
          name="name"
          placeholder=" Name"
        />
        <input
          class="input-field"
          type="text"
          name="email"
          placeholder=" Email"
        />
        <textarea
          class="input-field"
          type="text"
          name="note"
          placeholder=" Note"
        ></textarea>
        <div class="input-field">
          <div data-netlify-recaptcha="true"></div> 
        </div>
        <input type="submit" name="submit" value="Send" id="submit-btn" />
      </form>
    </React.Fragment>
  );
};
