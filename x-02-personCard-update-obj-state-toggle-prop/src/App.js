/* Flip Values example with ternary operator

export default function App() {    
     const [isGoingOut, setisGoingOut] = React.useState(true)
    
     function flipValue(){
         setisGoingOut(isGoingOut => !isGoingOut)        
     }
     
     return (
         <div>
             <h1>Do I feel like going out tonight?</h1>
             <div onClick={flipValue}>
                <h1> {isGoingOut === true ? "Yes": "No"} </h1>
             </div>
         </div>
     )
 } 
*/

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