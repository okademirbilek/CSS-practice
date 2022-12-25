const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main=document.querySelector(".main");

const postElements = posts.map(item => {
    return (
        `
        <section class="post-section">
            <div class="post-info-container">
                <div class="avatar-container">
                    <img class="avatar" src=${item.avatar} alt="avatar ${item.name}">
                </div> 
                <div class="post-info">
                    <h1>${item.name}</h1>
                    <h2 class="normal-text">${item.location}</h2>
                <div>
            </div>
        </section> 
        
        
        <section>
             <div class="post-img-container">
                <img class ="post-img" src=${item.post}> 
             <div>
        </section> 
        
        
        <section class="make-interaction">
            <div class="img-container">
                <img  src="/images/icon-heart.png" alt="like button">
                <img  src="/images/icon-comment.png" alt="comment button">
                <img  src="/images/icon-dm.png" alt="share button">
            </div>
            <h2>${item.likes} likes</h2>   
        </section> 
        
        <section class="comment">
            <h2>${item.username} <span class="normal-text">${item.comment}</span></h2> 
        </section> 
        `
    )
}).join('')
//to get rid of unexpected comma

main.innerHTML=postElements
