import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface VoxaCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const VoxaCard = ({ title, icon, children }: VoxaCardProps) => {
  return (
    <Card className="bg-white shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        {icon && <div className="text-yellow-400 text-2xl">{icon}</div>}
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-600 text-base">{children}</CardContent>
    </Card>
  );
};
