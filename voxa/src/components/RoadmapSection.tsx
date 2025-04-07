// components/RoadmapSection.tsx

export const RoadmapSection = () => {
  const roadmap = [
    {
      title: "📞 Phone Call Support",
      description: "Voxa will handle real inbound/outbound calls with natural voice AI.",
      status: "Coming Soon",
    },
    {
      title: "🌍 Multi-language Bots",
      description: "Let Voxa chat in Spanish, Hindi, French & more — natively.",
      status: "Coming Soon",
    },
    {
      title: "📬 CRM Integrations",
      description: "Connect Voxa with HubSpot, Zoho, or Salesforce effortlessly.",
      status: "Planned",
    },
    {
      title: "💬 WhatsApp + SMS Support",
      description: "Automate lead follow-ups on WhatsApp & SMS with Voxa's brain.",
      status: "In Progress",
    },
  ]

  return (
    <section className="w-full bg-yellow-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">🚧 What&apos;s Coming Next</h2>
        <p className="text-slate-700 mb-12">
          We&apos;re just getting started. Here&apos;s what we&apos;re cooking up for you.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {roadmap.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 text-left hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-700">{item.description}</p>
              <span className="inline-block mt-4 text-sm font-medium text-yellow-700 bg-yellow-200 px-3 py-1 rounded-full">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
