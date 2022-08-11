const recipeHandler = async (event) => {
  event.preventDefault();

  const recipeEditId = event.target.getAttribute('data-id');

  if (recipeEditId) {

    document.location.replace(`/update-recipes/${recipeEditId}`);
  }
};
  
document
  .querySelector('#submit')
  .addEventListener('click', recipeHandler);