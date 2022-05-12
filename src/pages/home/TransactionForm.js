import { useState } from "react";

export default function TransactionForm() {
  const [name, setName] = useState("");
  const [amount, setAmout] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ name, amount });
  };

  return (
    <>
      <h3>Add a Transaction</h3>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name:</span>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </label>
        <label>
          <span>Transaction Amount ($):</span>
          <input
            type="number"
            onChange={e => setAmout(e.target.value)}
            value={amount}
            required
          />
        </label>

        <button>Add Transaction</button>
      </form>
    </>
  );
}
