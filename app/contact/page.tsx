"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions, feedback, or need help? We'd love to hear from you.
            Reach out and let's build the future of programming education
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                    <FaEnvelope
                      className="text-primary-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Email
                    </h3>
                    <p className="text-gray-400">
                      Mail us anytime
                    </p>
                    <p className="text-gray-400">
                      vk.varchasva@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-900/50 rounded-lg flex items-center justify-center">
                    <FaDiscord
                      className="text-secondary-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Community
                    </h3>
                    <p className="text-gray-400">
                      Join our Discord server
                    </p>
                    <a
                      href="#"
                      className="text-secondary-400 hover:underline"
                    >
                      Launching soon....
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <FaGithub
                      className="text-gray-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Open Source
                    </h3>
                    <p className="text-gray-400">
                      Contribute on GitHub
                    </p>
                    <a
                      href="https://github.com/varchasvakhare2022/SkillSync"
                      className="text-gray-400 hover:underline"
                    >
                      github.com/SkillSync
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-surface rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Help
              </h3>
              <div className="space-y-3">
                <a
                  href="/docs"
                  className="block text-primary-400 hover:underline"
                >
                  📚 How to get started with SkillSync?
                </a>
                <a
                  href="/docs"
                  className="block text-primary-400 hover:underline"
                >
                  🤖 How does the AI assistant work?
                </a>
                <a
                  href="/docs"
                  className="block text-primary-400 hover:underline"
                >
                  💻 Supported programming languages
                </a>
                <a
                  href="/docs"
                  className="block text-primary-400 hover:underline"
                >
                  🎥 YouTube integration guide
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Send us a Message
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPaperPlane
                    className="text-primary-400"
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thanks for reaching out. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-background text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-background text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-background text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-background text-white"
                    placeholder="Tell us more about your question or feedback..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
