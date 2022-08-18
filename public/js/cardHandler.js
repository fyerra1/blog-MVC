const cardHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-edit-id');
    // const recipeEditId = event.target.getAttribute('data-edit-id');
    // const cardRecipeId = event.target.getAttribute('data-card-id');

    if(id) {
        document.location.replace(`/update-recipes/${id}`);
    } else {
        console.log(id);
    }

    // if (id) {

    //     const response = await fetch(`api/blogs/${id}`, {
    //         method: 'DELETE',
    //     });
    
    //     if (response.ok) {
    //         document.location.replace('/profile');
    //     } else {
    //         alert('Failed to delete project');
    //     }
    // } else if (recipeEditId) {

    //     document.location.replace(`/update-recipes/${recipeEditId}`);
    // } else {

    //     document.location.replace(`/update-recipe/${cardRecipeId}`);
    // }

};

document
  .querySelector('.project-list')
  .addEventListener('click', cardHandler);