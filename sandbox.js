//add methods to object & this keyword implementation

let user ={
    name: 'crystal',
    age: 20,
    email:'crystal@helloji.gmail.com',
    location: 'berlin',
    blogs:['why maac &  chese rules','10 things to make with marmite'],
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
    console.log(blogs);
})
    }
    
};
user.login();
user.logout();
user.logBlogs();



