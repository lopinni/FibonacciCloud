import React, { Component } from 'react';

class History extends Component{
    
    state = {
        indices: []
    };

    getValues() {
        var storage = sessionStorage.getItem("indices");
        this.state.indices = storage;
    }

    renderSeenIndexes() {
        var indices = "";
        for (var i in this.state.indices){
            indices += this.state.indices[i];
        }
        return indices;
    }

    render() {
        this.getValues();
        return (
            <div>
                <h3>Historia ostatnich 10 indeksów:</h3>
                <p id="history">{this.renderSeenIndexes()}</p>
                <h3><a href="/fib">Wróć</a></h3>
            </div>
        );
    }
  };

export default History;