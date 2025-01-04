export default function Benefits() {
  const benefits = [
    {
      title: "Fresh Daily",
      description: "All ingredients prepared fresh every morning",
      icon: "🌅"
    },
    {
      title: "Craft Recipes",
      description: "Unique combinations created by expert chefs",
      icon: "👨‍🍳"
    },
    {
      title: "Fast Service",
      description: "From grill to table in under 15 minutes",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Burgers?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 