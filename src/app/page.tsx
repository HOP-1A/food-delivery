import { CategoryComponent } from "./_components/HomePageCategoryComp";
import OrderAddressPage from "./_components/OrderAddressPage";

const HomePage = () => {
  return (
    <div className="bg-[rgb(245,235,220)] bg-opacity-[var(--tw-bg-opacity)] min-h-screen">
      <CategoryComponent />
      <OrderAddressPage></OrderAddressPage>
    </div>
  );
};
export default HomePage;
