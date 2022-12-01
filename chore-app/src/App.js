import './App.css';
import {Chorewheel} from './functions/Chore-assigner';

let weekdays = [
  '',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

let chores = [
  'Dishes',
  'Floors',
  'Bathroom',
  'Laundry',
  'Trash'
]

function App() {
  return (
    <div className="App">
      <button>Click to Assign!</button>
      <table>
        <tr><th></th></tr>
        <tr>     
          {weekdays.map(weekday => 
            <th>{weekday}</th>
          )}
        </tr>
        {chores.map(chore => 
          <tr><th>{chore}</th></tr>)}
      </table>
    </div>
  );
}

export default App;
