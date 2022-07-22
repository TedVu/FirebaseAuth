import "./App.css";

import { signIn } from "./firebase-auth";

function App() {
  return (
    <div className="App">
      <button onClick={signIn}>Sign in with google</button>
    </div>
  );
}

export default App;
