import React from 'react'

export default function SocialProof() {
  return (
    <section id="stats" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Open source &amp; growing
          </h2>
          <p className="text-gray-400 text-lg">
            Built in public. MIT licensed. Community-driven.
          </p>
        </div>

        {/* Shields.io badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <a href="https://github.com/httpdss/structkit" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.shields.io/github/stars/httpdss/structkit?style=for-the-badge&logo=github&color=22c55e&labelColor=1a1a2e"
              alt="GitHub Stars"
            />
          </a>
          <a href="https://pypi.org/project/structkit/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.shields.io/pypi/dm/structkit?style=for-the-badge&logo=pypi&color=22c55e&labelColor=1a1a2e"
              alt="PyPI Downloads"
            />
          </a>
          <a href="https://pypi.org/project/structkit/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.shields.io/pypi/v/structkit?style=for-the-badge&logo=pypi&color=22c55e&labelColor=1a1a2e"
              alt="PyPI Version"
            />
          </a>
          <a href="https://github.com/httpdss/structkit/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.shields.io/github/license/httpdss/structkit?style=for-the-badge&color=22c55e&labelColor=1a1a2e"
              alt="License"
            />
          </a>
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🏗️</div>
            <h3 className="font-semibold text-white mb-2">Platform Teams</h3>
            <p className="text-gray-400 text-sm">
              Enforce org-wide project standards across all services with a single YAML config.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-white mb-2">DevEx Teams</h3>
            <p className="text-gray-400 text-sm">
              Reduce onboarding time from hours to seconds. `structkit generate service ./my-new-service`.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold text-white mb-2">AI-Powered Workflows</h3>
            <p className="text-gray-400 text-sm">
              Scaffold entire projects from natural language via the built-in MCP server.
            </p>
          </div>
        </div>

        {/* CTA repeat */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/httpdss/structkit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-gray-950 font-bold text-base px-10 py-4 rounded-xl transition-colors shadow-lg shadow-green-500/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Star structkit on GitHub
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Have questions?{' '}
            <a
              href="https://github.com/httpdss/structkit/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Join the GitHub Discussions
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
