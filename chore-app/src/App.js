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
      <table>
        {weekdays.map((i) => {
          console.log(weekdays[i])
          <div>
            <th>{weekdays[i]}</th>
          </div>
        })}
        {/* <tr>
          <th></th>
          <th>Sunday</th><br></br>
          <th>Monday</th><br></br>
          <th>Tuesday</th><br></br>
          <th>Wednesday</th><br></br>
          <th>Thursday</th><br></br>
          <th>Friday</th><br></br>
          <th>Saturday</th><br></br>
        </tr> */}
        <tr>
          <th>Dishes</th>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
        </tr>
        <tr>
          <th>Floors</th>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br> 
        </tr>
        <tr>
          <th>Bathroom</th>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br> 
        </tr>
        <tr>
          <th>Trash/Recycle </th>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br> 
        </tr>
        <tr>
          <th>Shared Laundry</th>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br>
          <td>N/A</td><br></br> 
        </tr>
      </table>
    </div>
  );
}

export default App;
