import * as React from 'react';

interface IImageDisplayProps {
    images: String[]
}

export default class ImageDisplay extends React.Component<IImageDisplayProps>{
    constructor(props: IImageDisplayProps){
        super(props)
    }

    render(){
        return(
            <div style={{width: "85vw", paddingTop: "3vh", paddingBottom: "3vh", textAlign: "center"}}>
                <img src={"../../config/" + this.props.images[0]} height="500"/>
            </div>
        )
    }
}