// header date
const dateNode = document.querySelector('.js-date')
dateNode.innerText = moment().format('LLLL')

// for checkbox sum
const checkBoxNode = document.querySelectorAll('.js-checkbox')

checkBoxNode.forEach((item) => {
  item.addEventListener('change', () => {
    let sum = 0

    checkBoxNode.forEach((node) => {
      if (node.checked) {
        sum = sum + parseInt(node.value)
      }
    })

    sumNode.innerText = sum
  })
})

// for form submit
const formNode = document.querySelector('.js-form')
const sumNode = document.querySelector('.js-sum')
if (formNode) {
  const successNode = document.querySelector('.js-success')
  formNode.addEventListener('submit', (e) => {
    e.preventDefault()
    successNode.classList.add('active')
  })
}

// for show more component
const moreNode = document.querySelector('.js-more')

if (moreNode) {
  moreNode.addEventListener('click', () => {
    const hasActive = moreNode.classList.contains('active')

    if (hasActive) {
      moreNode.classList.remove('active')
    } else {
      moreNode.classList.add('active')
    }

  })
}

// for footer date
const footerDate = document.querySelector('.js-footer-date')
footerDate.innerText = new Date().getFullYear()