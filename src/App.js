import logo from './logo.svg';
import React from 'react';

let myElement = [Question, MagicBall, Form]
let numberElement=0;

function nextElement(){
  console.log(numberElement)
  numberElement+=1;
}

function appearMagiBall(){

}

function App() {
 
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}




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



function Main(){
  // const [mainElement, setMainElement] = React.useState(myElement[numberElement]);
  // function changeMainElement(){
  //   setMainElement(myElement[numberElement])
  // }
  const[visibleQuestion, setVisibleQuestion] = React.useState({display:'block'});
  const[visibleMagicBall, setVisibleMagicBall] = React.useState({display:'none', backgroundColor:'red'});

  console.log(visibleMagicBall);

  function handleClick(){
    setVisibleQuestion({display:'none'})
    setVisibleMagicBall({display:'block'})
  }

  return(
    <main>
      <Question buttonFct={handleClick} style={visibleQuestion}></Question>
      <MagicBall style={visibleMagicBall}></MagicBall>
    </main>
  )
}

function Question({buttonFct, style}){
  return(
    <div className="question" style={style}>
        <h2>Vous avez une question, non ?</h2>
        <button onClick={buttonFct}>Oui</button>
        <button>Non</button>
    </div>
    )
}

function MagicBall({style}){
  return(
    <div style={style}>
      <div className="magic-ball" >
          <div className="answer">Impossible</div>
          <div className="number-eight">8</div>
      </div>
    </div>
  )
}

function Form(){
  return(
    <form>
      <label htmlFor="last-name">Votre nom ? </label>
      <input id="last-name"></input>
      <label htmlFor="first-name">Votre prénom ? </label>
      <input id="first-name"></input>
      <label htmlFor="age">Votre âge ? </label>
      <input id="age"></input>
      <label htmlFor="country">Votre pays ? </label>
      <input id="country"></input>
      <label htmlFor="email">Votre email ? </label>
      <input id="email"></input>
    </form>
    );
}

function Footer(){
  return(
  <footer>
    <p>Hello! I'm the footer!</p>
  </footer>
  )
}

export default App;
