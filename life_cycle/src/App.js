import React, { Component } from "react"
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)

    console.log("constructor()")

    this.state = {
      userName: "Tester1"
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState)

    return null;
  }

  componentDidMount () {
    console.log("componentDidMount()")
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log("shouldComponentUpdate()", nextProps, nextState)
    return true;
  }

  componentWillUnmount () {
    console.log("componentWillUnmount()")
  }

  componentDidUpdate (prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState)
  }

  handleClickTester2 = () => {
    console.log("handleClickTester2")

    this.setState({ userName: "Tester2" })
  }

  handleClickTester3 = () => {
    console.log("handleClickTester3")

    this.setState({ userName: "Tester3" })
  }

  render () {
    const { userName } = this.state

    return (
      <div>
        <h1>사용자명: {userName}</h1>
        <button onClick={this.handleClickTester2}>Tester2</button>
        <button onClick={this.handleClickTester3}>Tester3</button>
      </div>
    )
  }
}

export default App;
