import React, {Component} from "react";
import logo from "../../resources/covid-logo.svg";
import 'react-tabs/style/react-tabs.css';
import './styles.scss';
import HeaderTabs from "./HeaderTabs.jsx";

class Header extends Component {
     constructor(props){
         super(props);
         Header.getLogo = Header.getLogo.bind(this);
     }

     static getLogo() {
        return (
         <div className="header-1">
            <img className="logo" src={logo} />
            <p className="name">Covid 19</p>
        </div>)
    }

    render(){
        return (
            <div className="header">
                {Header.getLogo()}
                <HeaderTabs />
            </div>
        )
    }

}
export default Header;
