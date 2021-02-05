import React, { useState } from "react"

const defaults = {
  components: [
    {
      id: "plusOne",
      value: 1,
      increment: 1,
    },
    {
      id: "plusTwo",
      value: 1,
      increment: 2
    },
    {
      id: "plusThree",
      value: 1,
      increment: 3
    }
  ]
}

export const ComponentContext = React.createContext({
  components: [],
  updateComponent: () => {}
});

export const ComponentContextProvider = (props) => {

  const updateComponent = (id, increment) => {
    let localComponents = state.components;

    localComponents.forEach(c => {
      if (c.id === id) {
        c.value += increment
      }
    })

    setState({...state, components: localComponents})
  }

  const initState = {
    components: defaults.components,
    updateComponent: updateComponent
  }

  const [state, setState] = useState(initState);

  return (
    <ComponentContext.Provider value={state}>
      {props.children}
    </ComponentContext.Provider>
  )
}