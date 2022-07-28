import './App.css';
import {Chorewheel} from './functions/Chore-assigner';

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
      <button onClick={()=>Chorewheel()}>Click to Assign!</button>
      <table>
        <tr>
          <th></th>
          <th>Sunday </th><br></br>
          <th>Monday </th><br></br>
          <th>Tuesday </th><br></br>
          <th>Wednesday </th><br></br>
          <th>Thursday </th><br></br>
          <th>Friday </th><br></br>
          <th>Saturday </th><br></br>
        </tr>
        <tr id="dishes">
          <th>Dishes</th>
          <td id="dishes">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="dishes">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="dishes">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="dishes">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="dishes">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="dishes">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="dishes">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
        </tr>
        <tr id="floors">
          <th>Floors</th>
          <td id="floors">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="floors">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="floors">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="floors">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="floors">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="floors">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="floors">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
        </tr>
        <tr id="bathroom">
          <th>Bathroom</th>
          <td id="bathroom">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="bathroom">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="bathroom">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="bathroom">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="bathroom">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="bathroom">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="bathroom">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
        </tr>
        <tr id="trash">
          <th>Trash/Recycle</th>
          <td id="trash">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="trash">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="trash">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="trash">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="trash">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="trash">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="trash">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
        </tr>
        <tr id="laundry">
          <th>Laundry</th>
          <td id="laundry">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="laundry">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="laundry">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="laundry">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="laundry">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="laundry">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
          <td id="laundry">
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          <span id="">-</span>
          </td><br></br>
        </tr>
      </table>
    </div>
  );
}

export default App;
