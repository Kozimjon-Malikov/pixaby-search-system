import React from "react";
import LazyLoad from "react-lazy-load";
const ImageList = ({ imgdata }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
      {imgdata &&
        imgdata.map((items) => (
          <LazyLoad threshold={0.95}>
            <div
              className="p-2 shadow-2xl shadow-stone-300 overflow-hidden"
              key={items.id}
            >
              <img
                src={items.webformatURL}
                alt="img"
                className="w-full h-80 object-cover rounded-2xl my-2"
              />
              <h2 className="text-xl my-5 font-medium uppercase">
                {items.user}
              </h2>
              <div className="border-t flex justify-between ">
                <span className="text-orange-500 my-2 font-medium">
                  Likes: &nbsp;{items.likes}
                </span>
                <span className="text-orange-500-500 my-2">
                  <a
                    className="text-blue-500 font-medium"
                    href={items.previewURL}
                  >
                    Downloads:
                  </a>{" "}
                  &nbsp;{items.downloads}
                </span>
              </div>
            </div>
          </LazyLoad>
        ))}
    </div>
  );
};

export default ImageList;
