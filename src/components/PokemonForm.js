import React, {useState} from "react";
import { Form, TableBody } from "semantic-ui-react";


function PokemonForm(addPokemon) {

  const [form, setForm] = useState({
    key: 0,
    name: "",
    frontUrl: "",
    backUrl:"",
  })

  function handleChange(event){
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(e){

    const newPokemon = {
      name: form.name,
      hp: form.hp,
      sprites: {
        front: form.frontUrl,
        back: form.backUrl,
      }
    }

    fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPokemon)
      })    
      .then(resp => resp.json())
      .then(addPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={form.name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={form.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange} 
            value={form.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange} 
            value={form.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
