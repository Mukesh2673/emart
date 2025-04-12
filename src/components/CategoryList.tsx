const categories = ["Mobile", "Cosmetics", "Electronics", "Furniture", "Watches", "Decor", "Accessories", "Jewelry", "Appliances", "Sports"];

export default function CategoryList() {
  return (
    <section className="my-6 mx-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Shop From Top Categories</h3>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
          View All
          <span className="ml-1 text-base">›</span>
        </a>
      </div>
      <hr className="border-t border-blue-900 w-[250px] mb-4" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {categories.slice(0, 7).map((category, idx) => (
          <div key={idx} className="text-center cursor-pointer transition-all duration-300 ease-in-out">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 hover:border-2 hover:border-sky-400 transition-all duration-300 ease-in-out" />
            <p className="text-sm sm:text-base">{category}</p>
          </div>
        ))}
      </div>  
    </section>
  );
}
