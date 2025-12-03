import { Link } from "react-router-dom";

function MenuItem({ icon: Icon, text, location = '/' }) {
  return (
    <Link to={`${location}`}>
      <section className="flex items-center w-full p-2 space-x-3 rounded-lg cursor-pointer">
        <span className="flex-shrink-0 text-gray-600 text-xl">
          <Icon />
        </span>

        <span className="hidden md:block lg:text-lg text-gray-600 whitespace-nowrap">
          {text}
        </span>
      </section>
    </Link>
  );
}

export default MenuItem;
