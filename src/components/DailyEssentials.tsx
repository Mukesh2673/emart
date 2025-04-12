const dailyItems = [
    {
      title: "Daily Essentials",
      image: "https://via.placeholder.com/100?text=Essentials",
    },
    {
      title: "Vegetables",
      image: "https://via.placeholder.com/100?text=Vegetables",
    },
    {
      title: "Fruits",
      image: "https://via.placeholder.com/100?text=Fruits",
    },
    {
      title: "Strawberry",
      image: "https://via.placeholder.com/100?text=Strawberry",
    },
    {
      title: "Mango",
      image: "https://via.placeholder.com/100?text=Mango",
    },
    {
      title: "Cherry",
      image: "https://via.placeholder.com/100?text=Cherry",
    },
  ];
  
  export default function DailyEssentials() {
    return (
      <section className="py-6 px-4 mt-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Daily <span className="text-blue-500">Essentials</span>
          </h2>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            View All &rarr;
          </a>
        </div>
  
        <hr className="border-t border-blue-900 w-[250px] mb-4" />
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {dailyItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white cursor-pointer rounded-lg border border-gray-200 shadow-md hover:border-sky-400 hover:shadow-xl transition-all duration-300 p-4 text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain mx-auto mb-2"
              />
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-xs text-gray-600">UP to 50% OFF</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  