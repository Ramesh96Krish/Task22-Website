import "./contentThree.css"

const BootIcons = (props)=>{

    const {iconList} = props;

    return(
        <div className="boot-container">
            {
                iconList.map((value,index)=>(
                    <div className="icons-container">
                            <img src={value.iconurl} alt="icons list"/>             
                            <h1>{value.title}</h1>
                            <p>{value.description}</p>
                    </div>))
            }
        </div>
    )
}
export default BootIcons;
