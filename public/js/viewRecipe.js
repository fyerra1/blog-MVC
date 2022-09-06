const recipeHandler = async (event) => {
  event.preventDefault();

  const recipeEditId = event.target.getAttribute('data-card-id');

  if (recipeEditId) {
    console.log(recipeEditId);
    document.location.replace(`post-comment/${recipeEditId}`);
  }
};
  
document
  .querySelector('.project-list')
  .addEventListener('click', recipeHandler);