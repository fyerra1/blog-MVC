const cardHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    const postId = event.target.getAttribute('data-card-id');

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
    } else if (postId){
        document.location.replace(`/update-post/${postId}`);
    }

};

document
  .querySelector('.project-list')
  .addEventListener('click', cardHandler);
