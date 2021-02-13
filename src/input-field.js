import React, { useState } from 'react';

export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }

  return (
    <input value={email} onChange={handleChange} />
  );
}


/* The JSX input tag has an event listener called onChange. This event listener
calls an event handler each time the user types something in this element.

We can comfortably simplify this:
const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}

Into this:
const handleChange = (event) => setEmail(event.target.value);

Or even, use object destructuring to just write this:
const handleChange = ({target}) => setEmail(target.value);

*/
