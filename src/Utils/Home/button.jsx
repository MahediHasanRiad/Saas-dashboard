import { Plus } from "lucide-react";

function Button({ text }) {
  return (
    <div className="bg-blue-500  font-semibold rounded-md flex py-2 px-4 items-center cursor-pointer">
      <span>
        <Plus size={15} className="text-gray-200 mr-2" />
      </span>
      <button className=" text-white cursor-pointer">{text}</button>
    </div>
  );
}

export default Button;
