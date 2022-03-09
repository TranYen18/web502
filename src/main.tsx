import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const person = {
  name: "Yen",
  age : 20,
  school: "fpoly",
  status: true,
  children:[
      {id: "1", name: "Trung"},
      {id: "2" ,name: "Kien"},
    ] 

}
// Sử dụng hàm trong reactjs 
const showAge = (age) => <p>Tuoi cua ban la {age}</p> ;
// Sử dụng component trong react
const ShowAge = props => <p>Tuoi cua ban la {props.age}</p> ;
ReactDOM.render(
  <div>
    <p>Tên: {person.name} </p>
    <p>Tuổi: {person.age} </p>
    <p>Trường: {person.school} </p>
    <p>{person.status ? "Da ket hon" : "Chua ket hon"}</p>
    <ul>
      {person.children.map(child => <li>
        {child.name}
      </li>)}
    </ul>
    <div>function: {showAge(person.age)}</div>
    <div>Component: <ShowAge age={ person.age}/></div>
  </div>,
  document.getElementById('root')
);
