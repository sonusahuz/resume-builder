import React from "react";

export default function Contact() {
  return (
    <div
      className="px-20 flex items-center justify-center h-screen dark:text-white dark:bg-black"
      id="contact"
    >
      <div className=" text-center">
        <h1 className=" font-bold text-4xl">
          Love to hear from you, Get in touch 👋
        </h1>
        <p className="w-[900px] text-gray-700 py-4">
          Have questions or inquiries? We're here to help! Reach out to us and
          get in touch with our friendly team. Whether you need assistance, have
          feedback, or want to collaborate, we're just a message away. Your
          thoughts matter, and we're always ready to listen. Don't hesitate,
          drop us a line today!
        </p>
        <a
          className="px-4 py-2 bg-black text-sm dark:bg-white dark:text-black w-26 rounded text-white"
          href="mailto:sonusahu8930@gmail.com"
        >
          Say Hello!
        </a>
      </div>
    </div>
  );
}
