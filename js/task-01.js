const categories = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const text = category.querySelector(`h2`).textContent;
    const numbers = category.querySelectorAll(`li`).length;
    console.log(`Category: ${text}\n Elements: ${numbers}`)
});