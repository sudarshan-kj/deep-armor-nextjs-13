import React from "react";
import type { TestimonialType } from "../types";

async function getTestimonials() {
  try {
    const res = await fetch("http://localhost:3000/api/testimonials");
    const testimonials = await res.json();
    return testimonials;
  } catch (e) {
    console.error("Something went wrong", e);
  }
}

export default async function LandingPage() {
  // Fetch data directly in a Server Component
  const testimonials: Array<TestimonialType> = await getTestimonials();
  // Forward fetched data to your Client Component
  return <div>Hello there on Landing Page</div>;
}
