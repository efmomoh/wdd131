// OBJECT

let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enolled: 100, instructor: "Brother Blazzard" },
        { section: "002", enrolled: 99, instructor: "Brother Momoh" }
    ]
};
  // create a function that display course and title
function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

// create a function that display course sections as rows in a table with id sections
function renderSections(course) {
    const tbody = document.querySelector("#sections tbody");
    let rows = "";
    for (const section of course.sections) {
        rows += ` <tr>
        <td>${section.section}</td>
        <td>${section.enolled}</td>
        <td>${section.instructor}</td>
    </tr>`;
    }
    tbody.innerHTML = rows;
}
