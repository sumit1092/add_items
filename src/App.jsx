import React from 'react';
import './App.css'

function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        //print addItems
        // const newArr = `Thing ${things.length + 1}`
        // things.push(newArr)
        // console.log(things)

        
		setThings(x => [...x, `Thing ${x.length+1}`])
        console.log(things)
    }

    const minus=()=>{
        setThings(x=>x.slice(0,-1))
    }

    const remove =()=>{
        //print remove items
        // const newAr = `Thing ${things.length}`
        // things.pop(newAr)
        // console.log(things)

       setThings(x=>{
           const newArr = [...x]
           newArr.pop()
           return newArr
       })
       console.log(things)
    }
    
     const thingsElement = x => <p key={x}>{x}</p>
	 const ans = things.map(thingsElement);
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <button onClick={remove}>Remove</button>
            {ans}
        </div>
    )
}

export default App



