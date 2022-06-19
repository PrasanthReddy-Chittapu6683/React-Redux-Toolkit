import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ORDERED, RESETSTOCK } from "./cakeSlice";
import { selectNumOfCakeCount } from "../../app/storeSelectors";

export const CakeView = () => {
  const numOfCakes = useSelector(selectNumOfCakeCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        Number of cakes - {numOfCakes}
      </h2>
      <button onClick={() => dispatch(ORDERED(1))}>Order 1 Cake</button>
      <button onClick={() => dispatch(RESETSTOCK(5))}>
        Restock Cakes by 5
      </button>
    </div>
  );
};
