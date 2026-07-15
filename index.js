let age = Number(prompt("Enter your age:"));
const ageCategory = document.querySelector(".agechecker");

const ageCategoryChecker = (age) => {
    if(age >= 0 && age <= 12) {
       ageCategory.textContent = `Message: Your age is ${age}. You are a child.`;
    }
    else if(age >= 13 && age <= 19) {
        ageCategory.textContent = `Message: Your age is ${age}. You are a teenager.`;
    }
    else if(age >= 20 && age <= 35) {
        ageCategory.textContent = `Message: Your age is ${age}. You are a young adult.`;
    }
    else if(age >= 36 && age <= 59) {
        ageCategory.textContent = `Message: Your age is ${age}. You are an adult.`;
    }
    else {
        ageCategory.textContent = `Message: Your age is ${age}. You are a senior citizen.`;
    }
}

ageCategoryChecker(age);