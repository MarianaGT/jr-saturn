import React, { useState } from "react";

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
 /* options > is a STATIC DATA array that contains the names of all of the pizza toppings available.
 We like to define static data models outside of our function components since
 they don’t need to be recreated each time our component re-renders. In our JSX,
 we use the map method to render a button for each of the toppings in our options array.

selected > is a DYNAMIC DATA array representing the selected toppings for our personal pizza.
Dynamic data usually changes based on a user's actions.We initialize selected as
an empty array. When a button is clicked, the toggleTopping event handler is called.
Notice how this event handler uses information from the event object to determine which topping was clicked.
 */

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state (notice spread syntax for returning a new array)
        // we replace the previuos array with a bran new array
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}
