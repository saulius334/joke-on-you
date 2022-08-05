import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((response) => response.json())
      .then((res) => {
        setJokes(res.jokes);
        setLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div className="App">Loading, Please wait...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes for YOU !</h1>
        <div className="container">
          {jokes.map((a) =>
            a.joke ? (
              <div className="joke" key={a.id}>
                {a.joke}
              </div>
            ) : (
              <div className="joke" key={a.id}>
                {a.setup}
                <br />
                <br />
                {a.delivery}
              </div>
            )
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
