import * as React from 'react';
import "./Jumbo.less";

export default class Jumbo extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="jumbo half">
                <div className="container">
                    <div className="six columns">
                        <h1 className="title">James Clare</h1>
                        <hr />
                        <p>Software Development Projects</p>
                    </div>
                    <div className="six columns">
                            
                    </div>
                </div>
            </div>
        )
    }
}