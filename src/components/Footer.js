import logo from '../logo.svg';

function Footer(){
    return(
    <footer>
        <p>This website was built with ReactJS</p>
        <img src={logo} alt='logo' style={{width:'100px'}}/>
    </footer>
    )
  }

export default Footer;