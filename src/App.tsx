import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

//import page configuration
import siteConfig from "../config/site.config";
    
// Styles
import "./App.less";
import "./Skeleton.less";
import "./variables.less";

// Page Elements
import Navbar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Spacer from "./components/spacer"
import PageNotFound from "./components/pageNotFound";
import ImageDisplay from './components/ImageDisplay';

export default class App extends React.Component<{}, { html: String|undefined }> {

    constructor(props) {
        super(props);
    }
    
    //Take the input config and return the respective react components to form the page content.
    assembleContent(configComps: any){
        return (
            class assembledContent extends React.Component {
                render() {
                    return (
                        configComps.map(element => {
                            //When adding a new component, add a new switch case
                            switch(element.type) {
                                case "markdownDoc":
                                    return<Content path={element.config}/> 
                                case "jumbo":
                                    return <Jumbo/>
                                case "spacer":
                                    return <Spacer height={element.config}/>
                                case "images":
                                    return <ImageDisplay images={element.config}/>
                            }
                        })
                    )
                }
            }
        )
    }

    render(){
        return(
            <div>
                <Router>
                    <div style={{display: "inline-flex"}}>
                        <Navbar/>
                        <div style={{display: "block", overflowY: "scroll", height: "100%", width: "85vw"}}>
                            <Switch>
                                {siteConfig.map(config => {
                                    //create routes and their respective components from the config set out in the siteConfig file
                                    return(<Route path={config.path} component={this.assembleContent(config.pageElements)}/>)
                                })}
                                <Route exact path="/" render={() => (<Redirect to="/home" />)} />
                                <Route component={PageNotFound}/>
                            </Switch>
                            <Footer />
                        </div>
                    </div>
                </Router>
                
            </div>
        )
    }
}