export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Best burgers in town! The quality and taste are unmatched."
            </p>
            <div className="font-semibold">- John D.</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Fresh ingredients and amazing service every time!"
            </p>
            <div className="font-semibold">- Sarah M.</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "The craft burgers here are simply outstanding."
            </p>
            <div className="font-semibold">- Mike R.</div>
          </div>
        </div>
      </div>
    </section>
  );
} 