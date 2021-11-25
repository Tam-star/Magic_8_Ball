// import logo from '../logo.svg';
import ballLogo from '../images/magic-8-ball-192.png';


function Header(){
    return(
    <header>
      <div className="header-first-part">
        <img src={ballLogo} alt='logo' style={{width:'80px'}}/>
        <h1>Magic-8-Ball</h1>
        <img src={ballLogo} alt='logo' style={{width:'80px'}}/>
      </div>
      <h2>Ask your question...</h2>
    </header>
    );
  }


  export default Header;