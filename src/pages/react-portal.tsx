import { useState } from 'react'
import { Modal } from '../components/modal'

export function ReactPortalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Application</h1>
      <p>This is the main application content.</p>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Welcome to the Modal!</h2>
        <p>This content is rendered outside the main app's DOM hierarchy.</p>
      </Modal>
    </div>
  )
}
