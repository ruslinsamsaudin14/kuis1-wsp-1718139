
import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Recipe from './components/Recipe';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, FormControl, } from 'react-bootstrap';


const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = '72008fdb';
  const APP_KEY = 'b68c54ba53f8d50fc7ac5dc710f13197';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
  }

  const onChange = e => {
    setQuery(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    getData();
  }

  return (

    <div >
      <div >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Resep Makanan</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
          </Nav>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search Food" className="mr-sm-2" autoComplete="off" onChange={onChange} value={query} />
            <Button type="submit" value="search" variant="outline-info">Cari</Button>
          </form>
        </Navbar>
      </div>
      <br></br>
      <div className="App">
        <h1> Macam - Macam Resep Makanan</h1>
        <hr></hr>
        <div className="recipes">
          {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </div>

    </div>
  )
}

export default App;
