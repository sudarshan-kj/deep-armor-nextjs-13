// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { TestimonialType } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TestimonialType>>
) {
  const testimonials: Array<TestimonialType> = [
    { description: "Lorem Ipsum", title: "CEO, Twitter" },
  ];
  res.status(200).json(testimonials);
}
