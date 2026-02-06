// references to HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('#add-button');
const list = document.querySelector('#list');

// array containing chapters
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// add chapter
button.addEventListener('click', () => {
    if (input.value.trim() !== '') { // ensures list is not empty

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();

        input.value = '';
        input.focus();
    }
});


function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.appendChild(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
    console.log('I like to type  code myself to gain better understanding.')
}

// save to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
}

// get from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// delete chapter from array and storage 
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

