// const log = console.log
// BOM - BROWSER MODEL OBJECT
// BROWSER API

// log(location);
// log(history);
// log(screen)
// log(navigator)
// log(navigator.geolocation.getCurrentPosition((position) => {
//     log(position.coords.latitude)
//     log(position.coords.longitude)
// }))

// DOM - DOCUMENT MODEL OBJECT (работа с HTML)
// const title = document.getElementById("title") //params: string без #
// console.log(title);

// const title2 = document.querySelector("h1") //params: string с селекторами (. # )
// console.log(title2);

// // document.getElementsByClassName //params: string - классы

// const titles = document.querySelectorAll(".title")
// console.log(titles);
// console.log(titles[0]);

// PRACTICE 1
// const list = document.getElementById("list")
// console.log(list.children); //дочерние элементов
// for (const li of list.children) {
//     console.log(li.innerText);
// }

// const thirdLi = list.children[2]
// thirdLi.innerText = "Item 12"


// PRACTICE 2
// const body = document.body
// const usernameTag = document.createElement("p") //params: string - название тэга
// body.appendChild(usernameTag) //положить как дочерний элемент
// usernameTag.innerText = "Dossym777"

// usernameTag.style.color = "pink"
// usernameTag.style.fontWeight = "bold"
// usernameTag.style.fontFamily = "Montserrat, sans-serif"

//PRACTICE 3
// const students = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
// "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
// "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"]

// const studentList = document.getElementById("student-list")
// students.forEach(function(student, index) {
//     const li = document.createElement("li")
//     li.innerText = student
//     if(index % 2 === 0){
//         li.style.color = "grey"
//     }
//     else{
//         li.style.color = "red"
//     }
//     studentList.appendChild(li)
// })


//PRACTICE 4
const tagsInfo = [
    {
        text: "Education",
        color: "red",
        borderRadius: "10px",
        backgroundColor: "blue"
    },
    {
        text: "Frontend",
        color: "white",
        borderRadius: "15px",
        backgroundColor: "gold"
    },
    {
        text: "IT",
        color: "white",
        borderRadius: "12px",
        backgroundColor: "pink"
    },
    {
        text: "Cyber Security",
        color: "grey",
        borderRadius: "15px",
        backgroundColor: "red"
    },
    {
        text: "Backend",
        color: "white",
        borderRadius: "12px",
        backgroundColor: "black"
    },
]

function createTag({borderRadius, color, backgroundColor, text}){
    const tag = document.createElement("div")

    tag.style.fontWeight = 'bold'
    tag.style.padding = '7px 12px'
    tag.style.display = 'inline-block'
    tag.style.borderRadius = borderRadius
    tag.style.color = color
    tag.style.backgroundColor = backgroundColor
    tag.innerText = text

    return tag
}

tagsInfo.forEach(tagInfo=> {
    const tag = createTag({
        backgroundColor: tagInfo.backgroundColor,
        text: tagInfo.text,
        color: tagInfo.color,
        borderRadius: tagInfo.borderRadius
    })

    document.body.appendChild(tag)
})

// const tag1 = createTag({text: "Education", color: "red", borderRadius: "10px", backgroundColor: "blue"})
// const tag2 = createTag('15px', 'white', 'gold', "Frontend")
// const tag3 = createTag('12px', 'white', 'pink', "IT")
// document.body.appendChild(tag1)
// document.body.appendChild(tag2)
// document.body.appendChild(tag3)