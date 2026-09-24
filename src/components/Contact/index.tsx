"use client";

import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    const body = JSON.stringify(Object.fromEntries(new FormData(form)));

    try {
      await Promise.all([
        fetch("https://formsubmit.co/ajax/artisan13226@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body,
        }),
        fetch("https://formsubmit.co/ajax/faisal96kp@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body,
        }),
      ]);
      setSubmitted(true);
      form.reset();
    } catch {
      window.alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="focality-contact-card">
      <h2>Get in touch</h2>
      <p>Tell us what you&apos;re working on. We&apos;ll get back to you shortly.</p>
      {submitted ? (
        <div className="focality-contact-success">
          <h3>Message sent.</h3>
          <p>Thanks for reaching out. We&apos;ll be in touch soon.</p>
          <button type="button" onClick={() => setSubmitted(false)}>Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New message from Focality website" />
          <input type="hidden" name="_template" value="table" />
          <label>
            Name
            <input type="text" name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="you@company.com" />
          </label>
          <label>
            What are you building?
            <textarea name="message" required rows={5} placeholder="A few words about the work..." />
          </label>
          <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send message ↗"}</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
