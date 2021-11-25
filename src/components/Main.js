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
    
    function handleClickYes(){
      document.getElementsByClassName("first-question")[0].style.display='none'
      document.getElementsByClassName("ball-form")[0].style.display='block'
    }
  
    function handleClickNo(){
        document.getElementsByClassName("first-question")[0].style.display='none'
      document.getElementsByClassName("noquestion-container")[0].style.display='block'
    }
  
    function handleGoBack(){
        document.getElementsByClassName("noquestion-container")[0].style.display='none'
        document.getElementsByClassName("first-question")[0].style.display='block'
    }

    const[ballAnswer, setBallAnswer] = React.useState('');
    const[askedQuestion, setAskedQuestion] = React.useState('')

    function showQuestion(question){
        setAskedQuestion(question)
    }

    function showAnswer(){
        setBallAnswer(possibleAnswers[getRandomNumber(0, possibleAnswers.length-1)])
        document.getElementsByClassName("number-eight")[0].style.animation="number-rotate 1s 1s forwards";
        document.getElementsByClassName("answer")[0].style.animation="answer-rotate 1s 2s forwards";
    }
  

    return(
      <main>
        <FirstQuestion yesButton={handleClickYes} noButton= {handleClickNo}></FirstQuestion>
        <SecondQuestion showAnswer={showAnswer} rememberQuestion={showQuestion}></SecondQuestion>
        <MagicBall yourQuestion={askedQuestion} answer={ballAnswer}></MagicBall>
        <NoQuestion goBack={handleGoBack}></NoQuestion>
      </main>
    )
  }
  
  function FirstQuestion({yesButton, noButton}){
    return(
      <div className="first-question">
          <h2>Vous avez une question, non ?</h2>
          <button onClick={yesButton}>Oui</button>
          <button onClick={noButton}>Non</button>
      </div>
      )
  }

  function SecondQuestion({showAnswer, rememberQuestion}){
    const [question, setQuestion] = React.useState('')
    const [error, setError] = React.useState()
  
    const handleChange = event => {
      setQuestion(event.target.value)
    }
  
    const handleSubmit = event => {
      event.preventDefault()
      if(question.startsWith("Boule magique")){
        setError(null)
        document.getElementsByClassName("ball-container")[0].style.display='block'
        document.getElementsByClassName("ball-form")[0].style.display='none'
        document.getElementById("ball-question").setAttribute("disabled", "true")
        showAnswer()
        rememberQuestion(question)
      }
      else
        setError(`Votre question doit commencer par 'Boule magique'`)
    }
  
      return(
        <form className="ball-form" style={{display:'none'}}onSubmit={handleSubmit}>
            <label htmlFor="ball-question">Posez votre question ici : <br/>
            (exemple : "Boule magique, vais-je devenir un mega super expert React avec ce Bootcamp ?") <br/> 
            Ce doit être une question fermée (on doit pouvoir y répondre par oui ou non) <br/>
            Appuyez sur 'Entrée' pour valider <br/></label>
            <input type="text" id="ball-question"  value={question} onChange={handleChange}></input>
            <div style={{color:'red'}}>{error}</div>
        </form>
      )
  }
  
  function MagicBall({yourQuestion,answer}){
    return(
      <div className="ball-container" style={{display:'none'}}>
        <p className='asked-question'>Votre question : "{yourQuestion}"</p>
        <div className="magic-ball" >
            <div className="answer">{answer}</div>
            <div className="number-eight">8</div>
        </div>
      </div>
    )
  }
  
  function NoQuestion({goBack}){
    return(
    <div className="noquestion-container" style={{display:'none'}}>
      <p>Ah, bon bah...ok, j'ai rien dit.</p>
      <p className="go-back-link" onClick={goBack}>(Êtes-vous vraiment sûr ?)</p>
    </div>
    )
  }

  
  export default Main;