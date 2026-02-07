'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { icons } from '@/lib/icons';

const MailApp = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );
  const [formState, setFormState] = useState({
    sender: '',
    subject: '',
    message: '',
  });

  const serviceId =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_bjcaxk2';
  const templateId =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_p2bn4me';
  const publicKey =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'bwlZat1rjw2YJEAy2';

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) {
      return;
    }
    setStatus('sending');

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('sent');
      setFormState({ sender: '', subject: '', message: '' });
      formRef.current.reset();
    } catch (error) {
      setStatus('error');
    }

    window.setTimeout(() => {
      setStatus('idle');
    }, 4000);
  };

  return (
    <form
      ref={formRef}
      className="flex h-full w-full flex-col gap-3"
      method="POST"
      onSubmit={sendEmail}
    >
      <div className="win-panel flex flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">New Message</h3>
          <span className="text-[11px] text-gray-600">EmailJS powered</span>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] text-gray-700">
          <span className="win-panel-inset px-2 py-1">To: Assad Isah</span>
          <span className="win-panel-inset px-2 py-1">
            Reply: nottherealalanturing@gmail.com
          </span>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="win-panel-inset flex flex-col gap-1 px-3 py-2 text-xs">
          <span className="text-gray-600">From</span>
          <input
            className="bg-transparent text-sm outline-none"
            type="email"
            required
            name="sender"
            value={formState.sender}
            onChange={handleInputChange}
            placeholder="you@email.com"
          />
        </label>
        <label className="win-panel-inset flex flex-col gap-1 px-3 py-2 text-xs">
          <span className="text-gray-600">Subject</span>
          <input
            className="bg-transparent text-sm outline-none"
            type="text"
            required
            name="subject"
            value={formState.subject}
            onChange={handleInputChange}
            placeholder="Let’s build something"
          />
        </label>
      </div>

      <label className="win-panel-inset flex flex-1 flex-col gap-2 px-3 py-2 text-xs">
        <span className="text-gray-600">Message</span>
        <textarea
          className="min-h-[220px] flex-1 resize-none bg-white p-2 text-sm outline-none"
          name="message"
          value={formState.message}
          onChange={handleInputChange}
          required
          placeholder="Tell me about your project..."
        />
      </label>

      <div className="flex items-center justify-between px-2 text-[11px] text-gray-700">
        <div>
          {status === 'sent' && (
            <span>Message sent! I&apos;ll reply within 24 hours.</span>
          )}
          {status === 'error' && (
            <span>Something went wrong. Please try again shortly.</span>
          )}
        </div>
        <button
          type="submit"
          className="win-button flex items-center gap-2 px-3 py-1 text-sm"
          disabled={status === 'sending'}
        >
          <img src={icons.envelope} alt="Send" className="h-4 w-4" />
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
};

export default MailApp;
