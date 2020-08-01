import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    //below is the default state color of white for when a color is selected
    this.state = {
      selectedColor: '#FFF'
    }
  }

  //this method changes the state value with whatever is passed in as an argument
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }


  // Cell, on the other hand, only needs to know the currently selected 
  // color, not change it. We can pass this in to every Cell returned by
  //  genRow() as a prop called selectedColor.. as shown below:
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}

       /* As mentioned, ColorSelector is the interface where users will 
        be able to select a color, so it will need access to setSelectedColor.
         We can pass the needed function down as a prop: ... as shown line 38*/