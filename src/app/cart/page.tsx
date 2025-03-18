import { CartContent } from "../_components/CartContent";

const Page = () => {
  const mockData = [
    {
      id: "1",
      name: "Long Cheese Burger",
      description:
        "Package with 8 pieces of chicken nuggets, fries, ice tea drink and children's toys",
      price: 16900,
      imgUrl:
        "https://objectstorage.ap-sydney-1.oraclecloud.com/n/oraclegbuprod/b/IC_FBGBU_SS_38034_bt-sim-231023071222-MAX-8b5003ca-618d-46e1-b8b3-610d2d37a600/o/MAX231220034627503.png",
    },
    {
      id: "2",
      name: "Fried potato /Large/",
      description: "Шарсан төмс L",
      price: 4500,
      imgUrl:
        "https://objectstorage.ap-sydney-1.oraclecloud.com/n/oraclegbuprod/b/IC_FBGBU_SS_38034_bt-sim-231023071222-MAX-8b5003ca-618d-46e1-b8b3-610d2d37a600/o/MAX240530012413914.PNG",
    },
  ];
  return (
    <div className="bg-[rgb(245,235,220)] bg-opacity-[var(--tw-bg-opacity)] min-h-screen">
      <div className="w-screen flex flex-col items-center gap-6">
        {mockData.map((data) => {
          return <CartContent data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};
export default Page;
