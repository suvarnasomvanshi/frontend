// packages - npm i react-hot-toast react-icons saas firebase react-router-dom react-table






// Immutable.js

// npm install immutable

//core data structures

//Lists
//Maps
//Sets
//Arrays
//OrderedMaps
//records
//sequences



// Creating immutable structures

import {List,Map,Set} from 'immutable';

const list = List([1,2,3]);
const map = Map({key: 'value'});
const set = Set([1,2,3]);


//updating Data structure

//Immutable.js provides methods that return new instances of data structures when changes are made:

// List :

const newList = list.push(4); //[1,2,3,4]
const newMap = map.set('newKey', 'newValue'); // {key: 'value', newKey: 'newValue'}
const newSet = set.add(4);// {1,2,3,4}




//// nested structure


// Immutable.js supports deeply nested structures and provides methods to update them efficiently:

const nestedMap = Map({
    a:Map({b:10,c:20}),
});

const updateNestedMap = nestedMap.setIn(['a','b'], 30);



//Using records:

// Records are useful for creating typed, immutable objects:

const Person = Record({name:"any", age: 25});
const person = new Person({name:"shital", age: 25});
const updatedPerson = person.set('age', 26);



// Advanced Concepts 


// Performance Considerations:

// use `List` & `Map`  for large detaSets, as they are optimized for performance.
// Avoid using Seq for synchronous operations on large datasets, as it can cause performance bottlenecks.



// Integrating with React:

// Use Immutable.js with React to efficiently manage state:

import React ,{useState}  from "react";
import {List} from "immutabel";

const MyComponent =()=>{
    const [items, setItems] = useState(List([1,2,3,4]));

    const addItem =()=>{
    setItems(items.push(items.size+1));
    };

    return(
        <>
            <ul>
                {items.map((item,index)=><li key={item}>{item}</li>)}
            </ul>
            
           <button onClick={addItem}>Add Item</button> 
        </>
    )
}
export default MyComponent;





// using Immutable.js with Redux

import {Map} from "immutable";

const initialState = Map({count:0});

const resducer = (state=initialState,action)=>{
    switch(action.type){
        case 'INCRMENT':
            return state.update('count',count=>count+1);
            default:
                return state;
    }
}