import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { ADD_PET } from "../../utils/mutations";

import Auth from '../../utils/auth';

export default function AddPetForm() {
  const [formState, setFormState] = useState({
    petOwner: Auth.getUser().data._id,
    petName: "",
    petAge: "",
    petType: "",
    petBreed: "",
    petFavFood: "",
    petFavActivities: "",
    petBio: "",
  });

  const [addPet, { error, data }] = useMutation(ADD_PET);
  
  const handleInputChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPet({
        variables: { ...formState }
      });
      console.log(data);
      setFormState('');
      window.location.replace('/');

    } catch (error) {
      console.error('>>> handleSubmit error: ', error);
    }
  };

  return (
    <div className="pet-form-card flex-column align-center">
      <h2 className="text-center">🐾 Add Your Pet 🐾</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Your pet's name*"
          name="petName"
          value={formState.petName}
          onChange={handleInputChange}
        />
        <label>
          <h6>Select type of animal for your pet*:</h6>
          <select name="petType" value={formState.petType} onChange={handleInputChange}>
            <option value="default">Select</option>
            <option value="🐶 Doggo">🐶 Doggo</option>
            <option value="🐱 Catto">🐱 Catto</option>
            <option value="🐰 Bunny">🐰 Bunny</option>
            <option value="🐹 Hamster/Guinea Pig/Mouse/Chinchilla">🐹 Hamster/Guinea Pig/Mouse/Chinchilla</option>
            <option value="🐦 Birdy">🐦 Birdy</option>
            <option value="🐢 Reptile Fam">🐢 Reptile Fam</option>
            <option value="🐠 Aquatics">🐠 Aquatics</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="Your pet's age (optional)"
          name="petAge"
          value={formState.petAge}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Your pet's breed (optional)"
          name="petBreed"
          value={formState.petBreed}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Your pet's favorite food (optional)"
          name="petFavFood"
          value={formState.petFavFood}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Your pet's favorite activities (optional)"
          name="petFavActivities"
          value={formState.petFavActivities}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Type a short bio for your pet here... (optional)"
          name="petBio"
          value={formState.petBio}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-info">Submit</button>
      </form>
      {error && (
        <div className="text-danger">
          Invalid input
        </div>
      )}
    </div>
  )
}
