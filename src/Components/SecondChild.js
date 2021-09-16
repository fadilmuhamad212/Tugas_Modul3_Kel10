import React, { Component } from "react";
class SecondChild extends Component {
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
                    <p>Mau goyang berapa jam bos?</p>
                </div>
                <button onClick={this.tambahAngka}>Tambah jam booss!</button>
                <br />
                <span>{this.state.angka}</span>
                <p>Masukkan nama bos!</p>
                <input onChange={this.handleChange} name='tulisan'
                    value={this.state.tulisan} />
                <br />
                <span>{this.state.tulisan} Goyang {this.state.angka} jam</span>
            </>
        );
    }
}
export default SecondChild;