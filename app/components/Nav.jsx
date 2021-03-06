var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return(
            <div className="top-bar">
                <div className= "top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </IndexLink>
                        </li>      
                        <li>
                            <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </IndexLink>
                        </li>
                    </ul>
                </div>

                <div className= "top-bar-right">
                    <ul className="menu">
                        <li>
                            <input type="search" placeholder="Search Weather"></input>
                        </li>
                        <li>
                            <input type="submit" className="button" value="Get Weather"/>
                        </li>
                    </ul>
                    
                </div>
            </div>     
        );
}

module.exports = Nav;

