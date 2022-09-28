import * as React from 'react';
import './style.css';
import {useState} from "react";
import Person from './Person';

// npx create-ract-app . --template typescript

export default function App() {

  // const [value, setValue] = useState<number>(0)
  const [name, setName] = useState<string>("")
  return (
    <div>
      <Person
        name="Nikhil"
        email="nikhil@gmail.com"
        age={25}
        isMarried={false}
        friends={['jake', 'jessica', 'hahah']}
        country="india"
      />
    </div>
  );
}
