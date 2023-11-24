
import { useState } from 'react';

export default function AnimalSelector() {
  const [animal, setAnimal] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Logic to fetch the cat fact or dog image will go here
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Choose an animal:
          <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
            <option value="">Select...</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </label>
        <button type="submit">Show me a fact/image</button>
      </form>
    </div>
  );
}