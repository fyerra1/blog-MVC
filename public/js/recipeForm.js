const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim();
    const instructions = document.querySelector('#instructions').value.trim();
  
    if (name && ingredients && instructions) {
      const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ name, ingredients, instructions }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('New Recipe Created!');
        document.location.replace('/profile');
      } else {
        alert('Failed to create new recipe');
      }
    }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/recipes/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);
