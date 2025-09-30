import { useState } from 'react'

export function UseStatePage() {
  const [count, setCount] = useState(1)
  const [friends, setFriends] = useState<string[]>([])
  const [newFriend, setNewFriend] = useState('')

  function handleIncrement() {
    setCount((state) => state + 1)
  }

  function handleDecrement() {
    setCount((state) => state - 1)
  }

  function handleAddNewFriend() {
    setFriends((state) => [...state, newFriend])
    setNewFriend('')
  }

  function handleRemoveFriend(name: string) {
    setFriends((state) => state.filter((friend) => friend !== name))
  }

  return (
    <main>
      <h1>State Page</h1>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>

      <h2>Friends list</h2>
      <span>{friends.length} friends</span>
      <ul>
        {friends.map((friend) => (
          <div
            key={friend}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 8,
              maxWidth: 200,
            }}
          >
            <li>{friend}</li>
            <button type="button" onClick={() => handleRemoveFriend(friend)}>
              Remove friend
            </button>
          </div>
        ))}
      </ul>

      <div>
        <input
          type="text"
          placeholder="New friend name"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
        />
        <button type="button" onClick={handleAddNewFriend}>
          Add friend
        </button>
      </div>
    </main>
  )
}
