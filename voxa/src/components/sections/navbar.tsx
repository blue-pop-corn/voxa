import { VoxaButton } from "../ui/voxa-button";

export const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white border-b">
      <h1 className="text-xl font-bold text-slate-900">Voxa</h1>
      <VoxaButton variant="secondary">Get a Demo</VoxaButton>
    </nav>
  );
};
