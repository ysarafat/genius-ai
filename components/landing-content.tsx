"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Anna",
    avatar: "A",
    title: "Graphic Designer",
    description: "I love the creative features of this tool!",
  },
  {
    name: "Samuel",
    avatar: "S",
    title: "Data Scientist",
    description: "Incredible data visualization capabilities!",
  },
  {
    name: "Lily",
    avatar: "L",
    title: "Mobile App Developer",
    description: "Perfect for building cross-platform apps!",
  },
  {
    name: "Max",
    avatar: "M",
    title: "UX/UI Designer",
    description: "User-friendly interface and great design options!",
  },
];
const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonial
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg ">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
