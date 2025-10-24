import "../styles/components/header.css"
export function Header(props){
    return(
        <div>
            {/* Leadership screen */}
            <section className="leadership-screen">
                <div className="inner-container">
                <div className="icon-with-name">
                    <img src={props.tag} alt="icon" />
                    <p>{props.tagname}</p>
                </div>
                <h1>{props.tittle}</h1>
                </div>
            </section>
        </div>
    )
}