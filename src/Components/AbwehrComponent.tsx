import React, { useState } from "react";

const AbwehrComponent = () => {
  const [Abwehrmittel, setAbwehrmittel] = useState([
    { name: "OktaBlock", width: 30, inventory: 0 },
    { name: "MVB3X", width: 53, inventory: 0 },
    { name: "HStop 3", width: 120, inventory: 0 },
  ]);

  return (
    <div>
      {Abwehrmittel.map((mittel) => (
        <p key={mittel.name}>
          {mittel.name} - Width: {mittel.width}, Inventory: {mittel.inventory}
        </p>
      ))}
    </div>
  );
};

export default AbwehrComponent;
