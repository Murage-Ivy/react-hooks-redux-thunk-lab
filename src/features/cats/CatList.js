// write your CatList component here
import React from "react";

function CatList({ catPics }) {
  const catList = catPics.map((catPic) => (
    <img src={catPic.url} alt="cat" key={catPic.id} />
  ));
  return <div>
    {catList}
  </div>;
}

export default CatList;
