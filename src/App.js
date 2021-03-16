import "./App.css";
import TableUsers from "./ReduxComponent/Users/ListUsers";

function App(props) {
  console.log('zzz', props)
  return (
    <div className="App">
      <TableUsers />
    </div>
  );
}

export default App;
