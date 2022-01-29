import React from 'react';
import { useState } from 'react';
import Output from './Output';


function Greeting() {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    }

    return <div>
      <h1>Hello there</h1>
      {!changedText && <Output>Its good to see you</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changedTextHandler}>Change Text!!!</button>
    </div>;
}

export default Greeting;
