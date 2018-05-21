const app={
    init(selectors) {
        this.max=0
        this.list=document.querySelector(selectors.listSelector)
        this.flicks=[]
        this.template=document.querySelector(selectors.templateSelector)
        document   
            .querySelector(selectors.formSelector)
            .addEventListener('submit', (ev) => {
                ev.preventDefault()
                this.handleSubmit(ev)
            })
    },
    removeFlick(flick, ev) {
        const item = ev.target.closest('.flick')
        item.remove()

        const i = this.flicks.indexOf(flick)
        this.flicks.splice(i, 1)
    },

    favoriteListItem(ev){
        const button = ev.target
        const flick = button.parentNode.parentNode
        flick.style.backgroundColor='Yellow'
        for(let i=0; i<this.flicks.length; i++)
        {
            if(this.flicks[i].id===flick.dataset.id)
            {
                this.flicks[i].fav=true
            }
        }
    },

    renderListItem(flick) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id
        item
          .querySelector('.flickName')
          .textContent = flick.name
        item
          .querySelector('.remove.button')
          .addEventListener('click', this.removeFlick.bind(this, flick))
        item
          .querySelector('.warning.button')
          .addEventListener('click', (ev)=>{
            ev.preventDefault()
            this.favoriteListItem(ev)
        })
        return item
    },

    handleSubmit(ev) {
        const f=ev.target
        const flick = {
            id: ++this.max,
            name: f.flickName.value,
            fav: false, 
        }
        
        this.flicks.unshift(flick)
        console.log(this.flicks)
        const item=this.renderListItem(flick) 
        this.list.insertBefore(item, this.list.firstElementChild)
        console.log(flick)
        f.reset()
    },
}
app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
})