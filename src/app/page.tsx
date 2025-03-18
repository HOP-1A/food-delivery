import { CartContent } from "./_components/CartContent";
import { CategoryComponent } from "./_components/HomePageCategoryComp";

const HomePage = () => {
  return (
    <div className="bg-[rgb(245,235,220)] bg-opacity-[var(--tw-bg-opacity)] min-h-screen">
      <CategoryComponent />
    </div>
  );
};
export default HomePage;
