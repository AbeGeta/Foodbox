import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import { createNewRecord } from './supabase';
// function to create record in supabase

interface IFlavourPreferencesList {
    sweet: boolean;
    salty: boolean;
    savory: boolean;
    spicy: boolean;
  }

function FlavourPreferencesList() {
  const [flavourPreferences, setFlavourPreferences] = useState<IFlavourPreferencesList>({
    sweet: false,
    salty: false,
    savory: false,
    spicy: false
  });

  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    setFlavourPreferences({ ...flavourPreferences, [name]: checked });
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
    //   await createNewRecord(flavourPreferences);
      
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>What kind of food do you want to eat?</h2>
      <label>
        <input
          type="checkbox"
          name="sweet"
          checked={flavourPreferences.sweet}
          onChange={handleChange}
        />
        Sweet
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="salty"
          checked={flavourPreferences.salty}
          onChange={handleChange}
        />
        Salty
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="savoury"
          checked={flavourPreferences.savory}
          onChange={handleChange}
        />
        Savoury
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="spicy"
          checked={flavourPreferences.spicy}
          onChange={handleChange}
        />
        Spicy
      </label>
      <button type="submit">Next</button>
    </form>
  );
}

export default FlavourPreferencesList;