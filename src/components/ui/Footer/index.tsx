"use client";

import { Typography } from "@mui/material";
import { EmailOutlined, PhoneOutlined, AppShortcut } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "API Reference", href: "/api" },
    { name: "Community", href: "/community" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#252223]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/3 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/4 rounded-full blur-lg"></div>
      </div>

      <div className="flex justify-center p-10">
        <div className="h-full w-full max-w-[1300px] px-[7%] py-16">
          {/* Main Footer Content */}
          <div className="backdrop-blur-xl bg-linear-to-br from-white/15 to-white/5 rounded-4xl p-12 border border-white/20 shadow-2xl mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center gap-3">
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    className="text-white"
                  >
                    My Sermon Assistant
                  </Typography>
                </div>

                <Typography
                  variant="body2"
                  className="text-white/70 leading-relaxed"
                >
                  Empowering pastors worldwide with AI-assisted sermon
                  preparation tools. Transform your ministry with technology
                  that amplifies your calling.
                </Typography>

                {/* Contact Info */}
                <div className="space-y-3 mt-8">
                  <div className="flex items-center gap-3">
                    <EmailOutlined className="w-4 h-4 text-white/60" />
                    <Typography variant="body2" className="text-white/70">
                      support@mysermonassistant.com
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneOutlined className="w-4 h-4 text-white/60" />
                    <Typography variant="body2" className="text-white/70">
                      (555) 123-4567
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <Typography
                  variant="h6"
                  fontWeight="600"
                  className="text-white"
                >
                  Quick Links
                </Typography>
                <nav className="space-y-3 mt-8">
                  {quickLinks.map((link) => (
                    <Typography
                      component="a"
                      href={link.href}
                      key={link.name}
                      mb={1}
                      className="block text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Typography>
                  ))}
                </nav>
              </div>

              {/* Newsletter & Social */}
              <div className="space-y-6">
                <Typography
                  variant="h6"
                  fontWeight="600"
                  className="text-white"
                >
                  Stay Connected
                </Typography>

                {/* Newsletter */}
                <div className="space-y-4 mt-8">
                  <Typography variant="body2" className="text-white/70">
                    Get weekly ministry insights and product updates
                  </Typography>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
                    />
                    <button className="px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <Typography variant="body2" className="text-white/70 mb-3">
                    Follow us on social media
                  </Typography>
                  <div className="flex gap-3">
                    {[
                      { icon: "📧", href: "/contact", label: "Email" },
                      { icon: "𝕏", href: "#", label: "Twitter" },
                      { icon: "📘", href: "#", label: "Facebook" },
                      { icon: "💼", href: "#", label: "LinkedIn" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="backdrop-blur-xl bg-linear-to-r from-white/10 to-white/5 rounded-3xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Typography variant="body2" className="text-white/60">
                © {new Date().getFullYear()} My Sermon Assistant. All rights
                reserved.
              </Typography>

              <div className="flex gap-6">
                {legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/60 hover:text-white/80 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Accent line */}
            <div className="mt-6 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Final touch - subtle brand mark */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-lg bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
              <Typography variant="body2" className="text-white/50 text-xs">
                Built with ❤️ for Ministry Leaders
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
