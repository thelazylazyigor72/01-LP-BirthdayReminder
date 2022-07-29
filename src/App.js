import React, { useState } from 'react';
//naming nameless array to use it here
import data from './data';
//iimporting list component
import List from './List';

function App() {
  //setting our state value, as initial - array w/ data
  const [people,setPeople] = useState(data);
  //in h3 we using state variable w/o .this - just reminder
  //then we callin for List component and passing dataArray as props
  //w/ button we just makin anonym function on click event that will make people value - [] (empty array)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>
          Clear all
        </button>
      </section>
    </main>
  );
}
//so when we click Clear All - we calling setPeople then React know dat he shoul rerender App w/ new value of people state variable
export default App;
