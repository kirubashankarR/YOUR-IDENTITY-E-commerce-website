import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <Spinner className="mx-auto mb-4" size="lg" />
        <h2 className="text-lg font-semibold text-foreground mb-2">Loading...</h2>
        <p className="text-sm text-muted-foreground">Please wait while we load the content</p>
      </div>
    </div>
  );
}