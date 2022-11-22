import './App.css';

let assignment_names = {
  0: 'Jason',
  1: 'Jason',
  2: 'Darian',
  3: 'Darian',
  4: 'Amanda',
  5: 'Amanda',
  6: 'Miles',
  7: 'Miles',
  8: 'Natalie',
  9: 'Natalie',
}


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
        <tr>
          <th></th>
          <th>Sunday</th><br></br>
          <th>Monday</th><br></br>
          <th>Tuesday</th><br></br>
          <th>Wednesday</th><br></br>
          <th>Thursday</th><br></br>
          <th>Friday</th><br></br>
          <th>Saturday</th><br></br>
        </tr>
        <tr>
          <th>Dishes</th>
          {assignment_names.map((assign) => {
            <div>
              <td>{assign}</td>
            </div>
          })}
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
