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

  const [question, setQuestion] = React.useState('')
  const [error, setError] = React.useState()

  const handleChange = event => {
    setQuestion(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if(question.startsWith("Boule magique")){
      setError(null)
      document.getElementsByClassName("number-eight")[0].style.animation="number-rotate 1s forwards";
      document.getElementsByClassName("answer")[0].style.animation="answer-rotate 1s 1s forwards";
      document.getElementById("ball-question").setAttribute("disabled", "true")
    }
    else
      setError(`Votre question doit commencer par 'Boule magique'`)
  }

  return(
    <div style={style}>
      <form className="ball-form" onSubmit={handleSubmit}>
        <label htmlFor="ball-question">Posez votre question ici : (exemple : "Boule magique, vais-je avoir une promotion ?") <br/> 
           Ce doit être une question fermée (on doit pouvoir y répondre par oui ou non) <br/>
           Appuyez sur 'Entrée' pour valider</label>
        <input type="text" id="ball-question"  value={question} onChange={handleChange}></input>
        <div style={{color:'red'}}>{error}</div>
      </form>
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
