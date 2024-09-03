import HomeRent from "./components/HomeRent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LikedPage from "./components/LikedPage";
import { useEffect, useState } from "react";

export default function App() {
  const [liked, setLiked] = useState([]);

  const handleLike = (index) => {
    if (liked?.includes(index)) {
      setLiked((prev) => {
        const filteredArray = prev.filter((ele) => ele !== index);
        return filteredArray;
      });
    } else {
      setLiked([...liked, index]);
    }
  };

  useEffect(() => {
    if (liked?.length > 0) localStorage.setItem("likedHouse", JSON.stringify(liked));
  }, [liked]);

  useEffect(() => {
    setLiked(JSON.parse(localStorage.getItem("likedHouse")));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRent setLiked={setLiked} liked={liked} handleLike={handleLike} />} />
        <Route path="/liked" element={<LikedPage liked={liked} handleLike={handleLike} />} />
      </Routes>
    </BrowserRouter>
  );
}
