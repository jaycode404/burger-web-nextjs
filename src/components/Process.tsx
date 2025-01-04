export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Choose Your Burger",
      description: "Select from our signature menu or build your own"
    },
    {
      number: "2",
      title: "Customize",
      description: "Add toppings and sides to your liking"
    },
    {
      number: "3",
      title: "Enjoy!",
      description: "Ready in minutes, satisfaction guaranteed"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 