
import React from 'react';
import "./NavBar.css"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light navstyle">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">Astics</a>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                        <div class="navbar-nav mr-auto mt-2 mt-lg-0 logstyle">
                            {localStorage.getItem("userName") ? <div class="nav-item cursor-pointer ">{localStorage.getItem("userName")}</div> :
                                <div class="nav-item cursor-pointer ">Login</div>
                            }
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
