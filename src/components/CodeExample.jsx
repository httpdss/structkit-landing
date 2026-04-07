import React, { useState } from 'react'

const exampleYaml = `files:
  - README.md:
      content: |
        # {{@ project_name @}}
        {{@ description @}}
  - .github/workflows/ci.yml:
      file: github://your-org/templates/main/ci.yml
  - .gitignore:
      file: github://github/gitignore/main/Python.gitignore
  - terraform/main.tf:
      file: s3://your-bucket/terraform/base-module.tf

variables:
  - project_name:
      description: "Name of your project"
  - description:
      description: "One-line project description"`

const exampleBash = `# Install structkit
pip install structkit

# Generate a project from your template
structkit generate my-template.yaml ./new-service

# Start the MCP server for AI assistant integration
structkit mcp --server

# Dry-run to preview changes
structkit generate my-template.yaml ./existing-project --dry-run`

export default function CodeExample() {
  const [tab, setTab] = useState('yaml')
  const [copied, setCopied] = useState(false)

  const code = tab === 'yaml' ? exampleYaml : exampleBash

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="code" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See it in action
          </h2>
          <p className="text-gray-400 text-lg">
            Define once. Generate anywhere. Reference remote files with a single line.
          </p>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden">
          {/* Tab bar */}
          <div className="flex items-center justify-between border-b border-gray-800 px-4">
            <div className="flex">
              <button
                onClick={() => setTab('yaml')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  tab === 'yaml'
                    ? 'border-green-400 text-green-400'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                template.yaml
              </button>
              <button
                onClick={() => setTab('bash')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  tab === 'bash'
                    ? 'border-green-400 text-green-400'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                CLI usage
              </button>
            </div>
            <button
              onClick={copy}
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm flex items-center gap-1.5"
            >
              {copied ? (
                <><span className="text-green-400">✓</span> Copied!</>
              ) : (
                <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> Copy</>
              )}
            </button>
          </div>

          {/* Code block */}
          <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
            <code className="text-gray-300 font-mono">
              {tab === 'yaml'
                ? exampleYaml.split('\n').map((line, i) => (
                    <span key={i}>
                      {line
                        .replace(/(files:|variables:)/g, '<KEY>')
                        .split('<KEY>')
                        .map((part, j) =>
                          j % 2 === 0 ? (
                            <span key={j}>
                              {part
                                .replace(/(github://[^\s]+|s3://[^\s]+)/g, '<URL>$1</URL>')
                                .split(/(github://[^\s]+|s3://[^\s]+)/)
                                .map((chunk, k) =>
                                  chunk.startsWith('github://') || chunk.startsWith('s3://') ? (
                                    <span key={k} className="text-blue-400">{chunk}</span>
                                  ) : chunk.includes('{{@') ? (
                                    <span key={k} className="text-yellow-400">{chunk}</span>
                                  ) : (
                                    <span key={k}>{chunk}</span>
                                  )
                                )}
                            </span>
                          ) : (
                            <span key={j} className="text-green-400 font-semibold">{part}</span>
                          )
                        )}
                      {'\n'}
                    </span>
                  ))
                : exampleBash.split('\n').map((line, i) => (
                    <span key={i}>
                      {line.startsWith('#') ? (
                        <span className="text-gray-500">{line}</span>
                      ) : (
                        <span>{line}</span>
                      )}
                      {'\n'}
                    </span>
                  ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
