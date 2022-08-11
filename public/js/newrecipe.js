const recipeHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-title').value.trim();
  const ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const instructions = document.querySelector('#recipe-instructions').value.trim();

  if (name && ingredients && instructions) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({ name, ingredients, instructions }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create new recipe');
    }
  }
};

document
  .querySelector('.box')
  .addEventListener('submit', recipeHandler);