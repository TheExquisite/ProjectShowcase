import * as React from 'react';
import "./Navbar.less";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import siteConfig from "../../config/site.config";

export default class        Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="nav">
                <div className="container">
                    <div className="left">
                        <span className="navTitle">James Clare - Projects</span>
                    </div>
                    <div className="right">
                        <ul>
                            {siteConfig.map(config => {return<li><Link to={config.path}>{config.title.toString()}</Link></li>})}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

{/* <li><a href="#">Home</a></li>
<li><a href="#">Teams</a>
    <ul>
        <li><a href="">Mechanical</a></li>
        <li><a href="">Electrical</a></li>
        <li><a href="">Software</a></li>
    </ul>
</li>
<li><a href="">Contact</a></li>
 {siteConfig.map(config =>{<li><Link to="/test">test</Link></li>}
*/}