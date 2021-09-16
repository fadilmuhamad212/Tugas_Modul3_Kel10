import React, { Component } from "react";
class ThirdChild extends Component {
    state = {
        angka: 0,
        tulisan: ''
    }
    //  componentDidMount() {
    //  alert(`Mount triggered!`)
    //  }
    /*componentDidUpdate(prevProps, prevState, snapshot) {
    alert(`Component Updates! State angka sebelumnya:
    ${prevState.angka}`)
    }*/
    /*componentWillUnmount() {
    alert('I will be gone :(')
    }*/
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
    return window.confirm('Haruskah Component ini di-Update?');
    }*/

    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }
    render() {
        return (
            <>
                <div>
                    <p>Mau main berapa jam?</p>
                </div>
                <button onClick={this.tambahAngka}>Tambah jam!</button>
                <br />
                <span>{this.state.angka}</span>
                <p>Masukkan nama anda!</p>
                <input onChange={this.handleChange} name='tulisan'
                    value={this.state.tulisan} />
                <br />
                <span>{this.state.tulisan} main {this.state.angka} jam</span>
            </>
        );
    }
}
export default ThirdChild;