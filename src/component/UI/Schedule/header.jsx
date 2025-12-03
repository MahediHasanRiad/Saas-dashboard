
import Button from "../../../Utils/Home/button";

function Header() {
  return (
    <section className="w-full flex justify-between">
      <div>
        <p className="text-3xl font-semibold">Schedule List</p>
      </div>
      <Button text={'Add New'} />
    </section>
  );
}

export default Header;
