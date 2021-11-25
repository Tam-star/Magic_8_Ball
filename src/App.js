import logo from './logo.svg';

function App() {
  return (
    <>
      <Header></Header>
      <Question></Question>
      <MagicBall></MagicBall>
      <Form></Form>
      <Footer></Footer>
    </>
  );
}


function Header(){
  return(
  <header>
    <div className="header-first-part">
      <img src={logo} alt='logo' style={{width:'100px'}}/>
      <h1>Welcome to my first React website</h1>
    </div>
    <h2>Ask your question</h2>
  </header>
  );
}

function Question(){
  return(
    <div className="question">
        <h2>Vous avez une question, non ?</h2>
        <button>Oui</button>
        <button>Non</button>
    </div>
    )
}

function MagicBall(){
  return(
    <div>
      <div className="magic-ball">
          <div className="answer">Impossible</div>
          <div className="number-eight">8</div>
      </div>
    </div>
  )
}

function Form(){
  return(
    <form>
      <label for="last-name">Votre nom ? </label>
      <input id="last-name"></input>
      <label for="first-name">Votre prénom ? </label>
      <input id="first-name"></input>
      <label for="age">Votre âge ? </label>
      <input id="age"></input>
      <label for="country">Votre pays ? </label>
      <input id="country"></input>
      <label for="email">Votre email ? </label>
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
