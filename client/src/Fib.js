import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {

  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
    this.fetchValues();
    this.fetchIndexes();
  };

  fetchIntoSessionStorage(){
    var indices = [];
    this.state.seenIndexes.map(({number}) => indices.push(number));
    while (indices.length > 10){
      indices.shift();
    }
    sessionStorage.setItem("indices", indices);
  }

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          Dla indeksu {key} wartość jest równa {this.state.values[key]}
        </div>
      );
    }
    return entries;
  }

  render() {
    return (
      <div>
        <hr></hr>
        <form onSubmit={this.handleSubmit}>
          <label>Wpisz indeks:</label><br/>
          <input
            className="form-input"
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button className="btn btn-lg btn-primary">Oblicz</button>
        </form>
        <hr></hr>
        <h3>Ostatnio obliczane wartości:</h3>
        {this.renderValues()}
        {this.fetchIntoSessionStorage()}
        <h3><a href="/history">Historia</a></h3>
      </div>
    );
  }
}

export default Fib;
