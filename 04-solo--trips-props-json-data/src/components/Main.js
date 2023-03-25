import callItWhateverYouWant from "../data.js"
import Card from "./Card.js"

export default function Main() {
    // console.log(callItWhateverYouWant)
    // here we spread the object props and send them like separate arguments to card
    // alternatively we can send item = {item} and destructure props there
    return (
        <div id="cards--container">
            {callItWhateverYouWant
                .map((item) =>
                    <Card
                        key={item.id}
                        {...item}
                    />
                )}



        </div>

    )
}