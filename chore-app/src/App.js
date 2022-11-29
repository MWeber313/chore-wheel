import './App.css';
import {Chorewheel} from './functions/Chore-assigner';

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
      <button>Click to Assign!</button>
      {/* {weekdays.map((i) => {
        return (
          console.log(weekdays[i])
          <div>
            <table>
            <tr>
            <th>{weekdays[i]}</th>
            </tr>
          </table>
          </div>
        )
        })}  
     */}
     <table>
     <tr>     
     {weekdays.map(weekday => 
       <th>{weekday}</th>
      )}
      </tr>
     </table>
    </div>
  );
}

export default App;
