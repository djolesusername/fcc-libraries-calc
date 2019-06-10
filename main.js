class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      display: "0",
      value0: 0,
      memory: [],
      score: 0,
    };

  }

  render() {
    return (
      <div id="cont2">
        <div id="display"> {this.state.display} </div>


        <table><tbody>
          <tr><td colSpan="2"> <button className="item13" id="clear" onClick={this.handleReset} >CE</button></td>
            <td><button onClick={this.handleClear} className="item14" id="erase" >C</button></td>
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
            <td><button onClick={this.handleEqls} id="equals" className="item20">=</button></td></tr>
        </tbody></table>
      </div>

    );
  }

  handleEqls = () => {
    let result

    let regex = /[-,+,*,/]/gi

    let res = this.state.display.split(regex)
    let ops = this.state.display.match(regex)


    while (ops.indexOf("*") >= 0) {
      let value1 = res[ops.indexOf("*")]
      let value2 = res[ops.indexOf("*") + 1]

      let mjau = (value1 * value2)
      result = mjau
      //ubacujem rezultat na mesto druge vrednosti
      res[ops.indexOf("*") + 1] = mjau
      // brisem prvu vrednost i izvrsenu operaciju
      res.splice(ops.indexOf("*"), 1)
      ops.splice(ops.indexOf("*"), 1)


    }


    while (ops.indexOf("/") >= 0) {
      let value1 = res[ops.indexOf("/")]
      let value2 = res[ops.indexOf("/") + 1]
      if (value2 == 0) {
        this.setState({
          input: "",
          display: "",
        });
        return
      }

      if (value2 !== 0) {
        let mjau = (value1 / value2)
        result = mjau

        //ubacujem rezultat na mesto druge vrednosti
        res[ops.indexOf("/") + 1] = mjau
        // brisem prvu vrednost i izvrsenu operaciju
        res.splice(ops.indexOf("/"), 1)
        ops.splice(ops.indexOf("/"), 1)


      }

    }


    while (ops.indexOf("-") >= 0) {
      let value1 = res[ops.indexOf("-")]
      let value2 = res[ops.indexOf("-") + 1]

      let mjau = value1 - value2
      result = mjau

      //ubacujem rezultat na mesto druge vrednosti
      res[ops.indexOf("-") + 1] = mjau
      // brisem prvu vrednost i izvrsenu operaciju
      res.splice(ops.indexOf("-"), 1)
      ops.splice(ops.indexOf("-"), 1)


    }
    while (ops.indexOf("+") >= 0) {
      let value1 = res[ops.indexOf("+")]
      let value2 = res[ops.indexOf("+") + 1]

      let mjau = Number(value1) + Number(value2)
      result = mjau

      //ubacujem rezultat na mesto druge vrednosti
      res[ops.indexOf("+") + 1] = mjau
      // brisem prvu vrednost i izvrsenu operaciju
      res.splice(ops.indexOf("+"), 1)
      ops.splice(ops.indexOf("+"), 1)


    }


    this.setState({
      input: result,
      display: result,
    });
  }



  handleClick = (event) => {
    // Ne dozvoljava dve .. u istom broju
    if (event.target.value == "." && this.state.input.indexOf(".") >= 0) { return }

    // Inicijalizacija sa 0 - brisanje 0 posle prvog unosa
    if (this.state.display == "0") {

      this.setState({
        display: event.target.value
      });
      return
    }
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

  handleReset = () => {

    this.setState({
      input: "",
      display: "0",

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

      tem = tem + event.target.value

      this.setState({
        input: "",
        display: tem

      });
    }
  }

}

ReactDOM.render(<App />, document.querySelector("#grid-container"));
