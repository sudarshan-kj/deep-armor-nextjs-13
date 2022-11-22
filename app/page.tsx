import React from "react";
import Hero from "./Hero";
import Solutions from "./Solutions";

export default async function LandingPage() {
  return (
    <div>
      <Hero />
      <main>
        <Solutions />
        <div>This will take some effort and time</div>
      </main>
    </div>
  );
}
