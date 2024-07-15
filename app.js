document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();
    fetchTodos();
});

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        document.getElementById('error-message').textContent = 'Failed to load posts. Please try again later.';
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('post-list');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <a href="#" class="post-link" data-id="${post.id}">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </a>
        `;
        postsContainer.appendChild(postElement);
    });

    // Add click event listeners to the post links
    document.querySelectorAll('.post-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Post ID: ${event.currentTarget.dataset.id}`);
        });
    });
}

async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const todos = await response.json();
        displayTodos(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        document.getElementById('error-message').textContent = 'Failed to load todos. Please try again later.';
    }
}

function displayTodos(todos) {
    const todosContainer = document.getElementById('todo-list');
    todosContainer.innerHTML = '';
    todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.innerHTML = `
            <a href="#" class="todo-link" data-id="${todo.id}">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} disabled />
                <span>${todo.title}</span>
            </a>
        `;
        todosContainer.appendChild(todoElement);
    });

    // Add click event listeners to the todo links
    document.querySelectorAll('.todo-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Todo ID: ${event.currentTarget.dataset.id}`);
        });
    });
}
