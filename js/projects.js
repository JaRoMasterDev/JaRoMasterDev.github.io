const prevP = () => {
    const pList = document.getElementById("project-list")

    const firstProject = pList.firstElementChild;

    const lastProject = pList.lastElementChild;

    pList.insertBefore(lastProject, firstProject);
}

const nextP = () => {
    console.log("next");
    const pList = document.getElementById("project-list")

    const firstProject = pList.firstElementChild;

    let lastProject = pList.lastElementChild;

    pList.appendChild(firstProject, lastProject);
}