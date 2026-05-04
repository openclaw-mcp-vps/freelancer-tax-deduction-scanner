export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          AI-Powered Tax Scanner
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Leaving Money on the Table at Tax Time
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your bank or credit card statements. Our AI scans every transaction and flags the business deductions freelancers most often miss — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">Cancel anytime. No credit card stored on our servers.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📄", title: "Upload PDF or CSV", body: "Drop in statements from any bank or card issuer." },
            { icon: "🤖", title: "AI Categorizes Everything", body: "OpenAI reads each transaction and labels it instantly." },
            { icon: "💰", title: "Export for Your CPA", body: "Download a clean deduction report ready for tax filing." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-wide mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited statement uploads",
              "AI transaction categorization",
              "Deduction flagging & scoring",
              "CSV export for tax filing",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which file formats are supported?",
              a: "We accept PDF and CSV exports from any major bank or credit card issuer, including Chase, Bank of America, Wells Fargo, and more."
            },
            {
              q: "Is my financial data secure?",
              a: "Statements are processed in memory and never stored on our servers. We use TLS encryption in transit and your data is deleted immediately after analysis."
            },
            {
              q: "What kinds of deductions does it find?",
              a: "Home office, software subscriptions, internet, phone, travel, meals, professional development, equipment, and dozens of other freelancer-specific categories the IRS allows."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        © {new Date().getFullYear()} FreelancerTax. Not a licensed tax advisor.
      </footer>
    </main>
  );
}
