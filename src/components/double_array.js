import React from "react";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number * 2}</li>
  ));
  return <ul>{listItems} </ul>;
}

export default NumberList;
