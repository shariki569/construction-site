"use client";

import { FormEvent, useState } from "react";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="contact_form_wrap">
      <h2>Project Inquiry</h2>
      <p>Tell us about your Cebu project. We respond to complete inquiries within one business day.</p>
      {sent ? (
        <div className="form_success" role="status">
          <h3>Inquiry received</h3>
          <p>Thank you. A project coordinator from Apex Build Philippines will contact you using the details you provided. This form is a front-end placeholder until the live mailbox is connected.</p>
        </div>
      ) : null}
      <form onSubmit={onSubmit}>
        <div className="form_row">
          <label htmlFor="fullName">Full name</label>
          <input id="fullName" name="fullName" type="text" required placeholder="Juan Dela Cruz" />
        </div>
        <div className="form_row">
          <label htmlFor="phone">Mobile number</label>
          <input id="phone" name="phone" type="tel" required placeholder="+63 9XX XXX XXXX" />
        </div>
        <div className="form_row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@email.com" />
        </div>
        <div className="form_row">
          <label htmlFor="projectType">Project type</label>
          <select id="projectType" name="projectType" required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Residential Construction</option>
            <option>Commercial Building</option>
            <option>Renovation &amp; Remodeling</option>
            <option>Project Management &amp; Architectural Design</option>
          </select>
        </div>
        <div className="form_row">
          <label htmlFor="location">Project location in Cebu</label>
          <input id="location" name="location" type="text" required placeholder="e.g. Banilad, Cebu City" />
        </div>
        <div className="form_row">
          <label htmlFor="message">Project details</label>
          <textarea id="message" name="message" required placeholder="Lot size, target start date, plans available, budget range…" />
        </div>
        <p className="form_note">Service area is Cebu only. Projects outside Cebu will not be scheduled.</p>
        <button className="btn btn_dark" type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
}
