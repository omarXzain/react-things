import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      thingList: [
        {
          id: 1,
          name: "dragonair",
          image: "https://img.pokemondb.net/artwork/dragonair.jpg",
          skill: "Shed Skin: The Pokémon may heal its own status problems.",
        },
        {
          id: 2,
          name: "Psyduck",
          image: "https://img.pokemondb.net/artwork/psyduck.jpg",
          skill: "Cloud Nine: suppresses all effects brought on by weather, including move power increases",
        },
        {
          id: 3,
          name: "Snorlax",
          image: "https://img.pokemondb.net/artwork/snorlax.jpg",
          skill: "Thick Fat: Thick Fat reduces the damage taken from Fire-type and Ice-type moves by 50%.",
        },
        {
          id: 4,
          name: "Jigglypuff",
          image: "https://img.pokemondb.net/artwork/jigglypuff.jpg",
          skill: "Cute Charm: If a Pokémon with hit by a move that makes, there is a 100% chance to sleep"
        }
      ]
    };
    this.addNewThing = this.addNewThing.bind(this);
  }
  render() {
    return (
      <>
        <div className="HeaderDiv">
          <Header name="Welcome To Pokemon Fans Club" thingList={this.state.thingList}/>
        </div>
        <main>
          <ThingList thingList={this.state.thingList} thingCreated={thing => this.addNewThing(thing)} />
        </main>
        <Footer name="pokemon" year="2021" />
      </>
    );
  }
  addNewThing(thing) {
    let allThing = this.state.thingList;
    let id = 5
    allThing.push({ id: id++, name: thing.name, image: thing.image, skill: thing.skill });
    this.setState({
      thingList: allThing
    })
  }
}

class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      skill: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeSkill = this.handleChangeSkill.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <>
        <h2 className="AppAdd">Add your favorite pokemon</h2>
        <a href="https://pokemondb.net/pokedex/national">Pick one from here</a>
        <form onSubmit={this.handleSubmit}>
          <label className="AppLabel">
            <input type="text" placeholder="Pokemon Name" onChange={this.handleChangeName} required className="AppInputs"></input>
            <input type="text" placeholder="Pokemon-Image" onChange={this.handleChangeImage} required className="AppInputs"></input>
            <input type="text" placeholder="Skill" onChange={this.handleChangeSkill} required className="AppInputs"></input>
          </label>
          <button type="submit" className="AppButton">Add New Pokémon</button>
        </form>
      </>
    )
  }
  handleChangeName(event) {
    let newName = event.target.value;
    this.setState({
      name: newName
    });
  }
  handleChangeImage(event) {
    let newImage = event.target.value;
    this.setState({
      image: newImage
    });
  }
  handleChangeSkill(event) {
    let newSkill = event.target.value;
    this.setState({
      skill: newSkill
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onThingCreate(this.state);
  }
}

function Header(props) {
  return (
    <header className="AppHeader">
      <div className="AppDiv">
        <h1 className="App">{props.name}</h1>
      </div>
    </header>
  )
}

function ThingList(props) {
  return (
    <>
      <div className="AppDivThings">
        <ul className="AppThings">
          {props.thingList.map(thing => <Thing item={thing} key={thing.id} />)}
        </ul>
      </div>
      <ThingForm onThingCreate={(data) => props.thingCreated(data)} />
    </>
  )
}

function Thing(props) {
  return (
    <>
      <div className="AppProducts">
        <li><img src={props.item.image}></img></li>
        <li><h2>{props.item.name}</h2></li>
        <li><p>skill: {props.item.skill}</p></li>
      </div>
    </>
  )
}

function Footer(props) {
  return (
    <footer className="AppFooter">
      <p> Gotta Catch'em All | &copy; {props.year}</p>
    </footer>
  )
}

export default App;