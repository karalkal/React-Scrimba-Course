import React from "react"
import Star from "./Star"

/* 
To modify state from a child component we need to pass the function as prop to it. See line 33. 
Then we render actual html element with onClick = [the function we have passed]
*/

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Bay",
        lastName: "Huy",
        phone: 88880000,
        email: "example@example.com",
        isFavorite: false
    })


    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                phone: prevContact.phone + 1,
                isFavorite: !prevContact.isFavorite     // spread whole object, then overwrite property
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}