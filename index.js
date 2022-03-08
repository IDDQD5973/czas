import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      current: 0,
      history: [
        { tresc: "" }
      ]
    }
    this.dodaj = this.dodaj.bind(this);
    this.zmiana = this.zmiana.bind(this);
    this.back = this.back.bind(this);
    this.packback = this.packback.bind(this);
  }
  zmiana(event) {
    this.setState({
      value: event.target.value
    })
  }
  back() {
    const history1 = this.state.history;
    const current = this.state.current - 1;
    this.setState({
      value: history1[current].tresc
    })
    this.setState({ current: current});
    console.log(this.state);
  }
  packback() {
    const history1 = this.state.history;
    const current = this.state.current + 1;
    this.setState({
      value: history1[current].tresc
    })
    this.setState({ current: current});
  }

  dodaj() {
    const history1=this.state.history.slice(0, this.state.current+1);
    const current=this.state.current;
    this.setState({
      history: history1.concat([{ tresc: this.state.value }])
    })
    console.log(this.state);
    this.setState({ current: this.state.current + 1 });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.zmiana} />
        <button onClick={this.dodaj}>Dodaj</button>
        <button onClick={this.back}>Cofnij</button>
        <button onClick={this.packback}>Cofnij cofnięcie</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
