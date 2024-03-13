export default function Persons({person}){
   console.log(person)
   return (
      <div className="box">
         <h1> name: {person.name} </h1>
         <p>email; {person.email}</p>
      </div>
   )
}