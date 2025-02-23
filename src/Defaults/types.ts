export type MittelType = {
    name: string;
    width: number;
    inventory: number;
  };

export type AbwehrmittelType = 
    MittelType[];


export type SolutionType ={
    solutionWidth: number;
    types: MittelType[];
    bestSolution: string;
  }