const Form = ({ value, setValue, number, setNumber, onSubmit, name }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={name ? name : value}
          placeholder="Type the name"
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <input
          value={number}
          placeholder="Type your own money"
          onChange={(e) => setNumber(e.target.value)}
          type="number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
