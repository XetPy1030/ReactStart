import logo from './logo.svg';
import './App.css';

function App() {
  let arrWorkers = [
    {
      'firstName': 'Богатый',
      'lastName': 'Человек',
      'numWorkDay': 21,
      'moneyPerDay': 10000,
    },
    {
      'firstName': 'Трололо',
      'lastName': 'Тролов',
      'numWorkDay': 12,
      'moneyPerDay': 1000,
    },
    {
      'firstName': 'Небогатый',
      'lastName': 'Человек',
      'numWorkDay': 10,
      'moneyPerDay': 500,
    },
  ];
  let sum = 0;
  let elemsWorkers = arrWorkers.map(function(val, index) {
    let sumWorker = val.numWorkDay*val.moneyPerDay;
    sum += sumWorker;
    return (
    <tr>
      <td>{val.firstName}</td>
      <td>{val.lastName}</td>
      <td>{val.numWorkDay}</td>
      <td>{val.moneyPerDay}</td>
      <td>{sumWorker}</td>
    </tr>
    )
  });
  return (
    <div>
      <table border="2px">
        <tr>
          <td>Имя</td>
          <td>Фамилия</td>
          <td>Кол-во отр. дней</td>
          <td>ЗП за день</td>
          <td>ЗП</td>
        </tr>
        {elemsWorkers}
      </table>
      <p>{sum} ЗП всех</p>
    </div>
  )





  let getNum1 = () => 1;
  let getNum2 = () => 2;
  return (
    <div>
      текст {getNum1() + getNum2()}
    </div>
  )




  function getText() {
    return <p>текст</p>
  }
  return (
    <div>
      {getText()}
    </div>
  )



  let arr1 = ['a', 'b', 'c', 'd', 'e'];
  let elems3 = arr1.map((val, ind) => <li>{val}</li>);
  return (
    <ul>
      {elems3}
    </ul>
  )



  let show = false;
  let tt = 'текст 1';
  if (!show) {
    tt = 'текст 2';
  }
  return (
    <div>
      {tt}
    </div>
  )




  let attrs = 'color: green; border-radius: 30px; width: 200px; height: 200px';
  return (
    <div style={{
      color: "green",
      borderRadius: "10px",
      width: "200px",
      height: "200px"
    }}>
      текст
    </div>
  )






  let str = 'block';
  return (
    <div className={str}>
      текст
    </div>
  )



  let attr = 'block';
  return (
    <div id={attr}>
      текст
    </div>
  )



  let text41 = <p>текст1</p>;
  let text42 = <p>текст2</p>;
  return (
    <div>
      {text41}
      <p>!!!</p>
      {text42}
    </div>
  );



  let text3 = <p>текст</p>;
  return (
    <div>
      {text3}
    </div>
  );



  let text = 'текст';
  return (
    <div>
      {text}
    </div>
  );



  return (
    <div>
      текст
    </div>
  );





  const isAdmin = true;
  let textAdmin = (<div>
    <p>kjh</p>
    <p>kjh</p>
  </div>);
  if (!isAdmin) {
    textAdmin = <div></div>
  };
  return textAdmin;



  const isAdult = false;
  let text2 = 'Малолетка';
  if (isAdult) {
    text2 = 'Дедушка';
  }
  return (
    <div>
      {text2}
    </div>
  )

  // oewdue
  const arr = [1, 2, 3, 4, 5];
  const rows = [];
  for (let i = 0; i < arr.length; i++) {
    rows.push(<li>{arr[i]}</li>);
  }
  return (
    <div>
      <ul>
        {rows}
      </ul>
    </div>
  )

  return (
    // 11
    <div>
      <p>text</p>
      <p>text
        <input /> <br />
        <input /> <br />
        <input />
      </p>
      <p>text
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </p>
      <table border="2px">
        <tr>
          <td>wad</td>
          <td>wad</td>
          <td>wad</td>
        </tr>
        <tr>
          <td>fesf</td>
          <td>fesf</td>
          <td>fesf</td>
        </tr>
        <tr>
          <td>esf</td>
          <td>esf</td>
          <td>esf</td>
        </tr>
      </table>
      <p className="a1"></p>
      <p className="a2"></p>
      <p className="a3"></p>
    </div>
  );
}

export default App;
