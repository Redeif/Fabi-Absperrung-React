import React from 'react'
import { useContext } from 'react';
import { AbwehrmittelContext } from "./AbwehrmittelContext";

const Inventory = () => {

    const context = useContext(AbwehrmittelContext);
    if (!context) throw new Error("AbwehrComponent must be inside AbwehrmittelProvider");
    const { Abwehrmittel, setAbwehrmittel } = context;


    const setInventory = (changeMittel: string, value: number, event: React.ChangeEvent<HTMLInputElement>) => {

        if (value < 0) {
            value = 0
            event.target.value = ''
        }
        let newAbwehrmittel = Abwehrmittel;
        setAbwehrmittel((newAbwehrmittel) =>
            newAbwehrmittel.map((mittel) =>
              mittel.name === changeMittel ? { ...mittel, inventory: value } : mittel
            )
          );
    }




  return (
    <div className='variables'>
    <h2>Inventory</h2>
    <div className='inventory'>
    {Abwehrmittel.map((mittel) => (
      <div className='inventory-item'>
        <label form={mittel.name}>{mittel.name}</label>
        <input value={mittel.inventory} name={mittel.name} type='number' onChange={(e)=> setInventory(mittel.name, Number(e.target.value), e)}></input>
      </div>
    ))}
    </div>
    </div>
  )
}

export default Inventory