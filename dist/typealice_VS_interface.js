"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function userStatus(user) {
    let { name, age, email, isActive } = user;
    return `Hi... ${name}, your age is ${age} years, email: ${email}, and your profile Status is ${isActive} `;
}
let userInfo = {
    name: 'jd',
    age: 'Twenty Five',
    email: 'abc@gmail.com',
    isActive: true,
    address: "rajshahi"
};
console.log(userStatus(userInfo));
//# sourceMappingURL=typealice_VS_interface.js.map