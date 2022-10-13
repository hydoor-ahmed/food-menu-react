const Card = ({ menu }) => {
  return (
    <>
      {menu.length !== 0 ? (
        menu.map((item) => (
          <div key={item.id} className="container mt-8">
            <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg">
              <img
                className="w-full md:w-[350px] md:h-[250px]"
                src={item.imgUrl}
                alt={item.title}
              />
              <div className="px-6 py-5 w-full">
                <div className="flex justify-between">
                  <h1 className="mb-6 font-bold">{item.title}</h1>
                  <span className="text-braown font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">
                  {item.description.concat(" ").repeat(5)}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (<h1 className="text-center mt-20 text-xl">لاتوجد وجبات</h1>)}
    </>
  );
};

export default Card;
