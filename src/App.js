import "./App.css";

function App() {
  function addQuoteHandler(e) {
    e.preventDefault();
    // console.log(e.target.quote.value);
    const location = document.querySelector('.previousSubs');
    const justSubmitted = document.createElement('h2');
    const submittedP = document.createElement('p');
    const performedP = document.createElement('p');
    const quoteP = document.createElement('p');
    const contextP = document.createElement('p');
    const hr = document.createElement('hr');
    justSubmitted.innerText = 'You just made a submission to this top secret database';
    justSubmitted.style.color = '#89e007';
    submittedP.innerText = 'Submitted by: ' + e.target.subName.value;
    performedP.innerText = 'Performed by: ' + e.target.quoteName.value;
    quoteP.innerText = 'Quote: ' + e.target.quote.value;
    contextP.innerText = 'Context: ' + e.target.context.value;
    location.append(justSubmitted);
    location.append(submittedP);
    location.append(performedP);
    location.append(quoteP);
    location.append(contextP);
    location.append(hr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Beardemphl Quotes</h1>
      </header>
      <main>
        <h2>Why</h2>
        <p>
          If you know Ron, Jeff, Mike, Mark or David you have probably heard
          them say something pretty memorable. I myself am a fortunate offspring
          of one of these fine specimen. I know how valuable their exquisite
          dialogue can be. I often find myself totally bewildered by what I have
          just heard my dad say. Long story short, my sister thought it would be
          cool if we could get some good quotes saved up, maybe after a few
          years we could make a coffee table book or something.
        </p>
        <h2>How it works</h2>
        <ul>
          <li>See the 'add a quote' form outlined by a box below.</li>
          <li>Fill out the form (each box needs to be filled in).</li>
          <li>Click the add button.</li>
          <li>See the results.</li>
        </ul>
        <h2 className="focus">🔥 Add a Quote 🔥</h2>
        <form onSubmit={addQuoteHandler}>
          <fieldset>
            <h3>Who is submitting?</h3>
            <input
              name="subName"
              id="subName"
              type="text"
              placeholder="Justin? Kari?"
            ></input>
            <h3>Who said it?</h3>
            <input
              name="quoteName"
              id="quoteName"
              type="text"
              placeholder="Ron? Mike?"
            ></input>
            <h3>What did they say?</h3>
            <textarea
              name="quote"
              id="quote"
              placeholder="...and then, oh spaghettios you know how loud the fat lady was signing after that."
            ></textarea>
            <h3>Background context</h3>
            <textarea
              name="context"
              id="context"
              placeholder="Four of us were out fishing and ..."
            ></textarea>
            <button type="submit">Add Quote</button>
          </fieldset>
        </form>
        <div className='previousSubs'>
        </div>
      </main>
    </div>
  );
}

export default App;
