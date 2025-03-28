import { LandingHeader } from "@/components/Landing/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <LandingHeader />
    </div>
  );
}
