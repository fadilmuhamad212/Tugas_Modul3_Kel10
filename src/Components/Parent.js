import { Component } from "react"; import React from "react";
//import SecondChild from "./SecondChild";
import FirstChild from "./FirstChild";

class Parent extends Component {
    state = {
        firstChild: false,
        //secondChild: false
    }

    ubahKomponenMuncul = () => {
        this.setState(() => {
            return {
                firstChild: !this.state.firstChild
            }
        })
    }

    // ubahKomponenMuncul2 = () => {
    //     this.setState(() => {
    //         return {
    //             secondChild: !this.state.secondChild
    //         }
    //     })
    // }

    render() {
        return (
            <>
                <h1>#GoyangEngkol Mau Goyang Berapa Jam? #GoyangEngkol</h1>
                <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
                    <div style={{ width: "100%", height: "50%" }}>
                        <button onClick={this.ubahKomponenMuncul}>{this.state.firstChild ? 'Batal' : 'Mulai'} Goyang</button>
                        {this.state.firstChild && <FirstChild />}
                    </div>
                    {/* <div style={{ width: "100%", height:"50%" }}>
                        <button onClick={this.ubahKomponenMuncul2}>{this.state.secondChild ? 'hilangkan' : 'munculkan'} komponen!</button>
                        {this.state.secondChild && <SecondChild />}
                    </div> */}
                </div>
            </>
        );
    }
}

export default Parent;
