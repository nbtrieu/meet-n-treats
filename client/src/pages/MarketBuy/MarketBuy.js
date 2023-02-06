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
      <div className="market-container page">
        {/* <h3 className="empty-message">There's nothing to buy!</h3>
        <p className="empty-message">
          Would you like to{" "}
          <Link to={`/marketplace/sell`} className="sell-link">
            sell
          </Link>{" "}
          something?
        </p> */}
        <h3 className="empty-message">Check out these pet accessories!</h3>
        <div className="pet-accessories">
          <div className="pet-accessory">
            <h4 className="pet-accessory-title">Pet Carrier</h4>
            <button className="pet-accessory-purchase-button">
              Purchase
            </button>
            <p className="pet-accessory-price">$50.00</p>
            <img
              src="https://m.media-amazon.com/images/I/81eLpE6l3NL.jpg"
              width={500}
              alt="Pet Carrier"
            />
            <p className="pet-accessory-description">
              Perfect for small dogs and cats.
            </p>
          </div>
          <div className="pet-accessory">
            <h4 className="pet-accessory-title">Pet Bed</h4>
            <button className="pet-accessory-purchase-button">
              Purchase
            </button>
            <p className="pet-accessory-price">$100.00</p>
            <img
              src="https://m.media-amazon.com/images/I/61gxx3o19RL.jpg"
              width={500}
              alt="Pet Bed"
            />
            <p className="pet-accessory-description">
              Cozy and comfortable for your furry friend.
            </p>
          </div>
          <div className="pet-accessory">
            <h4 className="pet-accessory-title">Pet Toys</h4>
            <button className="pet-accessory-purchase-button">
              Purchase
            </button>
            <p className="pet-accessory-price">$25.00</p>
            <img
              src="https://m.media-amazon.com/images/I/61F2H16SVrL._AC_.jpg"
              width={500}
              alt="Pet Toys"
            />
            <p className="pet-accessory-description">
              Keep your pet entertained with these fun toys.
            </p>
          </div>
        </div>
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