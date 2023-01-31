import './App.css';

const testArr = ["Sports", "음악"]
const testList = testArr.map((element) => <li>{element}</li>)

function App() {
  return (
    <div>
      <p>
        Multi Tag Test
      </p>
      <p>
        Edit<code>Let's go!</code>
      </p>
      <ul>
        {testArr[0]}
      </ul>
      <ul>
        {testArr[1]}
      </ul>
      <ul>
        {testList}
      </ul>
    </div>
  );
}

export default App;
