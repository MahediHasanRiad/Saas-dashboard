

function Status({ currentStatus }) {
  return (
    <section>
      <span  className="text-purple-400 bg-purple-100 font-semibold rounded-full px-10 py-3 ">
        {currentStatus}
      </span>
    </section>
  );
}

export default Status;

// style={{ color: '#c27aff', backgroundColor: '#f3e8ff' }}