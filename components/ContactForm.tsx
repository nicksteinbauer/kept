"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const SERVICE_ID = "seahausrouter";
const TEMPLATE_ID = "seahaus_booking";
const PUBLIC_KEY = "user_vOc0ylPHeC2nCdyLQJAiW";
const RECAPTCHA_SITE_KEY = "6LcTMtAmAAAAABLQxeZFSw_iLXwolHCO3gEU3vzb";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  recaptcha?: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!data.firstName) errs.firstName = "* First name required";
    if (!data.lastName) errs.lastName = "* Last name required";
    if (!data.email) errs.email = "* Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "* Email must be valid";
    if (!isVerified) errs.recaptcha = "* Please confirm you are human";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
      setData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setIsVerified(false);
      recaptchaRef.current?.reset();
      Swal.fire({ title: "Message successfully sent!", icon: "success" });
    } catch {
      Swal.fire({ title: "Something went wrong", text: "Please try again.", icon: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (error?: string) =>
    `border rounded-lg px-4 py-2 text-green placeholder:text-green/40 focus:outline-none focus:ring-2 focus:ring-brown w-full ${
      error ? "border-red-400" : "border-brown"
    }`;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 max-w-2xl mx-auto text-left"
    >
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium text-green" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Jane"
            value={data.firstName}
            onChange={handleChange}
            className={inputClass(errors.firstName)}
          />
          {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium text-green" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Smith"
            value={data.lastName}
            onChange={handleChange}
            className={inputClass(errors.lastName)}
          />
          {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-green" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="jane@example.com"
          value={data.email}
          onChange={handleChange}
          className={inputClass(errors.email)}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-green" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="(555) 555-5555"
          value={data.phone}
          onChange={handleChange}
          className={inputClass()}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-green" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your home..."
          value={data.message}
          onChange={handleChange}
          className={`${inputClass()} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-1">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={(val) => {
            setIsVerified(!!val);
            setErrors((prev) => ({ ...prev, recaptcha: "" }));
          }}
        />
        {errors.recaptcha && <span className="text-red-500 text-sm">{errors.recaptcha}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start bg-brown text-light-tan px-6 py-2 rounded-[30px] border-2 border-brown transition-all duration-300 hover:bg-green hover:border-green disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
