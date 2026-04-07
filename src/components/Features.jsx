import React from 'react'

const features = [
  {
    icon: '🌐',
    title: 'Remote-first content',
    description:
      'Reference files from GitHub, S3, GCS, or any HTTP URL directly in your YAML. When the canonical CI template updates, all new projects get it automatically — no copy-paste drift.',
  },
  {
    icon: '📄',
    title: 'YAML-first — no template repo needed',
    description:
      'Your entire project structure lives in a single YAML file. Commit it to your platform repo, version it, review it in a PR. No separate template repository overhead.',
  },
  {
    icon: '🤖',
    title: 'AI / MCP native',
    description:
      'structkit ships a built-in MCP server. Run `structkit mcp --server` and your AI assistant (Claude, Cursor, Copilot) can scaffold entire projects from natural language.',
  },
  {
    icon: '🔩',
    title: 'Pre/post hooks & conflict strategies',
    description:
      'Run arbitrary commands before or after generation. Choose skip, backup, or overwrite strategies per file. Dry-run mode shows you exactly what will change before it does.',
  },
  {
    icon: '✅',
    title: 'IDE schema validation',
    description:
      'Get autocomplete and inline validation on your structkit YAML in VS Code, JetBrains, and any JSON Schema-aware editor — catch mistakes before you generate.',
  },
  {
    icon: '🚀',
    title: 'Built for platform teams at scale',
    description:
      'Enforce org-wide project standards across all services. Every new microservice gets the same observability setup, security scanning, and documentation structure — automatically.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything your platform team needs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            structkit goes beyond simple templating — it's infrastructure as code for your project structure.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
