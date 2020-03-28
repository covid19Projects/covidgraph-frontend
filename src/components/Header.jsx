import React, {Component} from "react";
import logo from "../resources/covid-logo.svg";
import './styles.scss';

class Header extends Component {
     constructor(props){
         super(props);
         Header.getLogo = Header.getLogo.bind(this);
     }

     static getLogo() {
        return (
         <div className="header">
            <img className="logo" src={logo} />
            <p className="name">Covid 19</p>
        </div>)
    }

    render(){
        return (
            <div>
                {Header.getLogo()}
            </div>
        )
    }

}
export default Header;
