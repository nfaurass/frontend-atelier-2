// Buttons
const myBlogsBtn = document.getElementById("myBlogsBtn");
const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const addPostBtn = document.getElementById("addPostBtn");
const postBtn = document.getElementById("postBtn");
const SignUpFormBtn = document.getElementById("SignUpFormBtn");
const LoginFormBtn = document.getElementById("LoginFormBtn");

// Sections
const postsListContainer = document.getElementById('postsList');
const cardContainer = document.getElementById('addPostsList');
const addPostsList = document.getElementById("addPostsList");
const postsList = document.getElementById("postsList");
const MyBlog = document.getElementById("MyBlog");
const Login = document.getElementById("Login");
const SignUp = document.getElementById("SignUp");

// Fields
const usernameLogin = document.getElementById("usernameLogin");
const passwordLogin = document.getElementById("passwordLogin");
const emailSignup = document.getElementById("emailSignup");
const passwordSignup = document.getElementById("passwordSignup");
const usernameSignup = document.getElementById("usernameSignup");
const postTitle = document.getElementById("postTitle");
const postDescription = document.getElementById("postDescription");


// Classes
class User {
    constructor(username = "User", password = "1234", email = "user@gmail.com") {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
class Post {
    constructor(title, description, user) {
        this.title = title;
        this.description = description;
        this.user = user.username;
    }
}
class Blog {
    constructor() {
        this.posts = [];
        this.users = [];
        this.currentUser = null;
    }
    addPost(post) {
        this.posts.push(post);
    }
    addUser(user) {
        this.users.push(user);
    }
    reloadPosts() {
        postsListContainer.innerHTML = '';
        this.posts.forEach(post => {
            if (JSON.parse(localStorage.getItem("user")).username == post.user) {
                const postElement = document.createElement('div');
                postElement.classList.add('col');
                postElement.innerHTML = `
                <div class="card shadow-sm">
                    <div class="card-body mx-2">
                    <p class="fs-8 fst-italic">${post.user}</p>
                        <p class="fs-1">${post.title}</p><hr>
                        <p class="fs-3">${post.description}</p>
                    </div>
                </div>`;
                postsListContainer.appendChild(postElement);
            }
        });
    }
}

// Instanciation du Blog et Utilisateur par defaut
const myBlog = new Blog();
let admin = new User("admin", "admin", "admin@codewall.com");
myBlog.addUser(admin);
myBlog.currentUser = admin;
document.getElementById("usernameBlogPosts").innerText = admin.username + "'s";


// Event Listeners
myBlogsBtn.addEventListener('click', () => {
    if (localStorage.getItem("user") == null) return;
    MyBlog.classList.remove("d-none");
    Login.classList.add("d-none");
    SignUp.classList.add("d-none");
    myBlog.reloadPosts();
})
loginBtn.addEventListener('click', () => {
    localStorage.removeItem("user");
    MyBlog.classList.add("d-none");
    Login.classList.remove("d-none");
    SignUp.classList.add("d-none");
})
signUpBtn.addEventListener('click', () => {
    localStorage.removeItem("user");
    MyBlog.classList.add("d-none");
    Login.classList.add("d-none");
    SignUp.classList.remove("d-none");
})
loginBtn.click();

SignUpFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!usernameSignup.value != "") { usernameSignup.classList.add("border", "border-danger"); return; }
    else { usernameSignup.classList.remove("border", "border-danger"); }
    if (!emailSignup.value != "") { emailSignup.classList.add("border", "border-danger"); return; }
    else { emailSignup.classList.remove("border", "border-danger"); }
    if (!passwordSignup.value != "") { passwordSignup.classList.add("border", "border-danger"); return; }
    else { passwordSignup.classList.remove("border", "border-danger"); }
    let user = new User(usernameSignup.value, passwordSignup.value, emailSignup.value);
    myBlog.addUser(user);
    myBlog.currentUser = user;
    localStorage.setItem("user", JSON.stringify(myBlog.users[myBlog.users.length - 1]));
    document.getElementById("usernameBlogPosts").innerText = usernameSignup.value + "'s";
    usernameSignup.value = "";
    emailSignup.value = "";
    passwordSignup.value = "";
    myBlogsBtn.click();
})
LoginFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let myUser;
    let username = usernameLogin.value, password = passwordLogin.value;
    myBlog.users.map((user) => {
        if (username == user.username && password == user.password) myUser = user;
    })
    if (myUser) {
        usernameLogin.classList.remove("border", "border-danger");
        passwordLogin.classList.remove("border", "border-danger");
        usernameLogin.value = "";
        passwordLogin.value = "";
        localStorage.setItem("user", JSON.stringify(myUser));
        myBlog.currentUser = myUser;
        document.getElementById("usernameBlogPosts").innerText = username + "'s";
        myBlogsBtn.click();
    }
    else {
        usernameLogin.classList.add("border", "border-danger");
        passwordLogin.classList.add("border", "border-danger");
    }
})
var i = 0;
addPostBtn.addEventListener('click', () => {
    //
    return;
    // if (document.getElementById("addPostsList").childElementCount == 1) return;
    const card = document.createElement('div');
    card.className = 'card my-3';
    card.innerHTML = `
        <div class="card-body">
            <input type="text" class="form-control mb-2" placeholder="Title">
            <textarea class="form-control mb-2" rows="8" placeholder="Description"></textarea>
            <button id="postBtn" class="btn btn-primary post${i}">POST</button>
        </div>
    `;
    cardContainer.appendChild(card);
})
postBtn.addEventListener('click', (e) => {
    let title = postTitle.value, description = postDescription.value;
    let post = new Post(title, description, myBlog.currentUser);
    myBlog.addPost(post);
    myBlog.reloadPosts();
    postTitle.value = "";
    postDescription.value = "";
});