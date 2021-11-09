import React from "react";
import { Link } from "gatsby"

//framer-motion & ImagePopper assets
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Header } from "../ImagePopper/Header";
import { Item } from "../ImagePopper/Item";
import { List } from "../ImagePopper/List";

function Store({ match }) {
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

function ImagePopper() {
    return (
        <div className="container">
            <AnimateSharedLayout type="crossfade">
                <Header />
                <Link to={"/:id"} component={Store} />
            </AnimateSharedLayout>
        </div>
    )
}

export default ImagePopper
