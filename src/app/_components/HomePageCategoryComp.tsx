export const CategoryComponent = () => {
  const mockData = [
    {
      categoryImg:
        "https://storage.googleapis.com/bk-delivery/images/WB38SmxoFgYW4l6dzkOT16BSeXMKbATvbuPbxAT2.png",
      categoryCaption: "Онцлох",
    },
    {
      categoryImg:
        "https://storage.googleapis.com/bk-delivery/images/IcfXBsMaqyKgErm9J2Utt0nqBMAy0HW4mGGoMMQX.png",
      categoryCaption: "Үхрийн махтай сет",
    },
    {
      categoryImg:
        "https://storage.googleapis.com/bk-delivery/images/GvaDRmr7TSXS6J1aZyhGm48BylgPSjAiyEGaxCHT.png",
      categoryCaption: "Бургер",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {mockData.map((data, index) => {
        return (
          <button
            className="w-[250px] flex h-[80px] bg-white items-center border-2 rounded-2xl p-4 hover:bg-[rgb(80,35,20)] hover:bg-opacity-[0.8] hover:cursor-pointer hover:text-white"
            key={index}
          >
            <img src={data.categoryImg} className="w-1/3" />
            <div
              className="w-2/3 text-xl font-serif "
              style={{ fontWeight: 700 }}
            >
              {data.categoryCaption}
            </div>
          </button>
        );
      })}
    </div>
  );
};
