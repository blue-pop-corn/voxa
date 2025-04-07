import Image from "next/image";

export const LogosSection = () => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-500 mb-6">
          Trusted by innovative Indian startups
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-80">
          <div className="flex items-center space-x-2">
          <Image
              src="/images/logos/plugzmart_logo.jpeg"
              alt="Plugzmart Logo"
              width={120}
              height={40}
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold">Plugzmart</span>
          </div>

          <div className="flex items-center space-x-2">
          <Image
              src="/images/logos/images.png"
              alt="Panache"
              width={120}
              height={40}
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold">Panache</span>
          </div>

          <div className="flex items-center space-x-2">
            <Image
              src="/images/logos/go_do_good_logo.jpeg"
              alt="Go Do Good Logo"
              width={120}
              height={40}
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold">Go Do Good</span>
          </div>
        </div>
      </div>
    </section>
  );
};
