const recipeHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#recipe-title').value.trim();
  const content = document.querySelector('#recipe-ingredients').value.trim();
  // const instructions = document.querySelector('#recipe-instructions').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
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