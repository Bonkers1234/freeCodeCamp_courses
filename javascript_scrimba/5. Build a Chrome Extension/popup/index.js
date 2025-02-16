

let myLeads = localStorage.getItem('myLeads') ? JSON.parse(localStorage.getItem('myLeads')) : []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')
console.log(myLeads)

if(myLeads) {
  render(myLeads)
}

function render(leads) {
  let li = ''
  for(let i = 0; i < leads.length; i++) {
    // ulEl.innerHTML += `<li>${leads[i]}</li>`
    // let li = document.createElement('li')
    // li.textContent = leads[i]
    // ulEl.appendChild(li)
    li += `<li><a target='_blank' href='https://${leads[i]}'>${leads[i]}</a></li>`
  }
  
  ulEl.innerHTML = li
}

tabBtn.addEventListener('click', () => {
  browser.tabs.query({ active: true, currentWindow: true })
    .then(tabs => {
      myLeads.push(tabs[0].url)
      localStorage.setItem('myLeads', JSON.stringify(myLeads))
      render(myLeads)
    })
})

deleteBtn.addEventListener('dblclick', () => {
  myLeads = []
  localStorage.clear()
  // ulEl.innerHTML = ''
  render(myLeads)
})

inputBtn.addEventListener('click', () => {
  if(inputEl.value) {
    myLeads.push(inputEl.value) 
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    inputEl.value = ''
    render(myLeads)
    console.log(JSON.parse(localStorage.getItem('myLeads')))
  }
})












