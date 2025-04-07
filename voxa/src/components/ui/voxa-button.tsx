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
      ? "bg-slate-900 hover:bg-slate-300 text-white font-semibold"
      : "bg-yellow-900 hover:bg-slate-900 text-black font-semibold";
      return (
        <Button
          className={cn("rounded-xl px-6 py-3 text-base", baseStyles, className)}
          {...props}
        />
      );
    };