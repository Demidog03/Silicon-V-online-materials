const clickBtn = document.getElementById("click-btn") // elemtent || null

if(clickBtn) { // null, false, 0, undefined, "" - falsy values
    // clickBtn.onclick = () => {
    //     alert('Button is clicked')
    // }

    clickBtn.addEventListener('click', () => {
        // console.log(event);
        alert('Button is clicked')
    })  // (название события, callback function)
}

// sayHello(function () {}) || sayHello(() => {})

// if(null) //if(false)
// if(clickBtn) // if (clickBtn не был falsy)


// PRACTICE 1
// const input = document.getElementById("text-input")
// const foodListUl = document.getElementById("food-list")
// const button = document.getElementById("button")

// if(input && foodListUl && button) {
//     button.addEventListener('click', () => {
//         const foodValue = input.value // создаем новую переменную value нашего input

//         if(!foodValue){
//             alert('Введите название еды!')
//             return
//         }

//         const foodLi = document.createElement("li") // <li></li>
//         foodLi.innerText = foodValue // <li>Манты</li>
//         foodListUl.appendChild(foodLi) // добавление дочернего элемента
//         // <ul>
//         //     <li>Манты</li>
//         // </ul>  
//         input.value = ""
//     })
// }



// PRACTICE 2
// const textInputEl = document.getElementById("text-input")
// const usernameContentEl = document.getElementById("username-content")
// const usernameTextEl = document.getElementById("username-text")

// textInputEl.addEventListener('keydown', () => {
//     usernameTextEl.innerText = textInputEl.value
// }) // НАЖАТИЕ НА КЛАВИШУ


// PRACTICE 3
const formLoginEl = document.getElementById('form-login')
const emailEl = document.getElementById('email-input')
const passwordEl = document.getElementById('password-input')

const users = [
    {
        username: 'Katya',
        email: 'katya004@gmail.com',
        password: '1234'
    },
    {
        username: 'Nur',
        email: 'nurgul008@gmail.com',
        password: '12345'
    },
    {
        username: 'Dossym',
        email: 'dossym017@gmail.com',
        password: '4321'
    },
    {
        username: 'Olzhas',
        email: 'olzhas009@gmail.com',
        password: '1234'
    }
]

formLoginEl.addEventListener('submit', (event) => {
    event.preventDefault() // предотвращаем обновление страницы
    const email = emailEl.value
    const password = passwordEl.value

    for (const user of users) {
       if(email === user.email && password === user.password){
         alert('Вы успешно вошли в аккаунт!')
         alert(`Добро пожаловать: ${user.username}!`)
         return
       }
    }

    alert('Неправильный email или пароль!')
    emailEl.value = ""
    passwordEl.value = ""
})

const formRegEl = document.getElementById('form-register')
const emailRegEl = document.getElementById('email-input-register')
const passwordRegEl = document.getElementById('password-input-register')
const usernameRegEl = document.getElementById("username-input-register")

formRegEl.addEventListener('submit', (event) => {
    console.log(users);

    event.preventDefault()
    const newUser = {
        username: usernameRegEl.value, // username: "Olzhas"
        email: emailRegEl.value, // email: "Olzhas@gmail.com"
        password: passwordRegEl.value // password: "1234"
    }

    const foundUser = users.find(user => user.email === newUser.email) // {} || null

    if(foundUser){
        alert('Юзер с таким имейлем уже зарегистрирован!')
        return
    }

    users.push(newUser)
    alert(`${usernameRegEl.value} зарегистрирован!`)
    emailRegEl.value = ""
    passwordRegEl.value = ""
    usernameRegEl.value = ""
    console.log(users);
})