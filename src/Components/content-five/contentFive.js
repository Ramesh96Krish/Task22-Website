import "./contentFive.css"

const Profiles = (props)=>{
    const {profiles} = props;
    return(
        <div className="profile-folder">
            <div className="profile-heading">
                <h1>what people are saying...</h1>
            </div>
            <div className="profile-container">
            {
                profiles.map((profiles,index)=>(
                     <div className="profile-row">
                        <div className="profile-img">
                            <img className="prof-img" src={profiles.path} alt="person" />
                        </div>
                        <div className="prof-details">
                            <h1>{profiles.name}</h1>
                            <p className="p-prof">"{profiles.review}"</p>
                        </div>
                     </div>
                ))
            }
            </div>
        </div>
    )
}

export default Profiles;