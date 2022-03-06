import {Component} from 'react'
import './Header.css'
import logo from '../../logo.svg'
class Header extends Component{
    render(){
        return(
            <div className='styling'>
              <img src={logo} className='imgStyle' alt='logo'/>
            </div>
        )
    }
}
export default Header