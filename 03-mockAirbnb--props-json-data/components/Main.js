import React from "react";
import Card from "./Card";
const activities = require("../data/data.json")

/*
export default [
    {},
    {}
import whatever from whereverItIsLocated
*/


export default function Main() {
    // console.log(activities)
    return (
        <section id="activities--panel">

            {activities.map(
                item =>
                    <Card key={item.id} item={item} />
            )}

        </section>
    )
}