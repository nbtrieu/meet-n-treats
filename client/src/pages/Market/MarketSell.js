import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_ITEMS_TO_SELL } from "../../utils/queries";
import { CREATE_ITEM_TO_SELL, REMOVE_ITEM } from "../../utils/mutations";

import { Link } from "react-router-dom";

import PostCard from "../../components/PostCard/PostCard";

import CloudinaryUploadWidget from "../../components/Cloudinary/UploadWidget";
import Auth from "../../utils/auth";

function MarketSell() {
  const [itemImageURL, setItemImageURL] = useState("");
  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState(0.0);

  const { loadingItems, data: itemData } = useQuery(QUERY_ITEMS_TO_SELL, {
    variables: {
      ownerID: Auth.getUser().data._id,
    },
  });

  let items = itemData?.items_to_sell;

  const [CreateItem] = useMutation(CREATE_ITEM_TO_SELL, {
    refetchQueries: [{ query: QUERY_ITEMS_TO_SELL }, "items_to_sell"],
  });
  const [RemoveItem] = useMutation(REMOVE_ITEM, {
    refetchQueries: [{ query: QUERY_ITEMS_TO_SELL }, "items_to_sell"],
  });

  const handleCreateItem = (e) => {
    e.preventDefault();
    CreateItem({
      variables: {
        owner: Auth.getUser().data._id,
        title: itemTitle,
        description: itemDescription,
        price: itemPrice,
        photo: itemImageURL,
      },
      onCompleted: () => {
        console.log("completed");
      },
      onError: (error) => {
        console.log(JSON.stringify(error, 2, null));
      },
    });
  };

  const handleRemove = (e, itemID) => {
    e.preventDefault();
    RemoveItem({
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

  if (items == null) {
    items = [];
  }

  return (
    <div>
      <form>
        <input
          name="itemTitle"
          placeholder="Enter item title"
          values={itemTitle}
          onChange={(e) => setItemTitle(e.target.value)}
          type="text"
        />
        <textarea
          name="itemDescription"
          placeholder="Enter item description"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        />
        <input
          name="itemPrice"
          placeholder="Enter price"
          values={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          type="number"
        />
        <br />
        <CloudinaryUploadWidget setPostImageURL={setItemImageURL} />
        <br />
        <button onClick={(e) => handleCreateItem(e)}>Submit</button>
      </form>

      <h4>Items You Are Selling</h4>
      {items.map((item) => {
        let price = item?.itemPrice;
        if (price != null && !price.includes(".")) {
          price = "$" + price + ".00";
        }
        return (
          <div key={item._id}>
            <h4>{item.itemTitle}</h4>
            <button onClick={(e) => handleRemove(e, item._id)}>Remove</button>
            <p>{price}</p>
            {/* Render uploaded image from Cloudinary: */}
            <img id="uploadedimage" src={item.itemPhoto} width={500}></img>
            {/* Render author's name: */}
            <p>
              {item.itemDescription}
              <br />
              <span className="username">STATUS: {item.itemStatus}</span>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default MarketSell;
