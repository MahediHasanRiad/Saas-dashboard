import image1 from "../../../../Images/AIR+JORDAN+5+RETRO+PSG.avif";
import image2 from "../../../../Images/JA+3+(GS).avif";
import image3 from "../../../../Images/WMNS+AIR+FORCE+1+07.avif";
import { Star } from "lucide-react";
import ProductItem from "./product-item";

function TopSellingProduct() {
  return (
    <section
      className="basis-2/4 p-6 rounded-xl bg-white shadow-md 
                 hover:shadow-lg transition-shadow h-100"
    >
      <h1 className="text-2xl">Top Selling Products</h1>

      <section>
        <ProductItem
          image={image1}
          productName={"Air Jordan 5"}
          price={"115"}
          rating={Star}
        />
      </section>
    </section>
  );
}

export default TopSellingProduct;
