/* eslint-disable react/prop-types */

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

import data from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomeRent({ liked, handleLike }) {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    e.preventDefault();
    let tempFilteredData = data;

    if (searchQuery !== "" && searchQuery != undefined) {
      tempFilteredData = tempFilteredData.filter((data) => data.name.toLowerCase().includes(searchQuery.toLowerCase()) || data.type.toLowerCase().includes(searchQuery.toLowerCase()) || data.city.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (city !== "" && city != undefined) {
      tempFilteredData = tempFilteredData.filter((data) => data.city.toLowerCase() === city.toLowerCase());
    }

    if (date !== "" && date != undefined) {
      tempFilteredData = tempFilteredData.filter((data) => data.info.date[0] <= date.split("-")[2] && data.info.date[1] >= date.split("-")[2]);
    }

    if (price !== "" && price != undefined) {
      tempFilteredData = tempFilteredData.filter((data) => data.price >= Number(price.split("-")[0]) && data.price <= Number(price.split("-")[1]));
    }

    if (type !== "" && type != undefined && type !== "All") {
      tempFilteredData = tempFilteredData.filter((data) => data.type === type);
    }

    setFilteredData(tempFilteredData);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center py-4 bg-gray-100 sm:px-12 px-10 lg:flex-row flex-col gap-4">
        <div className="flex gap-4 items-center w-full lg:w-auto justify-center">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="mb-1 text-success" height="2.25em" width="2.25em" xmlns="http://www.w3.org/2000/svg">
            <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
          </svg>
          <h1 className="font-bold text-3xl">Property Rentals</h1>
        </div>
        <div className="flex justify-center gap-4 self-start sm:flex-row flex-col w-full lg:w-auto">
          <input onChange={(e) => setSearchQuery(e.target.value)} type="search" className="border-2 border-black w-full rounded px-4 py-2 bg-transparent" placeholder="Search"></input>
          <div className="flex gap-4 self-end">
            <button className="border-2 font-bold px-6 py-2 rounded border-black" onClick={handleSearch}>
              Search
            </button>
            <Link to={"/liked"}>
              <button className="border-2 font-bold px-6 py-2 rounded border-black">Liked</button>
            </Link>
          </div>
        </div>
      </div>
      <form action="" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 bg-gray-100 p-6 rounded gap-4 justify-between sm:mx-12 mx-8 mt-8 items-center" onSubmit={handleSearch}>
        <div className="flex flex-col gap-3 ">
          <p className="font-bold">Enter City</p>
          <input
            type="text"
            placeholder="All"
            className="h-8 rounded p-1 px-2 w-full"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold">Date</p>
          <input type="date" className="h-8 rounded p-1 px-2 w-full" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold">Price</p>
          <select type="number" min={0} placeholder="Any" className="h-8 rounded p-1 px-2 w-full" value={price} onChange={(e) => setPrice(e.target.value)}>
            <option value="0-3000">Any</option>
            <option value="0-500">Rs. 0-500</option>
            <option value="500-1000">Rs. 500-1000</option>
            <option value="1000-1500">Rs. 1000-1500</option>
            <option value="1500-2000">Rs. 1500-2000</option>
            <option value="2000-2500">Rs. 2000-2500</option>
            <option value="2500-3000">Rs. 2500-3000</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold">Property Type</p>
          <select type="text" placeholder="Any" className="h-8 rounded p-1 px-2 w-full" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="All">All</option>
            <option value="All house">House</option>
            <option value="All pg">PG</option>
            <option value="All farm-house">Farm House</option>
            <option value="All villa">Villa</option>
            <option value="All hotel">Hotel</option>
            <option value="All oyo">Oyo</option>
          </select>
        </div>
        <button className="bg-blue-500 col-span-1 sm:col-span-2 lg:col-span-1 h-8 px-8 py-1 font-semibold text-white rounded-md self-end" type="submit">
          Filter
        </button>
      </form>

      {filteredData?.length > 0 ? (
        <div className="w-full grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 justify-items-center">
          {filteredData?.map((data, index) => {
            return (
              <div key={index} className="relative w-72 rounded-md flex flex-col items-center justify-between shadow-lg cursor-pointer bg-white  gap-1">
                <img src={data.image} className="w-full h-56 rounded-t-md " />
                <div className="px-2 py-1 w-full">
                  <div className="flex w-full justify-between items-center ">
                    <p className=" w-3/4 content-center grow text-blue-600 text-lg font-bold">₹ {data.price}/day</p>
                    <div onClick={() => handleLike(index)}>{liked?.includes(index) ? <FaHeart color="red" /> : <FaRegHeart />}</div>
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
      ) : (
        <div className="w-full h-full flex justify-center items-center mt-10 text-xl font-bold">No Data Matched</div>
      )}
    </div>
  );
}
