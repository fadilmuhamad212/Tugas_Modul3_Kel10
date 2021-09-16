import React, { Component } from "react";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";
class FirstChild extends Component {
    state = {
        angka: 0,
        tulisan: '',
        triggerSecChild: false,
        triggerThirdChild: false
    }
    // componentDidMount() {
    // alert(`Mount triggered!`)
    // }
    /*componentDidUpdate(prevProps, prevState, snapshot) {
    alert(`Component Updates! State angka sebelumnya:
    ${prevState.angka}`)
    }*/
    // componentWillUnmount() {
    // alert('I will be gone :(')
    // }
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
    return window.confirm('Haruskah Component ini di-Update?');
    }*/

    // tambahAngka = () => {
    //     this.setState((state) => { return { angka: state.angka + 1 } })
    // }
    // handleChange = (event) => {
    //     const { name, value } = event.target
    //     this.setState((state) => {
    //         return {
    //             [name]: value
    //         }
    //     })
    // }

    ubahKomponenMuncul1 = () => {
        this.setState(() => {
            return {
                triggerSecChild: !this.state.triggerSecChild
            }
        })
    }

    ubahKomponenMuncul2 = () => {
        this.setState(() => {
            return {
                triggerThirdChild: !this.state.triggerThirdChild
            }
        })
    }
    tutupKomponen = () => {
        alert('Goyang berhasil!')
        this.setState(() => {
            return {
                triggerThirdChild: false,
                triggerSecChild: false,
            }
        })
    }
    render() {
        return (
            <>
                <div style={{ display: "flex", width: "100vw", justifyContent: "space-evenly" }}>
                    <div>
                        <div>
                            <p>Bilik Goyang 1</p>
                        </div>
                        <button onClick={this.ubahKomponenMuncul1}>{this.state.triggerSecChild ? 'Tutup' : 'Buka'} Bilik!</button>
                        {this.state.triggerSecChild && <SecondChild />}
                        <br />

                    </div>
                    <div>
                        <div>
                            <p>Bilik Goyang 2</p>
                        </div>
                        <button onClick={this.ubahKomponenMuncul2}>{this.state.triggerThirdChild ? 'Tutup' : 'Buka'} Bilik!</button>
                        {this.state.triggerThirdChild && <ThirdChild />}
                    </div>
                </div>
                <div style={{ display: "flex", width: "100vw", justifyContent: "space-evenly" }}>
                    <button onClick={this.tutupKomponen}>Engkol Dulu Bos!!!!</button>
                </div>
            </>
        );
    }
}
export default FirstChild;
