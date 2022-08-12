const recipeHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#recipe-title').value.trim();
  const content = document.querySelector('#recipe-ingredients').value.trim();
  // const instructions = document.querySelector('#recipe-instructions').value.trim();
  const recipeId = document.querySelector('#submit').getAttribute('data-id');

  if (recipeId && title && content) {
    const response = await fetch(`/api/blogs/${recipeId}`, {
      method: 'PUT',
      body: JSON.stringify({ 
        title, 
        content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Your post has been updated.')
      document.location.replace('/profile');
    } else {
      alert('Failed to update post');
    }
  }
};
  
document
  .querySelector('#submit')
  .addEventListener('click', recipeHandler);
