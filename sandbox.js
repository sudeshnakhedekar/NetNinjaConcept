//object in array.

// const  blogs=[
//     {title:'why maac &  chese rules',likes: 30 },
//     {title:'10 things to make with marmite' ,likes:50}
// ]
// console.log(blogs);

let user ={
    name: 'crystal',
    age: 20,
    email:'crystal@helloji.gmail.com',
    location: 'berlin',
    blogs:[ {title:'why maac &  chese rules',likes: 30 },
    {title:'10 things to make with marmite' ,likes:50}],
    login: function(){
        console.log('the user is logged in');
    },
    logout: ()=>{
        console.log('the user is logged out');
    },
    logBlogs(){
//console.log(this.blogs);
console.log('this user has written the following blogs:');
this.blogs.forEach(blogs =>{
    console.log(blogs.title, blogs.likes);
})
    }
    
};
user.login();
user.logout();
user.logBlogs();





