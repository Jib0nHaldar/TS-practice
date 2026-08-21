type Age = number | string;

interface User{
    name: string,
    age: Age,
    email: string,
    isActive: boolean
}

function userStatus (user:User): string{
    let {name,age,email,isActive} = user
    return `Hi... ${name}, your age is ${age} years, email: ${email}, and your profile Status is ${isActive} `
}

interface admin extends User{
    address: string
}

let userInfo ={
    name: 'jd',
    age : 'Twenty Five',
    email: 'abc@gmail.com',
    isActive: true,
    address: "rajshahi"
}
console.log(userStatus(userInfo));


