"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    projectType: [],
    message: "",
    contactMethod: "email",
    phone: "",
    heardAboutUs: "",
    agreeToContact: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      projectType: checked ? [...prev.projectType, value] : prev.projectType.filter((item) => item !== value),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form data:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({
      fullName: "",
      email: "",
      company: "",
      industry: "",
      projectType: [],
      message: "",
      contactMethod: "email",
      phone: "",
      heardAboutUs: "",
      agreeToContact: false,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="fullName" className="block text-sm font-medium mb-2">
          Full Name *
        </Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full"
          placeholder="John Doe"
        />
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <Label htmlFor="company" className="block text-sm font-medium mb-2">
          Company Name *
        </Label>
        <Input
          id="company"
          name="company"
          type="text"
          required
          value={formData.company}
          onChange={handleChange}
          className="w-full"
          placeholder="Your Company"
        />
      </div>

      <div>
        <Label htmlFor="industry" className="block text-sm font-medium mb-2">
          Industry
        </Label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
        >
          <option value="">Select an industry</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="retail">Retail</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="saas">SaaS</option>
          <option value="government">Government</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <Label className="block text-sm font-medium mb-3">Project Type</Label>
        <div className="space-y-2">
          {["GenAI/LLM", "ML/AI Strategy", "Cloud Engineering", "MLOps", "Data Engineering", "Consultation"].map(
            (type) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  checked={formData.projectType.includes(type)}
                  onChange={handleProjectTypeChange}
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor={type} className="ml-2 text-sm">
                  {type}
                </label>
              </div>
            ),
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium mb-2">
          Message / Project Brief *
        </Label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
          placeholder="Tell us about your project or question..."
        />
      </div>

      <div>
        <Label htmlFor="heardAboutUs" className="block text-sm font-medium mb-2">
          How did you hear about us?
        </Label>
        <select
          id="heardAboutUs"
          name="heardAboutUs"
          value={formData.heardAboutUs}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
        >
          <option value="">Select...</option>
          <option value="search">Search</option>
          <option value="referral">Referral</option>
          <option value="linkedin">LinkedIn</option>
          <option value="event">Event</option>
          <option value="blog">Blog</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <Label className="block text-sm font-medium mb-3">Preferred Contact Method</Label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="email-contact"
              name="contactMethod"
              value="email"
              checked={formData.contactMethod === "email"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="email-contact" className="ml-2 text-sm">
              Email
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="phone-contact"
              name="contactMethod"
              value="phone"
              checked={formData.contactMethod === "phone"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="phone-contact" className="ml-2 text-sm">
              Phone
            </label>
          </div>
        </div>
      </div>

      {formData.contactMethod === "phone" && (
        <div>
          <Label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full"
            placeholder="+1 (234) 567-890"
          />
        </div>
      )}

      <div className="flex items-center">
        <input
          type="checkbox"
          id="agreeToContact"
          name="agreeToContact"
          checked={formData.agreeToContact}
          onChange={handleChange}
          required
          className="w-4 h-4 rounded border-border"
        />
        <label htmlFor="agreeToContact" className="ml-2 text-sm">
          I agree to receive communications from AI Services
        </label>
      </div>

      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:opacity-90" size="lg">
        {submitted ? "Message Sent!" : "Send Message"}
      </Button>
    </form>
  )
}
