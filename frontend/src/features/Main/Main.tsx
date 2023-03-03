import React, { useState } from 'react';

export default function Main(): JSX.Element {
    const [{input}, setInput] = useState('')
    const submitHandler:
  return (
    <form className="AuthForm" onSubmit={submitHandler}>
      <input
        className="name"
        type="text"
        placeholder="Enter player's name"
        value={input.name}
        onChange={(e)=>setInput()}
      />
      <input
        className="password"
        type="password"
        placeholder="Enter password"
        value={input.password}
        onChange={()=>setInput}
      />
      <button type="submit">Login</button>
    </form>
  );
}
