const cardHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    const recipeEditId = event.target.getAttribute('data-edit-id');
    const cardRecipeId = event.target.getAttribute('data-card-id');

    if (id) {

        const response = await fetch(`api/recipes/${id}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    } else if (recipeEditId) {

        document.location.replace(`/update-recipes/${recipeEditId}`);
    } else {

        document.location.replace(`/view-recipe/${cardRecipeId}`);
    }

};

document
  .querySelector('.project-list')
  .addEventListener('click', cardHandler);