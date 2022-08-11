const recipeHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#recipe-title').value.trim();
  const ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const instructions = document.querySelector('#recipe-instructions').value.trim();
  const recipeId = document.querySelector('#submit').getAttribute('data-id');

  if (recipeId && title && ingredients && instructions) {
    const response = await fetch(`/api/recipes/${recipeId}`, {
      method: 'PUT',
      body: JSON.stringify({ 
        name: title, 
        ingredients, 
        instructions }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Your recipe has been updated.')
      document.location.replace('/profile');
    } else {
      alert('Failed to update recipe');
    }
  }
};
  
document
  .querySelector('#submit')
  .addEventListener('click', recipeHandler);
