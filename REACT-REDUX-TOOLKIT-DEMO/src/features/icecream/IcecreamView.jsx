import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ORDERED, RESETSTOCK } from "./icecreamSlice";
import { selectNumOfIceCreamsCount } from "../../app/storeSelectors";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector(selectNumOfIceCreamsCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        Number of Icecreams - {numOfIcecreams}
      </h2>
      <button onClick={() => dispatch(ORDERED(1))}>Order 1 Icecream</button>
      <button onClick={() => dispatch(RESETSTOCK(5))}>
        Restock Icecreams by 5
      </button>
      {/* <button onClick={() => dispatch(ORDERED())}>Order Icecream</button>
      <button onClick={() => dispatch(RESETSTOCK(5))}>Restock Icecreams</button> */}
    </div>
  );
};
