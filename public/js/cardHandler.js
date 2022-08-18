const cardHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    const cardRecipeId = event.target.getAttribute('data-card-id');

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
    } else if (cardRecipeId){
        console.log(cardRecipeId);
        document.location.replace(`/update-post/${cardRecipeId}`);
    }

};

document
  .querySelector('.project-list')
  .addEventListener('click', cardHandler);
