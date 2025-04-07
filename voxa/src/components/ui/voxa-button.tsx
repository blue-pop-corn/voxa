import { cn } from "@/lib/utils";
import { Button } from "./button";


interface VoxaButtonProps extends React.ComponentProps<typeof Button> {
  voxaVariant?: "primary" | "secondary";
}
export const VoxaButton = ({
  className,
  voxaVariant = "primary",
  ...props
}: VoxaButtonProps) => {
  const baseStyles =
    voxaVariant === "primary"
      ? "bg-yellow-400 hover:bg-yellow-300 text-black font-semibold"
      : "bg-slate-800 hover:bg-slate-700 text-white font-semibold";
      return (
        <Button
          className={cn("rounded-xl px-6 py-3 text-base", baseStyles, className)}
          {...props}
        />
      );
    };