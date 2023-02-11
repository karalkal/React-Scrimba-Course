import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    console.log(formData)

    /* NB using computed properties -> whatever 'name' is the value of relevant key will be overwritten,
    e.g.<input name="firstName"> will overwrite firstName in our formData object
    MUST match a property name from the formData state, then we get access to event.target.name:
    
    function handleChange(event) {
       setFormData(prevFormData => {
           return {
               ...prevFormData,
               [event.target.name]: event.target.value
           }
       })
   }
   */

    function handleChange(event) {
        console.log(event.target)

        const { name, value, type, checked } = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
                // spread object before changing state
                // then whatever we get as name from event target will become our key to be updated
                // (without square brackets [name] a new key "name" is created - not what we need here, hence this syntax - computed prop)
                // if the type is checkbox, object value is set to "checked" (see checkbox section for more info)
                // else it updates the value for the corresponding key with value from form
                // if the form does not have checkboxes, we can just use [event.target.name]: event.target.value to update state object - NOT GOOD PRACTICE
                // or if destructured beforehand, i.e. const {name, value} return {...prevFormData, [name]: value}
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Submitted form", formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"            // it MUST match a property name from the formData state, then we get access to event.target.name
                value={formData.firstName}  //  React gets control of state/values, not the html. onChange runs setFormData and sets the value of the input
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="Comments"      // in React textarea does not have closing tag </textarea>
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <br />

            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            {/* htmlFor is just the "for" html attribute which corresponds to the !!!ID!!! of the input*/}
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    // onChnage submits value "unemployed", then "checked" gets a truthy value, ie. formData.employment === "unemployed" is true 
                    // The others below get falsy - formData.employment === "employed" or "part-time" are false
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Select --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            {/* Don't forget onSumbit = {callbackfunction} */}
            <button>Submit</button>
        </form>
    )
}
