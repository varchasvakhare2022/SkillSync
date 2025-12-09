import React from "react";
import Link from "next/link";
import "./globals.css";
// ThemeToggle removed
import NewsletterSignup from "../components/NewsletterSignup";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaHeart,
  FaCode,
  FaRocket,
  FaGraduationCap,
  FaQuestionCircle,
} from "react-icons/fa";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background text-gray-300">
          <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-700/50 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    SkillSync
                  </Link>
                </div>
                <div className="flex items-center space-x-6">
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg transition-colors hover:bg-gray-800"
                  >
                    Home
                  </Link>
                  <Link
                    href="/app-page"
                    className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg transition-colors hover:bg-gray-800"
                  >
                    Learn
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg transition-colors hover:bg-gray-800"
                  >
                    About
                  </Link>
                  <Link
                    href="/docs"
                    className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg transition-colors hover:bg-gray-800"
                  >
                    Docs
                  </Link>
                  {/* ThemeToggle removed */}
                </div>
              </div>
            </nav>
          </header>
          <div className="pt-16">
            <main>{children}</main>
          </div>

          {/* Comprehensive Footer */}
          <footer className="bg-background border-t border-gray-800 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Main Footer Content */}
              <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/"
                      className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      SkillSync
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Revolutionizing programming education with ad-free YouTube
                    integration, real-time code execution, and AI-powered doubt
                    clearing.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/varchasvakhare2022"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href="https://x.com/varchasvkhare_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/varchasva/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href="https://www.youtube.com/@VarchasvaKhare-o7b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110"
                      aria-label="YouTube"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-200">
                    Quick Links
                  </h3>
                  <nav className="flex flex-col space-y-2">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-primary-400 transition-colors flex items-center space-x-2"
                    >
                      <FaRocket
                        className="text-primary-500"
                        size={14}
                      />
                      <span>Home</span>
                    </Link>
                    <Link
                      href="/app-page"
                      className="text-gray-400 hover:text-primary-400 transition-colors flex items-center space-x-2"
                    >
                      <FaCode
                        className="text-primary-500"
                        size={14}
                      />
                      <span>Start Learning</span>
                    </Link>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-primary-400 transition-colors flex items-center space-x-2"
                    >
                      <FaGraduationCap
                        className="text-primary-500"
                        size={14}
                      />
                      <span>About Us</span>
                    </Link>
                    <Link
                      href="/docs"
                      className="text-gray-400 hover:text-primary-400 transition-colors flex items-center space-x-2"
                    >
                      <FaQuestionCircle
                        className="text-primary-500"
                        size={14}
                      />
                      <span>Documentation</span>
                    </Link>
                  </nav>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-200">Features</h3>
                  <nav className="flex flex-col space-y-2">
                    <Link
                      href="/app-page"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      YouTube Integration
                    </Link>
                    <Link
                      href="/app-page"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      Code Editor
                    </Link>
                    <Link
                      href="/app-page"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      Ask Doubt AI
                    </Link>
                    <Link
                      href="/app-page"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      Real-time Execution
                    </Link>
                    <Link
                      href="/app-page"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      10+ Languages
                    </Link>
                  </nav>
                </div>

                {/* Contact & Legal */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-200">Support</h3>
                  <nav className="flex flex-col space-y-2">
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2"
                    >
                      <FaEnvelope size={12} />
                      <span>Contact Us</span>
                    </Link>
                    <Link
                      href="/docs"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      Help Center
                    </Link>
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      Terms of Service
                    </Link>
                  </nav>

                  {/* Newsletter Signup */}
                  <NewsletterSignup />
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="border-t border-gray-800 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <span>&copy; 2025 SkillSync. Made with</span>
                    <FaHeart className="text-red-500" size={12} />
                    <span>By</span>
                    <a href="https://github.com/varchasvakhare2022">Varchasva</a>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>All systems operational</span>
                    </div>
                    <span>Version 2.0</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "SkillSync - Interactive Learning Platform",
  description:
    "Master programming with interactive video tutorials and hands-on coding practice",
  icons: {
    icon: "/assets/SkillSynclogo.png",
    shortcut: "/assets/SkillSynclogo.png",
    apple: "/assets/SkillSynclogo.png",
  },
};
