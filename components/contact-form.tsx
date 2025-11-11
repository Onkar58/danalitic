"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    projectType: "",
    message: "",
    source: "",
    contact: "email",
    phone: "",
    agree: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to a server
    alert("Thank you for reaching out! We'll be in touch soon.")
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "",
      projectType: "",
      message: "",
      source: "",
      contact: "email",
      phone: "",
      agree: false,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] bg-background text-foreground"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] bg-background text-foreground"
          placeholder="you@company.com"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company Name *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] bg-background text-foreground"
          placeholder="Your company"
        />
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] bg-background text-foreground"
        >
          <option value="">Select an industry</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="retail">Retail</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="saas">SaaS</option>
          <option value="public">Public Sector</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] bg-background text-foreground"
        >
          <option value="">Select project type</option>
          <option value="ai">AI/LLM Development</option>
          <option value="cloud">Cloud Engineering</option>
          <option value="data">Data Science</option>
          <option value="quantum">Quantum Computing</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] bg-background text-foreground"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      {/* How did you hear */}
      <div>
        <label htmlFor="source" className="block text-sm font-medium text-foreground mb-2">
          How did you hear about us?
        </label>
        <select
          id="source"
          name="source"
          value={formData.source}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] bg-background text-foreground"
        >
          <option value="">Select an option</option>
          <option value="search">Search</option>
          <option value="referral">Referral</option>
          <option value="linkedin">LinkedIn</option>
          <option value="event">Event</option>
          <option value="blog">Blog</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Contact Method */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Preferred Contact Method</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="contact"
              value="email"
              checked={formData.contact === "email"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-sm text-foreground">Email</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="contact"
              value="phone"
              checked={formData.contact === "phone"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-sm text-foreground">Phone</span>
          </label>
        </div>
      </div>

      {/* Phone (conditional) */}
      {formData.contact === "phone" && (
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] bg-background text-foreground"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      )}

      {/* Agreement */}
      <label className="flex items-start gap-2">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          required
          className="w-4 h-4 mt-1"
        />
        <span className="text-sm text-muted">
          I agree to receive communications from Danalitic regarding my inquiry and future updates.
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="w-full px-6 py-3 gradient-brand text-white rounded-lg font-medium hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        Send Message
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  )
}
