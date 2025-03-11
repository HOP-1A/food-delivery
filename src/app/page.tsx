import HPItemComp from "@/_components/HomePageItemComp";

const Home = () => {
  const Data = [
    {
      productCover:
        "https://objectstorage.ap-sydney-1.oraclecloud.com/n/oraclegbuprod/b/IC_FBGBU_SS_38034_bt-sim-231023071222-MAX-8b5003ca-618d-46e1-b8b3-610d2d37a600/o/MAX250116085151889.png",
      productName: "Голден Рояал сет",
      productPrice: "19,900 ₮",
    },
  ];
  return (
    <div>
      {Data.map((data, index) => {
        return (
          <HPItemComp
            productCover={data.productCover}
            productName={data.productName}
            productPrice={data.productPrice}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default Home;
