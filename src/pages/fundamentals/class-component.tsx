import { type ChangeEvent, Component } from 'react'

interface User {
  name: string
  age: number
  email: string
}

export class ClassComponentPage extends Component {
  state: User = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  }

  updateName(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ name: event.target.value })
  }

  updateAge(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ age: Number(event.target.value) })
  }

  updateEmail(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Class Component Page</h1>
        <p>This is a class component example.</p>

        <h2>User Info:</h2>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Age: {this.state.age}</li>
          <li>Email: {this.state.email}</li>
        </ul>

        <h2>Update User Info:</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <div>
            <label htmlFor="name" style={{ display: 'inline-block', width: '80px' }}>
              Username
            </label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.updateName.bind(this)}
            />
          </div>

          <div>
            <label htmlFor="age" style={{ display: 'inline-block', width: '80px' }}>
              Age
            </label>
            <input
              type="number"
              id="age"
              value={this.state.age}
              onChange={this.updateAge.bind(this)}
            />
          </div>

          <div>
            <label htmlFor="email" style={{ display: 'inline-block', width: '80px' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.updateEmail.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}
