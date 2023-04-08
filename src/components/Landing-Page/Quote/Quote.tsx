import "./Quote.css";

function Quote() {
  return (
    <div className="card border-2 divide-gray-300 divide-y-2">
      <p className="font-light pb-3 text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        vero labore tenetur! Eligendi, excepturi ipsam perspiciatis obcaecati
        unde atque minima repellat, tempora culpa ducimus nihil laudantium
        similique sed enim quis.
      </p>
      <div className="flex pt-3 justify-between">
        <div className="flex flex-col space-y-1">
          <strong className="font-light">Andrew Alfred</strong>
          <span>Technical advisor</span>
        </div>

        <img
          className="rounded-full h-12 shadow-md"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          alt="quote"
        />
      </div>
    </div>
  );
}

export default Quote;
