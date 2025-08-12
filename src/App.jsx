import { useState } from 'react';

const App = () => {

  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  )




  const handleAddFighter = (zombieFighter) => {
    console.log("Button pushed!");
    const unusedZombieFighters = zombieFighters.filter((fighter) =>
      fighter.id !== zombieFighter.id
    );

    if (money < zombieFighter.price) {
      console.log("Not enough money")
    }
    else {
      setMoney(money - zombieFighter.price);
      setZombieFighters(unusedZombieFighters);
      team.push(zombieFighter);
      setTeam(team);

      console.log(`Your team includes ${JSON.stringify(team)}`);
      console.log(`Umused Zombies: ${JSON.stringify(unusedZombieFighters)}`)
    const totalStrenth = zombieFighter.strength // WHY YOU NO ADD
    console.log(totalStrenth)
    
    }



    if (team.length === 0) {
      console.log("Pick some team members!")
    } // best attempt at # 7, couldn't get the UI to update
    else {
      return
      team
    }
  

  // 8

  // const totalStrenth = zombieFighters.forEach((fighter) =>
  //   0 + fighter.strength
  // )
  // const totalStrenth = team.forEach((zombieFighter) => { 0 + zombieFighter.strength })
    //sum of team.zombieFighter.strength + team.zombieFighter ...++
   

  // team.map((zombieFighter.strength) => {
  //      for(let i=0; i > team.length ; i++) {zombieFighter.strength} })
  console.log(totalStrenth)
  }




  // if team.length === 0 {totalStrenth===0}

  // 9
  //copy of 8 but for totalAgility 
  // let totalAgility = team.map((zombieFighter.agility))




// 11 
//Basically duplicating/reversing 5-

// const handleRemoveFighter = (zombieFighter) => {
//   ...
// }



return (
  <>

    <h1>Your Team: {team}</h1>

    <div>
      {team.map((zombieFighter) => (
        <ul>
          <h3 key={zombieFighter.name}> Name: {zombieFighter.name} </h3>
          <img key={zombieFighter.img} src={zombieFighter.img}></img>
          <li key={zombieFighter.price}>Price: {zombieFighter.price} </li>
          <li key={zombieFighter.strength}> Strength: {zombieFighter.strength} </li>
          <li key={zombieFighter.agility}> Agility: {zombieFighter.agility} </li>
          {/* Question 10
           <button
            onClick={() => handleRemoveFighter(zombieFighter)}>
            Remove {zombieFighter.name} from my team
          </button> */}
        </ul>
      ))}
    </div>

   
   {/* <h2>Team Strength: {totalStrenth}</h2>
    <h2>Team Agility: {totalAgility}</h2> */}
    <h2>Wallet: {money}</h2>

    <h2> Choose your Fighters!</h2>
    {zombieFighters.map((zombieFighter) => (
      <ul>
        <h3 key={zombieFighter.name}> Name: {zombieFighter.name} </h3>
        <img key={zombieFighter.img} src={zombieFighter.img}></img>
        <li key={zombieFighter.price}>Price:  {zombieFighter.price} gold</li>
        <li key={zombieFighter.strength}> Strength: {zombieFighter.strength} </li>
        <li key={zombieFighter.agility}> Agility: {zombieFighter.agility} </li>
        <button
          onClick={() => handleAddFighter(zombieFighter)}>
          Add {zombieFighter.name} to my team
        </button>

      </ul>
    ))}


  </>

);
}

export default App