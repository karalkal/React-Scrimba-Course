export default function Card(props) {
    console.log(props)
    return (
        < div className="card">
            <div className="card--image--container">
                <img className="card--image" src={props.img} alt={`photo from ${props.name}`} />
            </div>
            <div className="card--info">
                <span className="card--location">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{props.region}</span>
                    <a href={props.locationURL}>view on Google Maps</a>
                </span>
                <p className="card--name"> {props.name} </p>
                <p className="card--period"> {props.period.from} - {props.period.to} </p>
                <p className="card--description"> {props.description} </p>



            </div>
        </div >
    )
}