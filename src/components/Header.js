import logo from '../logo.svg';

function Header(){
    return(
    <header>
      <div className="header-first-part">
        <img src={logo} alt='logo' style={{width:'100px'}}/>
        <h1>Magic-8-Ball</h1>
        <img src={logo} alt='logo' style={{width:'100px'}}/>
      </div>
      <h2>Ask your question...</h2>
    </header>
    );
  }


  export default Header;