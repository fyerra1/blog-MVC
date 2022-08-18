const cardHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    // const recipeEditId = event.target.getAttribute('data-edit-id');
    const cardRecipeId = event.target.getAttribute('data-card-id');

    // if(cardRecipeId){
    //     document.location.replace(`/update-recipes/${cardRecipeId}`);
    // } else console.log(cardRecipeId);

    if (id) {
        console.log(id)
        const response = await fetch(`api/blogs/${id}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    // } else if (recipeEditId) {
    //     console.log(recipeEditId);
    //     document.location.replace(`/view-recipe/${recipeEditId}`);
    } else if (cardRecipeId){
        console.log(cardRecipeId);
        document.location.replace(`/update-post/${cardRecipeId}`);
    }

};

document
  .querySelector('.project-list')
  .addEventListener('click', cardHandler);

     // if(id) {
    //     document.location.replace(`/update-recipes/${id}`);
    // } else {
    //     console.log(id);
    // }