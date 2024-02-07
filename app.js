document.addEventListener('DOMContentLoaded', () => {
    const store = new Store({ title: '', content: '' });
  
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const form = document.getElementById('newsForm');
  
    function updatePreview({ title, content }) {
      document.getElementById('previewTitle').textContent = title;
      document.getElementById('previewContent').textContent = content;
    }
  
    store.subscribe(updatePreview);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(store);
      store.setState({
        title: titleInput.value,
        content: contentInput.value
      });
    });
  });
  