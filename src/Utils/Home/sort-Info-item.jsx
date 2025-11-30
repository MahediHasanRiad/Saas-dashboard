function SortInfoItem({ icon: Icon, iconColor, iconBackground, text, value }) {
  return (
    <section
      className="flex items-center justify-items-center-safe space-x-4 basis-1/4 p-6 rounded-xl bg-white shadow-md 
                 hover:shadow-lg transition-shadow duration-300 h-30 m-4"
    >
      <div style={{ color: iconColor, background: iconBackground }} className="flex items-center justify-center w-12 h-12 rounded-full p-2 text-white">
        <Icon className="w-6 h-6" />
      </div>

      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-800">{value}+</span>
        <span className="text-2xl text-gray-500 whitespace-nowrap">
          {text}
        </span>
      </div>
    </section>
  );
}

export default SortInfoItem;
