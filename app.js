const app = Vue.createApp({
    data() {
        return {
            counter1: 0,
            todo: '',
            urgent: "",
            checkedUrgent: "",
            counter2: 888
        }
    },
    methods: {
        increase3(step) {
            this.counter2 += step;
        },
        decrease3(step) {
            this.counter2 -= step;
        },
        commitUrgent() {
            this.checkedUrgent = this.urgent;

        },
        setUrgent(event) {
            this.urgent = event.target.value
        },
        increase1() { this.counter1 = this.counter1 + 1 },
        decrease1() { this.counter1 = this.counter1 - 1 },
        increase2(step) { this.counter1 += step },
        decrease2(step) { this.counter1 -= step },
        setToDo(event, greeting) {
            this.todo = `${greeting} ${event.target.value}`
        },
        submitForm() {
            alert("already submitted")
        },
        submitForm2(event) {
            event.preventDefault()
            alert("already submit form2")
        }
    },
})
app.mount("#app")