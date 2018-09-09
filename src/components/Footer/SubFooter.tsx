import * as React from 'react';
import "./SubFooter.less";

export default class SubFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="sub-footer clearfix">
                <a href="https://github.com/TheExquisite">GitHub</a>
                <a href="https://www.linkedin.com/in/james-clare-26135a159/">LinkedIn</a>
                <a href="https://www.instagram.com/_jamesclare/">Instagram</a>
            </div>
        )
    }
}

