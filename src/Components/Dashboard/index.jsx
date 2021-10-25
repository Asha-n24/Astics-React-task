import React from "react";
import ItemList from "./ItemList";
import AddItem from "./AddItem";

function ItemDetails(props) {
  const {
    match: {
      params: { pageName },
    },
  } = props;


  switch (pageName) {
    case "list":
      return <ItemList props={props} />;
    case "add":
      return <AddItem props={props} formType={"add"} history={props.history} />;
    case "update":
      return <AddItem editstate={props.location.editstate} history={props.history} formType={"edit"} props={props} />;
    default:
      return <ItemList props={props} />;
  }
}

export default ItemDetails;
