import React from 'react';


const possibleAnswers = ["Essaye plus tard", "Essaye encore", "Pas d'avis", "C'est ton destin",
"Le sort en est jeté", "Une chance sur deux", "Repose ta question", "D'après moi oui", 
"C'est certain", "Oui absolument", "Tu peux compter dessus", "Sans aucun doute", "Très probable", 
"Oui", "C'est bien parti", "C'est non", "Peu probable", "Faut pas rêver", "N'y compte pas",
"Impossible"]

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random()*(max-min+1)) + min;
}

function Main(){
    const[visibleQuestion, setVisibleQuestion] = React.useState({display:'block'});
    const[visibleMagicBall, setVisibleMagicBall] = React.useState({display:'none', backgroundColor:'red'});
  
    console.log(visibleMagicBall);
  
    function handleClickYes(){
      setVisibleQuestion({display:'none'})
      setVisibleMagicBall({display:'block'})
    }
  
    function handleClickNo(){
      setVisibleQuestion({display:'none'})
      document.getElementsByClassName("noquestion-container")[0].style.display='block'
    }
  
    return(
      <main>
        <Question yesButton={handleClickYes} noButton= {handleClickNo} style={visibleQuestion}></Question>
        <MagicBall style={visibleMagicBall}></MagicBall>
        <NoQuestion></NoQuestion>
      </main>
    )
  }
  
  function Question({yesButton, noButton, style}){
    return(
      <div className="question" style={style}>
          <h2>Vous avez une question, non ?</h2>
          <button onClick={yesButton}>Oui</button>
          <button onClick={noButton}>Non</button>
      </div>
      )
  }
  
  function MagicBall({style}){
  
    const [question, setQuestion] = React.useState('')
    const [error, setError] = React.useState()
    const answer = possibleAnswers[getRandomNumber(0, possibleAnswers.length-1)]
  
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
      <div className="ball-container"style={style}>
        <form className="ball-form" onSubmit={handleSubmit}>
          <label htmlFor="ball-question">Posez votre question ici : <br/>
             (exemple : "Boule magique, vais-je devenir un mega super expert React avec ce Bootcamp ?") <br/> 
             Ce doit être une question fermée (on doit pouvoir y répondre par oui ou non) <br/>
             Appuyez sur 'Entrée' pour valider</label>
          <input type="text" id="ball-question"  value={question} onChange={handleChange}></input>
          <div style={{color:'red'}}>{error}</div>
        </form>
        <div className="magic-ball" >
            <div className="answer">{answer}</div>
            <div className="number-eight">8</div>
        </div>
      </div>
    )
  }
  
  function NoQuestion(){
    return(
    <div className="noquestion-container" style={{display:'none'}}>
      <p>Ah, bon bah...ok, j'ai rien dit.</p>
    </div>
    )
  }

  
  export default Main;