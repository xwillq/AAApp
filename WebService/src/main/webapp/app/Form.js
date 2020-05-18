class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                login: "",
                pass: "",
                res: "",
                role: "",
                ds: "",
                de: "",
                vol: ""
            }
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.send = this.send.bind(this)
    }

    renderFields() {
        let fields = Object.keys(this.state.fields)
        return fields.map((value) => {
            return React.createElement("p", null, [value + " ", React.createElement("input", { type: "text", name: value })])
        })
    }

    render() {
        return (
            React.createElement("form", null,
                [
                    this.renderFields(),
                    React.createElement("input", { type: "button", id: "submit-button", value: "Submit" })
                ]
            )

        );
    }

}
