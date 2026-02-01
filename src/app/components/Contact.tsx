import React, { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  const contactLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-cyan-400" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-violet-400" },
    { icon: Mail, label: "Email", href: "mailto:your.email@example.com", color: "hover:text-cyan-400" },
  ];

  // ✅ STATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://formspree.io/f/xbdyvzey", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    setLoading(false);

    if (res.ok) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert("Send failed!");
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">

        {/* FORM */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>

          {/* ✅ GẮN onSubmit */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white"
              />

              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white"
            />

            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
