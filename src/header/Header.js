import React, { Component } from 'react'
import '../static/Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.title = 'Page';
        this.menu = ['Login', 'Add new task', 'All tasks'];
    }

    render() {
        return (
            <div className="page-header">
                <MenuList menu={this.menu} />
            </div>
        );
    }
}

function MenuList(props) {
    return (
        <ul>
            {props.menu.map((item) => 
                <li key={item}><a
                        href={item.toLowerCase().replace(/ /g, '')}
                        id={item}>
                {item}</a></li>
            )}
        </ul>
    );
}

export default Header;