import React from 'react'
import { RecipeHeader, RecipeContainer, RecipeImage } from './RecipeElements'
import pic from '../../images/1.jpg'
const Recipe = () => {
  return (
    <RecipeContainer>
      <RecipeHeader>
        Kuba smrdi Nema rad brambory
      </RecipeHeader>
      <RecipeImage src={pic} alt="blabla"/>
    </RecipeContainer>
  )
}

export default Recipe
