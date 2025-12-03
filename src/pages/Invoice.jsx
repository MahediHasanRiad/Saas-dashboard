import { Trash, Mail, CalendarDays, Star, UserPen } from "lucide-react";
import FieldItem from "../component/UI/Invoice/field-item";
import Status from "../component/UI/Invoice/status";

function Invoice() {
  return (
    <section className="basis-5/6 bg-gray-50 p-6 sm:overflow-scroll md:overflow-scroll">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Invoice List</h2>

      <table className="w-full text-gray-500">
        <thead>
          <tr className="flex items-center px-4 py-3 border-b mb-2 border-gray-200 text-xs font-semibold text-gray-600">
            <th className="flex-none w-16 text-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded "
              />
            </th>

            <th className="w-1/6 text-left">Invoice ID</th>
            <th className="w-1/4 text-left">Name</th>
            <th className="w-1/4 text-left">Email</th>
            <th className="w-1/5 text-left">Date</th>

            <th className="flex-none w-1/6 text-center">Status</th>
            <th className="flex-none w-24 text-center">ADD</th>
            <th className="flex-none w-24 text-center">
              <Trash className="w-4 h-4 mx-auto" />
            </th>
          </tr>
        </thead>
        {/* header section End */}

        {/* body section start  */}
        <tbody>
          <tr className="flex items-center bg-white p-4 rounded-xl shadow-sx mb-1 ">
            <td className="flex-none w-16 text-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded "/>
            </td>

            <td className="w-1/6 font-medium text-gray-700">#152652fc</td>

            <td className="w-1/4">
              <FieldItem icon={UserPen } name={"Air Jordan 5"} bgColor={'#4285f4'}/>
            </td>

            <td className="w-1/4">
              <FieldItem
                icon={Mail}
                name={"customer@example.com"}
                bgColor={"#3a974c"}
              />
            </td>

            <td className="w-1/5">
              <FieldItem
                icon={CalendarDays}
                name={"12 Dec, 2025"}
                bgColor={"#4285f4"}
              />
            </td>

            <td className="flex-none w-1/6 text-center">
              <Status currentStatus={"Complete"} />
            </td>

            <td className="flex-none w-24 text-center">
              <Star className="w-4 h-4 text-yellow-500 cursor-pointer" />
            </td>

            <td className="flex-none w-24 text-center">
              <Trash color="#605bff" className="w-4 h-4 cursor-pointer" />
            </td>
          </tr>
        </tbody>

        {/* body section end  */}
      </table>
    </section>
  );
}

export default Invoice;
