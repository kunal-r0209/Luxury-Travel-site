import './Navbar.css'
import { MenuItems } from './MenuItems'
import { Component } from 'react'



class Navbar extends Component {

    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return (
            <nav className="navbar-Items">
                <h1 className="navbar-Logo">
                   Luxury Trip
                </h1>
                <div className="menu-Icons" onClick={this.handleClick}>
                    <i class={this.state.clicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>

                </div>


                <ul className={this.state.clicked ? 'navbar-Menu' : 'navbar-Menu active'}>
                    {
                        MenuItems.map((items, index) => {
                            return (
                                <li key={index}>
                                    <a className={items.cName} href={items.url}>
                                        <i className={items.icon}></i>{items.title}
                                    </a>
                                </li>
                            )

                        })
                    }
                    <button>Sign Up</button>

                </ul>
            </nav>
        )
    }
}


export default Navbar