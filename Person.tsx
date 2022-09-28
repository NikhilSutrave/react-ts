import React from 'react';

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends:string[];
  country:string;
}

const Person = (props: Props) => {
  const { name, age, email, friends, isMarried,country } = props;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Age : {age} </h1>
      <h1>This person {isMarried ? 'is' : 'is not'} Married </h1>
      {friends.map((friend: string) => (
        <h1>{friend}</h1>
      ))}
      <h2>country:{country}</h2>
    </div>
  );
};

export default Person;
