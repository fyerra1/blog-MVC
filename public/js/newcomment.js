const commentHandler = async (event) => {
  event.preventDefault();

  // const title = document.querySelector('#recipe-title').value.trim();
  const comment= document.querySelector('#new-comment').value.trim();
  const blogId = event.target.getAttribute('data-id');
  // const instructions = document.querySelector('#recipe-instructions').value.trim();

  console.log(comment);

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify( {
        comment_content: comment,
        blog_id: blogId,
      } ),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('.comment-container')
  .addEventListener('click', commentHandler);