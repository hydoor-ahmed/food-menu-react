const Categorys = ({ categoryFillter, allCategory }) => {
  const onFillter = (cat) => {
    categoryFillter(cat);
  };
  return (
    <div className="flex justify-center items-center mt-3">
      <div>
        {allCategory.length >= 1 ? (
          allCategory.map((cat) => {
            return (
              <button
                key={Math.random()}
                onClick={() => onFillter(cat)}
                className="border-2 border-braown px-2 py-1 rounded mx-1 transition-colors duration-300 hover:bg-braown hover:text-white"
              >
                {cat}
              </button>
            );
          })
        ) : (
          <h1>لاتوجد تصنيفات</h1>
        )}
      </div>
    </div>
  );
};

export default Categorys;
