import React from "react";

function NumberList(props) {
  const numbers = props.numbers;
  const key = props.key;
  const listItems = numbers.map((number) => (
    <li key={key}>
      {console.log(toString(number))}
      {key}| {number * 5} | This is The End of Code in Every listItems!
    </li>
  ));
  return (
    <ul>
      {key}
      {listItems}
    </ul>
  );
}

export default NumberList;
