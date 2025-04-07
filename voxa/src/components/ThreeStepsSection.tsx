export const ThreeStepsSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 hover:scale-[1.02] transition-transform">
          Get Your AI Voice Bot in 3 Simple Steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-yellow-400 font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Tell Us About Your Business</h3>
            <p className="text-slate-600">
              Book a quick chat or fill out a short form — we’ll understand your product and goals in under 15 minutes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-yellow-400 font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">We Build Your Voice Bot</h3>
            <p className="text-slate-600">
              Our team creates a custom-trained voice assistant tailored to your tone, product, and use case.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-yellow-400 font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Go Live in 48 Hours</h3>
            <p className="text-slate-600">
              Plug Voxa into your call workflows, website, or CRM — and start closing leads with your new voice assistant.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
