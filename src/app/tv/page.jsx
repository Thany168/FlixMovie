"use client";

const sections = [
  {
    title: "Collaboration",
    channels: [
      { name: "Bayyon TV", logo: "/tv/bayon.png" },
      { name: "TTK", logo: "/tv/ttk.jpg" },
      { name: "Town", logo: "/tv/town.jpg" },
      { name: "PNN", logo: "/tv/pnn.jpg" },
      { name: "Bayyon TV", logo: "/tv/bayon.png" },
      { name: "TTK", logo: "/tv/ttk.jpg" },
      { name: "Town", logo: "/tv/town.jpg" },
      { name: "PNN", logo: "/tv/pnn.jpg" },
      { name: "Bayyon TV", logo: "/tv/bayon.png" },
      { name: "TTK", logo: "/tv/ttk.jpg" },
      { name: "Town", logo: "/tv/town.jpg" },
      { name: "PNN", logo: "/tv/pnn.jpg" },
    ],
  },
];

export default function TVPage() {
  return (
    <div className="bg-black min-h-screen text-white px-4 md:px-10 py-10">
      {sections.map((section, i) => (
        <div key={i} className="mb-10">
          {/* Section Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-5">
            {section.title}
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {section.channels.map((channel, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition duration-300"
              >
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
