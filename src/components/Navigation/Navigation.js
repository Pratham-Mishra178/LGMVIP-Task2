import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';

const Navigation = ({onButtonSubmit}) => {

            return(
                //used to provide the button funtionality and displays the logo
                <nav className='navbar'>
                    <a href="index.html">
                    <h3 className="logo">LetsGrowMore</h3>
                    </a>
                    <div className='nav-links'>
                        <Button variant="contained" onClick={onButtonSubmit} color="secondary" class="but">
                            Get Clients
                        </Button>
                    </div>
                </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;
