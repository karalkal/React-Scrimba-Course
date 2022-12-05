import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Bay",
        lastName: "Huy",
        phone: 88880000,
        email: "example@example.com",
        isFavorite: true
    })

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

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
                    <img
                        src={`./images/${starIcon}`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
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