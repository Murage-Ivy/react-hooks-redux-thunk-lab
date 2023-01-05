import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./catsSlice";

function Cats() {
  const dispatch = useDispatch();
  const catpics = useSelector((state) => state.entities);
  const status = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  console.log(catpics);

  return (
    <div>
      <h1> CatBook </h1>
      {status === "Loading" ? <h2>Loading...</h2> : null}
      <CatList catPics={catpics} />
    </div>
  );
}

export default Cats;
