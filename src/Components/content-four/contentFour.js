import "./contentFour.css"


const ImageFolder = (props)=>{
    const{textList} = props;
    return(
        <div className="image-folder">
            {
                textList.map((textList,index)=>(
                    <div>
                        {textList.no===1?(
                            <div className="img-text-row">
                                <div className="text-container">
                                    <h1>{textList.heading}</h1>
                                    <p>{textList.details}</p>
                                </div>
                                <div className="img-container">
                                    <img className="img-big" src={textList.way} alt="phone" />
                                </div>
                            </div>
                        ):(
                            (
                                <div className="img-text-row">
                                    <div className="img-container">
                                        <img className="img-big" src={textList.way} alt="code" />
                                    </div>
                                    <div className="text-container">
                                        <h1>{textList.heading}</h1>
                                        <p>{textList.details}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default ImageFolder;