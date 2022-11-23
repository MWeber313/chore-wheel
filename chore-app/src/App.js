import './App.css';

let weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]


function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th><p><span id="jason">J</span>ason</p></th><br></br>
          <th>-</th><br></br>
          <th><p><span id="darian">D</span>arian</p></th><br></br>
          <th><p><span id="amanda">A</span>manda</p></th><br></br>
          <th><p><span id="miles">M</span>iles</p></th><br></br>
          <th><p><span id="nat">N</span>atalie</p></th><br></br>
        </tr>
      </table>
      <button>Click to Assign!</button>
      {weekdays.map((i) => {
          console.log(weekdays[i])
          <div>
            <table>
            <tr>
            <th>{weekdays[i]}</th>
            </tr>
          </table>
          </div>
        })}  
    </div>
  );
}

export default App;
