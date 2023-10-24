import "./contentTwo.css"


const LargeComponent = ()=>{
    return(
        <div className="large-container">
            <h1 className="random-text">Generate more leads<br/> with a professional<br/> landing page!</h1>
            <div className="email-container">
            <input className="email-input" type="email" placeholder="  Email Address" />
            <button className="btn-container">
                Submit
            </button>
            </div>

        </div>
    )
}
export default LargeComponent;