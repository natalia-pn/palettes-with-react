import React, { Component } from 'react';
import './App.css';
import  {fetchPalettes} from './services/PalettesRequest';
import Filter from './components/Filter';
import FilteredList from './components/FilteredList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: [],
      nameValue: ''
    };

    this.filterPalettes = this.filterPalettes.bind(this);
    this.getNameValue = this.getNameValue.bind(this);

    
  }

  componentDidMount() {
    this.getSavedPalettes()
  }

getPalettes() {
  fetchPalettes()
  .then(data=> {
    const palettesArray = data.palettes.map((item, index)=> {return {...item, id:index}})
    this.savePalettes(palettesArray);
    this.setState({
      palettes: palettesArray
    })
  }
)
}

savePalettes(data) {
  localStorage.setItem('palettesData', JSON.stringify(data));
}

getSavedPalettes() {
 
  if(localStorage.getItem('palettesData') !== null ) {
    const savedData = JSON.parse(localStorage.getItem('palettesData'))

    this.setState({palettes: savedData});

  } else {
    this.getPalettes();

  }
}

getNameValue (e) {
  const nameValue = e.currentTarget.value;
  this.setState({nameValue: nameValue})
}

filterPalettes() {
  const {palettes, nameValue} = this.state;

  const filteredpalette = palettes.filter(item => item.name.toUpperCase().includes(nameValue.toUpperCase()));

  return filteredpalette;

}



  render() {

    console.log(this.filteredpalette)
  const {palettes} = this.state;
    return (
      <div className="App">
         
          <Filter action={this.getNameValue} />
          <FilteredList filterAction={this.filterPalettes}/>
        <ul>
        {palettes.map(item => {
          return(
            <li className="Palette__Item" key={item.id}>
                <div>
                  <h2 className="Palette__name">{item.name}</h2>
                  <ul className="Palette__container">
                    {item.colors.map((color, index) => {
                      return(
                        <li className="Palette__colour" key={index} style={{'backgroundColor': `#${color}`}}></li>
                      )
                    })}
                  </ul>
                </div>
            </li>
          )
        })}

        </ul>


        
      </div>
    );
  }
}

export default App;
