import { useState } from 'react';

export default function AnimalSelector() {
  const [animal, setAnimal] = useState('');
  const [factOrImageUrl, setFactOrImageUrl] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    if (animal === 'cat') {
        const catFactResponse = await fetch('https://catfact.ninja/fact');
        const catFactData = await catFactResponse.json();
        setFactOrImageUrl(catFactData.fact);
    } else if (animal === 'dog') {
        const dogImageResponse = await fetch('https://dog.ceo/api/breeds/image/random');
        const dogImageData = await dogImageResponse.json();
        setFactOrImageUrl(dogImageData.message);
    }
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
      
      {factOrImageUrl && (
        animal === 'cat' ? (
          <p>{factOrImageUrl}</p>
        ) : (
          <img src={factOrImageUrl} alt="Random Dog" />
        )
      )}
    </div>
  );
}