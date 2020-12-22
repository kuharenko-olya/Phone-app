
export default {
    id: null,
    name: "Like",
    icon: "far fa-heart",
    program() {
        this.render();
        alert("Like")
    },
    initialize(id) {
        this.id = id
        // перепривязываем контекст с HTML элемента на наш объект this
        document.getElementById(this.id).onclick = this.program.bind(this);
    },
    render() { // показывать интерфейс программы
        document.getElementById(this.id).innerHTML = "<div class=\"window\"><span>Like App</span></div>"
    }
}
