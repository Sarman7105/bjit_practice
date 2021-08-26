const postsContainer=document.querySelector(".postsContainer");
const postHeading=document.querySelector(".postHeading");
const postBody=document.querySelector(".postBody");
console.log(postsContainer);

const handleClick=(id)=>{
    postHeading.innerText=""
        postBody.innerText=""
    console.log("butoon is clicked",id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);  
        postHeading.innerText=`${data.title}`
        postBody.innerText=`${data.body}`
    });
}

const createPost=(post)=>{
    const div=document.createElement("DIV");
    div.className+=" post"
    div.id=`${post.id}`
    // div.addEventListener("click",handleClick)
        div.innerHTML=
            `
                <h3 style="margin-bottom: 5px;">
                    ${post.title}
                </h3>
                <p>
                    ${post.body}
                </p>
                <button onClick="handleClick(${post.id})" class="postDetails">
                Details
                </button>
        
            `
            console.log(div);
            postsContainer.appendChild(div);

}

let posts;
const getPosts=()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>res.json())
    .then(data=>{
        // return data.slice(0,11);
        posts=data.slice(0,10);

        posts.map(post=>createPost(post))
        
    });
}
getPosts();
