import { useQuery, useMutation } from "@apollo/client";
import Login from "../../components/Login";

import { QUERY_ITEMS_TO_BUY } from "../../utils/queries";
import { PURCHASE_ITEM } from "../../utils/mutations";

import { Link } from "react-router-dom";

import React from "react";

import PostCard from "../../components/PostCard/PostCard";

import Auth from "../../utils/auth";

function MarketBuy() {
  const { loadingItems, error, data } = useQuery(QUERY_ITEMS_TO_BUY, {
    variables: {
      ownerID: Auth.getUser().data._id,
    },
  });
  const [PurchaseItem] = useMutation(PURCHASE_ITEM, {
    refetchQueries: [{ query: QUERY_ITEMS_TO_BUY }, "items_to_buy"],
  });
  console.log(JSON.stringify(error, 2, null));
  const items = data?.items_to_buy;

  const handlePurchase = (e, itemID) => {
    e.preventDefault();
    PurchaseItem({
      variables: {
        itemID,
      },
      onCompleted: () => {
        console.log("completed");
      },
      onError: (error) => {
        console.log(JSON.stringify(error, 2, null));
      },
    });
  };
  if (items == null || items.length === 0) {
    return (
      <div className="username page">
        There's nothing to buy! would you like to{" "}
        <Link to={`/marketplace/sell`} style={{ textDecoration: "none" }}>
          <p className="light-text">Sell</p>
        </Link>{" "}
        something?
      </div>
    );
  }

  return (
    <div>
      {items.map((item) => {
        let price = item?.itemPrice;
        if (price != null && !price.includes(".")) {
          price = "$" + price + ".00";
        }
        return (
          <div key={item._id}>
            <h4>{item.itemTitle}</h4>
            <button onClick={(e) => handlePurchase(e, item._id)}>
              Purchase
            </button>
            <p>{price}</p>
            {/* Render uploaded image from Cloudinary: */}
            <img id="uploadedimage" src={item.itemPhoto} width={500}></img>
            {/* Render author's name: */}
            <p>
              {item.itemDescription}
              <br />
              <span className="username">Sold by: {item.itemOwner.name}</span>
            </p>
          </div>
        );
      })}
      <hr />
    </div>
  );
}

export default MarketBuy;
