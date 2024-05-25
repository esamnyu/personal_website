import React from 'react';

const Contact = () => (
  <section id="contact" className="section">
    <h2>Contact</h2>
    <p>You can reach me via <a href="mailto:es5888@nyu.edu">email</a> or connect with me on <a href="https://linkedin.com/in/ethansam">LinkedIn</a>.</p>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
