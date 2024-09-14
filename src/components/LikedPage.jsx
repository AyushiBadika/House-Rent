/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import data from "../../data";
import { Link } from "react-router-dom";

export default function LikedPage({ liked }) {
  const likedData = data.filter((data, index) => {
    if (liked?.includes(index)) return data;
  });

  return (
    <div>
      <h2 className="mb-4 mt-10 justify-center text-3xl md:justify-start w-full md:ml-16 font-bold md:text-4xl flex items-center gap-4">
        <Link to={"/"}>
          <img src="./goback.png" className="w-8" />
        </Link>
        Liked Properties
      </h2>
      {likedData?.length > 0 && (
        <div className="w-full grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 justify-items-center">
          {likedData?.map((data, index) => {
            return (
              <div key={index} className="relative w-72 rounded-md flex flex-col items-center justify-between shadow-lg cursor-pointer bg-white  gap-1">
                <img src={data.image} className="w-full h-56 rounded-t-md " />
                <div className="px-2 py-1 w-full">
                  <div className="flex w-full justify-between items-center ">
                    <p className=" w-3/4 content-center grow text-blue-600 text-lg font-bold">₹ {data.price}/day</p>
                  </div>
                  <p className="text-xl font-semibold  mt-2">{data.name}</p>
                  <p className="mb-4 mt-2 text-gray-500">
                    {data.address}, {data.city}
                  </p>
                  <hr />

                  <div className="flex justify-between my-3">
                    <div className="flex items-center gap-1">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"></path>
                      </svg>
                      <p>{data.info.bed} Beds</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"></path>
                      </svg>

                      <p>{data.info.bathrooms} Bath</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"></path>
                      </svg>
                      <p>{data.info.area} </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
