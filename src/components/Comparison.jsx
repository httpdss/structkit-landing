import React from 'react'

const rows = [
  { feature: 'Remote content (GitHub, S3, GCS, HTTP)', cookiecutter: false, copier: false, structkit: true },
  { feature: 'AI / MCP integration',                   cookiecutter: false, copier: false, structkit: true },
  { feature: 'Pre/post generation hooks',              cookiecutter: true,  copier: true,  structkit: true },
  { feature: 'Dry run mode',                           cookiecutter: false, copier: true,  structkit: true },
  { feature: 'YAML-first (no template repo required)', cookiecutter: false, copier: false, structkit: true },
  { feature: 'Multiple file conflict strategies',      cookiecutter: false, copier: true,  structkit: true },
  { feature: 'IDE schema validation',                  cookiecutter: false, copier: false, structkit: true },
  { feature: 'Update existing projects',               cookiecutter: false, copier: true,  structkit: true },
]

function Check({ value, highlight }) {
  if (value) {
    return (
      <span className={highlight ? 'text-green-400 font-bold text-lg' : 'text-green-400 text-lg'}>
        ✓
      </span>
    )
  }
  return <span className="text-gray-600 text-lg">✗</span>
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How does structkit compare?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A direct comparison with the most popular project scaffolding tools in the Python ecosystem.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-800">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-400 w-1/2">Feature</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-400">cookiecutter</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-400">copier</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-green-400 bg-green-500/5">
                  structkit
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-gray-800 last:border-0 ${
                    i % 2 === 0 ? 'bg-gray-950' : 'bg-gray-900/30'
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-gray-300">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    <Check value={row.cookiecutter} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check value={row.copier} />
                  </td>
                  <td className="px-6 py-4 text-center bg-green-500/5">
                    <Check value={row.structkit} highlight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Looking for a detailed breakdown?{' '}
          <a
            href="https://dev.to/httpdss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Read the full comparison post →
          </a>
        </p>
      </div>
    </section>
  )
}
