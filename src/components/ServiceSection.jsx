import Link from "next/link";

export default function ServiceSection() {
  const services = [
    {
      title: "Environment Protection",
      icon: "🌱",
      description: `We strive to protect and preserve our natural environment. Our team regularly conducts tree plantation drives, cleanliness campaigns, and promotes eco-friendly practices in both urban and rural areas.`,
      impact: `Over 10,000 trees planted and 20+ awareness campaigns conducted across cities and villages.`,
    },
    {
      title: "Quality Education",
      icon: "📚",
      description: `We believe that education is the key to a better future. We run learning centers, distribute educational materials, and support children with scholarships and mentorship.`,
      impact: `Educated 1,500+ children through our programs and helped 200+ dropouts return to school.`,
    },
    {
      title: "Women Empowerment",
      icon: "💪",
      description: `Auras Foundation empowers women through skill development, self-help groups, and awareness sessions on rights, health, and entrepreneurship.`,
      impact: `Trained 800+ women in tailoring, digital skills, and supported 100+ in starting small businesses.`,
    },
    {
      title: "Help & Support",
      icon: "🤝",
      description: `In times of need, we stand with the community. We provide food, medical aid, and emergency relief during natural disasters or social crises.`,
      impact: `Served over 5,000 families during COVID-19 and continue monthly food support in slum areas.`,
    },
  ];

  return (
    <section id="services" className="bg-white text-gray-800 py-20 px-4 md:px-16">
      {/* Hero Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-green-700 mb-4">What We Do</h2>
        <p className="text-lg text-gray-600">
          At <span className="font-semibold text-green-800">Auras Foundation</span>, we are dedicated to building a better society through impactful work in environment, education, women empowerment, and humanitarian support. Our services are designed to create lasting change.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-green-50 p-8 rounded-2xl shadow hover:shadow-md transition duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 mb-3">{service.description}</p>
            <p className="text-sm text-green-700 font-medium">{service.impact}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h3 className="text-3xl font-bold text-green-700 mb-4">
          Want to Join Us in Making a Difference?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether it's volunteering, donating, or spreading awareness — every small step counts.
          Be a part of our journey to uplift lives and protect the planet.
        </p>
        <Link href='/contact'><button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition">
          Become a Volunteer
        </button></Link>
      </div>
    </section>
  );
}
