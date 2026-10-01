import { Loader2 } from "lucide-react";

const loading = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-3 min-h-screen`}
    >
      <Loader2 className="h-20 w-20 animate-spin text-lime-400" />
    </div>
  );
};

export default loading;
