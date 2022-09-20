const prep = () => {
    const h1 = document.createElement('h1')
    h1.textContent = 'Работа с DOM'
   document.body.prepend(h1)
}
prep()

const app = ()  => {
    const a = document.createElement('a')
    a.href = 'https://javascript.ru/tutorial/dom/intro'
    a.textContent = 'статья на дом'
    const div = document.querySelector('#main')
    div.append(a)
}
app()

const col = (color) => {
    document.body.style.backgroundColor = color
}
col('white')

const tex = (text) => {
    const li = document.createElement('li') 
    const ul = document.querySelector('#list')
    ul.append(li)
    li.textContent = text
}
tex('привет')
const delet = () => {
    const remove = document.getElementById('copyright')
    remove.remove()

}
delet()

