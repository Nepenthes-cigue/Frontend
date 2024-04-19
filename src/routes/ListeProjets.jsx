import { useEffect } from "react";

export default function ListeProjets() {
  const getProjects = async () => {
    console.log('Affichage de l\'ensemnble des projets');
    const response = await fetch('http://localhost:3000/projets');
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des projets');
    }else{
      const projets = await response.json();
      console.log(projets);
    }
  }
  
  useEffect(() => {
    getProjects();
  })

    return (
      <>
        <h1>Mes projets</h1>
        <div>
        </div>
      </>
    )
  }