import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import web3 from "./web3.js";
import "./App.css";
import Navhead from "./components/navbar";
import Forms from "./components/form";
import Getcert from "./components/getcert";
import Intro from "./components/intro";
import certcontract from "./config.js";
import Certificate from "./components/certificate";

class App extends Component {
  // In state se vor mentine datele care se vor pasa apoi pentru componentele de afisare
  state = {
    account: "",
    name: "",
    course: "",
    txh: "",
    id: "",
    output: [],
    tofound: false,
  };

  componentDidMount() {
    this.loadBlockchainData();
  }

  // functie asincrona care ia datele contului si il pune in state
  // pentru a putea utiliza anterior requesturile
  async loadBlockchainData() {
    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    this.setState({ account: accounts[0] });
  }

  // functia care va fi pasata copiilor, care reprezinta de fapt
  // forumularele pentru a adauga un contract pe blockchain
  add = (data) => {
    let name = data.fname + " " + data.lname;

    // se face requestul catre add cert din smart contract
    certcontract.methods.addcert(name, data.course, data.email).send(
      {
        from: this.state.account,
        gas: 500000, // costul necesae
      },
      (error, result) => {
        if (error) console.log("error " + error);
        // in cazul in care certificatul nu esre adaugat cu succes
        else {
          // setam in state numele, emailul si numeloe cusrului si le pasam catre copii componentei pentru afisare
          this.setState({ name: data.fname + " " + data.lname });
          this.setState({ course: data.course + " " + "course" });
          this.setState({ txh: result });

          // in caz de succes mai facem un request pentru a prelua id-ul contractului
          // pentru a-l putea verifica ulterior
          certcontract.methods
            .getid()
            .call({ from: this.state.account }, (error, result) => {
              this.setState({ id: result });
              if (!error) console.log(result);
              else console.log(error);
            });
        }
      }
    );
  };

  // functia va prelua datele certificatului pentru a le afisa
  get = (data) => {
    certcontract.methods
      .getcert(data.id)
      .call({ from: this.state.account }, (error, result) => {
        if (!error) {
          const v = Object.values(result);
          this.setState({ output: v });
          this.setState({ tofound: true });
        } else alert("Certificate not found");
      });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navhead />
          <Route
            path="/"
            exact
            render={() => <Forms addcertificate={this.add} />}
          />
          <Route
            path="/verify"
            render={() => (
              <Getcert
                getcertificate={this.get}
                yes={this.state.tofound}
                details={this.state.output}
              />
            )}
          />
          {this.state.id}
          <Route
            path="/view"
            component={() => (
              <Certificate
                sname={this.state.name}
                course={this.state.course}
                txh={this.state.txh}
                id={this.state.id}
              />
            )}
          />
          <Route path="/intro" component={Intro} />
        </Router>
      </div>
    );
  }
}

export default App;
