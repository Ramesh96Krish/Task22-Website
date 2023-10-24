import "./contentSix.css"

const BottomMail = ()=>{
    return(
        <div className="bottom-mail-container">
            <h1 className="bottom-text">Ready to get started? Sign up now!</h1>
            <div className="email-container">
            <input className="email-input" type="email" placeholder="  Email Address" />
            <button className="btn-container">
                Submit
            </button>
            </div>
        </div>
    )
}

export default BottomMail;