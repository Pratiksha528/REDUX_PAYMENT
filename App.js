import './App.css';
import AddFriend from './components/AddFriend';
import Friends from './components/Friends';
import Send from './components/Send';
function App() {
  return (
    <div className="App">

      <h2>G-Pay Gateway</h2>
   
   <AddFriend/>
<br />
<Friends />
<br />
<hr />
<Send/>

    </div>
  );
}

export default App;
