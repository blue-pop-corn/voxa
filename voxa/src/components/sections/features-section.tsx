import { Rocket, MicVocal, Clock, Bot } from "lucide-react";
import { VoxaCard } from "../ui/voxa-card";

export const FeaturesSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Why Teams Choose Voxa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <VoxaCard title="Fast Setup" icon={<Clock />}>
            Go live in hours, not weeks. Launch your bot without dev time.
          </VoxaCard>
          <VoxaCard title="Real Conversations" icon={<MicVocal />}>
            Natural-sounding voice AI that adapts to real customers.
          </VoxaCard>
          <VoxaCard title="Custom Use Cases" icon={<Bot />}>
            Tailored to your sales flow, support style, or onboarding needs.
          </VoxaCard>
          <VoxaCard title="Lead Generation" icon={<Rocket />}>
            Book calls, answer questions, and convert leads 24/7.
          </VoxaCard>
        </div>
      </div>
    </section>
  );
};
