const postcontainer = document.getElementById('blogposts');
const post = document.getElementById('blogpost');
const title =document.getElementById('title');
const body =document.getElementById('body');
const author =document.getElementById('author');
const img =document.getElementById('headimg');

let data = JSON.parse(
    `{
        "posts":[
             {
                "Title": "Post1",
                "preview":"text",
                "Body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Author": "John doe",
                "ImgURL": "../Images/logo.jpeg",
                "PublicationDate": ""
            },
            {
                "Title": "Post2",
                "preview":"text text",
                "Body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Viverra nibh cras pulvinar mattis. Non quam lacus suspendisse faucibus interdum posuere. Aliquam sem et tortor consequat. In massa tempor nec feugiat. Nibh venenatis cras sed felis eget velit aliquet sagittis. Sed faucibus turpis in eu mi. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Amet consectetur adipiscing elit ut aliquam purus sit amet. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Nulla porttitor massa id neque. Nisl condimentum id venenatis a condimentum vitae. Magna etiam tempor orci eu lobortis elementum nibh tellus. Risus in hendrerit gravida rutrum. Rutrum quisque non tellus orci.",
                "Author": "Jane doe",
                "ImgURL": "../Images/LRCmascot2023HEAD.png",
                "PublicationDate": ""
            },
            {
                "Title": "Post3",
                "preview":"text text text",
                "Body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque. Consequat id porta nibh venenatis cras sed felis eget velit. Pharetra vel turpis nunc eget lorem dolor sed viverra. In est ante in nibh mauris cursus mattis molestie a. In iaculis nunc sed augue lacus viverra vitae congue. Augue eget arcu dictum varius duis at consectetur lorem donec. Lacus vestibulum sed arcu non odio. Sapien eget mi proin sed libero enim sed. Commodo odio aenean sed adipiscing diam donec adipiscing.                ",
                "Author": "josh doe",
                "ImgURL": "../Images/Issuecover.jpeg",
                "PublicationDate": ""
            }
        ]
    }`
)
function displaypost(i){
    post.style.display = 'block';
    console.log(i)
    console.log(data.posts[i])
    body.innerText = data.posts[i].Body;
    author.innerText = data.posts[i].Author;
    title.innerText = data.posts[i].Title;
    img.src = data.posts[i].ImgURL;

}
function closeInstructions() {
    post.style.display = 'none';
}
let newposts = []
for (i =0; i < data.posts.length; i++) { 
    console.log(i)
    let newpost = document.createElement('div');
    newposts.push(newpost)
    newpost.classList = "blogpost";
    newpost.innerHTML = 
    `<img src = '${data.posts[i].ImgURL}'><a> ${data.posts[i].Title} </a><p>${data.posts[i].preview}</p>`;
    postcontainer.appendChild(newpost);
    if (i === 0){
        newposts[0].addEventListener('click', function (){
            displaypost(0);
        })
    }
    else {
        let     a = i
        console.log(a)
        newposts[a].addEventListener('click', function (){
            displaypost(a);
        })
    }
}