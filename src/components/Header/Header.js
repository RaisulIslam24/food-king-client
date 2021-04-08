import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="container">
            <nav>
                <div className="d-flex justify-content-between m-3">
                    <div>
                        <Link className="mainHeader" to="/home"><strong>FOOD KING</strong></Link>
                    </div>
                    <div>
                        <Link><FontAwesomeIcon className="icon mr-3" icon={faShoppingCart} /></Link>
                        <Link className="header" to="/login">
                            {loggedInUser.displayName || loggedInUser.displayName || loggedInUser.name || <button className="btn btn-danger rounded-pill">Login</button>}
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;