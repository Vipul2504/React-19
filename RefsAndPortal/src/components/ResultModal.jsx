const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog>
      <h2>you {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
    </dialog>
  );
};
