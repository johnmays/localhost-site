import React from 'react'
import Logo from './logo'
import './headerBar.css'

export default class HeaderBar extends React.Component {
    render() {
        return (
            <div className = "headerBar">
                <Logo/>
            </div>
        )
    }
}
