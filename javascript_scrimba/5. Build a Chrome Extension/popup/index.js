

let myLeads = localStorage.getItem('myLeads') ? JSON.parse(localStorage.getItem('myLeads')) : []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
console.log(myLeads)

if(myLeads) {
  renderLeads()
}

inputBtn.addEventListener('click', () => {
  if(inputEl.value) {
    myLeads.push(inputEl.value) 
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    inputEl.value = ''
    renderLeads()
    console.log(JSON.parse(localStorage.getItem('myLeads')))
  }
})

function renderLeads() {
  let li = ''
  for(let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += `<li>${myLeads[i]}</li>`
    // let li = document.createElement('li')
    // li.textContent = myLeads[i]
    // ulEl.appendChild(li)
    li += `<li><a target='_blank' href='https://${myLeads[i]}'>${myLeads[i]}</a></li>`
  }
  
  ulEl.innerHTML = li
}










