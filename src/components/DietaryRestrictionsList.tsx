import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import { createNewRecord } from './supabase';
// function to create record in supabase

interface IDietaryRestrictionsList {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    nutFree: boolean;
    halal: boolean;
    kosher: boolean;
  }

function DietaryRestrictionsList() {
  const [dietaryRestrictions, setDietaryRestrictions] = useState<IDietaryRestrictionsList>({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    nutFree: false,
    halal: false,
    kosher: false
  });

  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    setDietaryRestrictions({ ...dietaryRestrictions, [name]: checked });
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
    //   await createNewRecord(dietaryRestrictions);
      
      router.push('/flavour-preferences');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>What are your dietary restrictions?</h2>
      <label>
        <input
          type="checkbox"
          name="vegetarian"
          checked={dietaryRestrictions.vegetarian}
          onChange={handleChange}
        />
        Vegetarian
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="vegan"
          checked={dietaryRestrictions.vegan}
          onChange={handleChange}
        />
        Vegan
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="glutenFree"
          checked={dietaryRestrictions.glutenFree}
          onChange={handleChange}
        />
        Gluten-free
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="dairyFree"
          checked={dietaryRestrictions.dairyFree}
          onChange={handleChange}
        />
        Dairy-free
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="nutFree"
          checked={dietaryRestrictions.nutFree}
          onChange={handleChange}
        />
        Nut-free
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="halal"
          checked={dietaryRestrictions.halal}
          onChange={handleChange}
        />
        Halal
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="kosher"
          checked={dietaryRestrictions.kosher}
          onChange={handleChange}
        />
        Kosher
      </label>
      <button type="submit">Next</button>
    </form>
  );
}

export default DietaryRestrictionsList;