const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const openZaloSupport = $('.Footer_img')
const modalZaloSupport = $('#Modal_container')
const addWidgetBtn = $('.add_widget')
const addWidget = $$('.circle_btn-detail')
const languageSelections = $$('.Language_btn')
const vietnamese = $$('.vietnamese')
const english = $$('.english')
const chatBtn = $$('.Chat_btn')[1]
const hiddenItems = $$('.hidden')

const hideZalo = (e) => {
    modalZaloSupport.style.display = 'none'
}

// Mở Zalo Support
openZaloSupport.addEventListener('click', (e) => {
    if (modalZaloSupport.style.display == 'block') {
        hideZalo()
    } else {
        e.stopPropagation()
        modalZaloSupport.style.display = 'block'
    }
})

document.addEventListener('click', (e) => {
    if (modalZaloSupport.style.display == 'block') {
        hideZalo()
    }
})

modalZaloSupport.addEventListener('click', (e) => {
    e.stopPropagation()
})

// Mở Message AddWidget

addWidgetBtn.addEventListener('click', (e) => {
    if (languageSelections[1].classList.contains('active')) {
        e.stopPropagation()
        addWidget[1].classList.add('open')
        addWidget[0].classList.remove('open')
    } else if (languageSelections[0].classList.contains('active')) {
        e.stopPropagation()
        addWidget[0].classList.add('open')
        addWidget[1].classList.remove('open')
    }
})

modalZaloSupport.addEventListener('click', () => {
    for (var i = 0; i < addWidget.length; i++) {
        addWidget[i].classList.remove('open')
    }
})

// Language Selection
for (const languageSelection of languageSelections) {
    languageSelection.addEventListener('click',() => {
        $('.Language_btn.active').classList.remove('active')

        languageSelection.classList.add('active')
        if (languageSelection.innerText == 'English') {
            english.forEach((englishItem) => {
                englishItem.style.display = 'block'
            })
            vietnamese.forEach((englishItem) => {
                englishItem.style.display = 'none'
            })
        } else {
            english.forEach((englishItem) => {
                englishItem.style.display = 'none'
            })
            vietnamese.forEach((englishItem) => {
                englishItem.style.display = 'block'
            })
        }
    })
}

// Open chatbox

chatBtn.addEventListener('click', () => {
    hiddenItems.forEach((hiddenItem) => {
        hiddenItem.style.visibility = 'hidden'
    })
    
    $('.Modal_container-content-language').style.display = 'none'
    $('.Modal_container-content-chatbox').style.display = 'flex'
    $('.Modal_container-header-user').style.display = 'block'
})