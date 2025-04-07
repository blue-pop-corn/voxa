export const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-100 p-6 rounded-xl text-left shadow-md">
            <p className="text-lg text-slate-800 italic">
              “Voxa booked us 37 demo calls in the first week — hands-free.”
            </p>
            <footer className="mt-4 text-sm text-slate-600">— CEO, Startly</footer>
          </blockquote>
          <blockquote className="bg-gray-100 p-6 rounded-xl text-left shadow-md">
            <p className="text-lg text-slate-800 italic">
              “This is the fastest we’ve ever launched anything voice-based. Game changer.”
            </p>
            <footer className="mt-4 text-sm text-slate-600">— Head of Growth, AudioIQ</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
