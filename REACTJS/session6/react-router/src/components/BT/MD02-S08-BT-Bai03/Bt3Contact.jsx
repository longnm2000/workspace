import React from "react";

export default function Bt3Contact() {
  return (
    <div className="homepage">
      <div className="">
        <p className="homepage-title">Contact Us</p>
        <form action="" className="contact-form">
          <div className="input-group">
            <div className="input-box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name=""
                id="name"
                placeholder="Enter ur name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name=""
                id="email"
                placeholder="Enter ur email"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name=""
                id="phone"
                placeholder="Enter ur phone"
              />
            </div>
            <div className="input-box">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                name=""
                id="website"
                placeholder="Enter ur website"
              />
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter ur message"
            ></textarea>
          </div>
          <p className="require">* Require Field</p>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}
