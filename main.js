class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      display: "",
      value0: 0,
      memory: [],
      score: 0,
    };

  }

  render() {
    return (
      <div id="cont2">
        <div id="display1"> {this.state.display} </div>

        <div className="item11" id="displayMemory"> {this.state.score}</div>
        <div className="item12" id="display">12</div>
        <table><tbody>
          <tr><td colSpan="2"> <button className="item13" id="clear" onClick={this.handleClear}>C</button></td>
            <td><button onClick={this.handleButton} className="item14" value="%">%</button></td>
            <td><button onClick={this.handleButton} className="item15" value="/" id="divide">:</button></td></tr>
          <tr><td><button onClick={this.handleClick} className="item7" id="seven" value="7">7</button></td>
            <td><button onClick={this.handleClick} className="item8" value="8" id="eight">8</button></td>
            <td><button onClick={this.handleClick} className="item9" value="9" id="nine">9</button></td>
            <td><button onClick={this.handleButton} className="item16" value="*" id="multiply">x</button></td>
          </tr><tr>
            <td><button onClick={this.handleClick} className="item4" value="4" id="four">4</button></td>
            <td><button onClick={this.handleClick} className="item5" value="5" id="five">5</button></td>
            <td><button onClick={this.handleClick} className="item6" value="6" id="six">6</button></td>
            <td><button onClick={this.handleButton} className="item17" value="-" id="subtract">-</button></td></tr>
          <tr><td><button onClick={this.handleClick} className="item1" value="1" id="one">1</button></td>
            <td><button onClick={this.handleClick} className="item2" value="2" id="two">2</button></td>
            <td><button onClick={this.handleClick} className="item3" value="3" id="three">3</button></td>
            <td><button onClick={this.handleButton} className="item18" value="+" id="add">+</button></td>
          </tr><tr>
            <td colSpan="2"> <button onClick={this.handleClick} className="item0" value="0" id="zero">0</button></td>
            <td><button onClick={this.handleClick} className="item19" id="decimal" value=".">.</button></td>
            <td><button onClick={this.handleClick} className="item20">=</button></td></tr>
        </tbody></table>
      </div>

    );
  }

  handleClick = (event) => {

    if (event.target.value == "." && this.state.input.indexOf(".") >= 0) { return }
    this.setState({
      input: this.state.input + event.target.value,
      display: this.state.display + event.target.value
    });
  }

  handleClear = () => {
    let clr = this.state.display.slice(0, -1)
    let inp = this.state.input.slice(0, -1)
    this.setState({
      input: inp,
      display: clr,

    });
  }

  handleButton = (event) => {

    this.setState({
      input: "",
      display: this.state.display + event.target.value
    });

    if (
      this.state.display.endsWith("+") ||
      this.state.display.endsWith("*") ||
      this.state.display.endsWith("-") ||
      this.state.display.endsWith("/")
    ) {
      let tem = this.state.display.slice(0, -1)
      tem.concat(event.target.value)
      console.log(tem)
      this.setState({
        input: "",
        display: tem

      });
    }
  }

}

ReactDOM.render(<App />, document.querySelector("#grid-container"));
