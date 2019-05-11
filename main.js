class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      display: 0,
    };
    const manageI = (event) => {
      this.setState({
        input: event.target.value
      });
    }

  }

  render() {
    return (
      <div id="cont2">
        <div id="display1"> {this.state.display} </div>
        <div id="input1"> {this.state.input} </div>
        <div className="item11" id="displayMemory">11</div>
        <div className="item12" id="display">12</div>
        <table><tbody>
          <tr><td colSpan="2"> <button className="item13" id="clear">C</button></td>
            <td><button onclick="manageI" className="item14">%</button></td>
            <td><button onclick="manageI" className="item15" id="divide">/</button></td></tr>
          <tr><td><button onclick="manageI" className="item7" id="seven" value="7">7</button></td>
            <td><button onclick="manageI" className="item8" id="eight">8</button></td>
            <td><button onclick="manageI" className="item9" id="nine">9</button></td>
            <td><button onclick="manageI" className="item16" id="multiply">X</button></td>
          </tr><tr>
            <td><button onclick="manageI" className="item4" id="four">4</button></td>
            <td><button onclick="manageI" className="item5" id="five">5</button></td>
            <td><button onclick="manageI" className="item6" id="six">6</button></td>
            <td><button onclick="manageI" className="item17" id="subtract">-</button></td></tr>
          <tr><td><button onclick="manageI" className="item1" id="one">1</button></td>
            <td><button onclick="manageI" className="item2" id="two">2</button></td>
            <td><button onclick="manageI" className="item3" id="three">3</button></td>
            <td><button onclick="manageI" className="item18" id="add">+</button></td>
          </tr><tr>
            <td colSpan="2"> <button onclick="manageI" className="item0" id="zero">0</button></td>
            <td><button onclick="manageI" className="item19" id="decimal">.</button></td>
            <td><button onclick="manageI" className="item20">=</button></td></tr>
        </tbody></table>
      </div>

    );
  }


}

ReactDOM.render(<App />, document.querySelector("#grid-container"));
