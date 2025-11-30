import Analytics from "../component/UI/Home/Analytics/analytics-report";
import SortInfo from "../component/UI/Home/info/sort-info";
import RecentOrder from "../component/UI/Home/recent-order";
import Report from "../component/UI/Home/reports/report";
import TopSellingProduct from "../component/UI/Home/Top-selling-product";

function Home() {
  return (
    <section className="basis-5/6 p-12">
      {/* 1st section  */}
      <SortInfo />

      {/* 2nd section  */}
      <section className="flex ">
        <Report />
        <Analytics />
      </section>

      {/* 3rd section  */}
      <section className="flex mt-12">
        <section>
          
          <RecentOrder />
        </section>
        <section>
          
          <TopSellingProduct />
        </section>

      </section>
    </section>
  );
}

export default Home;
