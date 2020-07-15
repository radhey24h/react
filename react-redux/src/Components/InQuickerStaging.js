import React, { Component } from 'react'

export default class InQuickerStaging extends Component {
    constructor() {
        super()
        this.state = {
            inquickerstaging: null,
        };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch(`https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services`);
        const res = await response.json();
        this.setState({inquickerstaging: res.data })
    }

    render() {

        console.log('ok',this.state);

        // const inQuickerData = this.state.inquickerstaging.map(item => {
        //     return <h2 key={Math.random()}>{item}</h2>
        // })

        return (
            <div>
                {/* {inQuickerData} */}
            </div>
        )
    }
}
