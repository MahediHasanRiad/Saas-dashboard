function RecentOrder() {
  return (
    <section
      className="basis-2/4 mt-12 me-4 p-4 rounded-xl h-100"
    >
      <span className="text-2xl">Recent Order: </span>
      <table className="w-full border-collapse bg-white shadow-lg rounded overflow-hidden">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300 text-left text-gray-700 uppercase text-sm">
            <th className="py-3 px-4 font-semibold">Traking No.</th>
            <th className="py-3 px-4 font-semibold">Product Name</th>
            <th className="py-3 px-4 font-semibold text-right">Price</th>
            <th className="py-3 px-4 font-semibold text-right">Total Order</th>
            <th className="py-3 px-4 font-semibold text-right">Total Amount</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-indigo-50 transition-colors duration-150 text-gray-800">
            <td className="py-3 px-4 font-medium text-sm">#10001</td>
            <td className="py-3 px-4 text-sm">T-shirt</td>
            <td className="py-3 px-4 text-sm text-right">1205/-</td>
            <td className="py-3 px-4 text-sm text-right">10</td>
            <td className="py-3 px-4 text-sm font-bold text-right text-indigo-600">
              12000
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default RecentOrder;
