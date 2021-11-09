import React from "react";
import { AnimatePresence } from "framer-motion";
import { Item } from "../components/ImagePopper/Item";
import { List } from "../components/ImagePopper/List";

function ImagePopper({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default ImagePopper