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
      history: [
        {tresc: ""}
      ]
    }
     this.dodaj=this.dodaj.bind(this);
     this.zmiana=this.zmiana.bind(this); 
     this.back=this.back.bind(this);
  }
zmiana(event){
  this.setState({
    value: event.target.value
  })
}
back(){
  const history=this.state.history;
  history.pop();
  this.setState({
    history:history
  })
  const history1=this.state.history;
  const current=history1.length-1;
  this.setState({
    value:history1[current].tresc
  })
}

  dodaj() {
    const history=this.state.history;
    this.setState({history:history.concat([{tresc: this.state.value}])
    })
    console.log(this.state)
  }

  render() {
    return (
    <div>
      <input type="text" value={this.state.value} onChange={this.zmiana} />
      <button onClick={this.dodaj}>Dodaj</button>
      <button onClick={this.back}>Cofnij</button>
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
