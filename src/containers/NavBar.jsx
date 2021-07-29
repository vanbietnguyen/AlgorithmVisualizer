import React, { Component } from 'react';
import styles from '../styles.css';

class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };


    }
    
    componentDidMount() {

    }


       

    render() {

      return (
        <header>

        <nav>
          <ul className='navLinks'>
            <li><img id="icon1" src="https://multidoge.org/images/MultiDoge.png" alt=""/></li>
            <li>Home</li>
            <li>Docs</li>
            <li>Examples</li>
            <li>Icons</li>
            <li>Themes</li>
            <li>Blog</li>
          </ul>
        </nav>
        
      </header>
		
        
      );
    }
  
  }



  export default NavBar;

