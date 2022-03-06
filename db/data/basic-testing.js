require('dotenv').config()
const bcrypt = require('bcrypt')

function hashPassword (pass) {
  return bcrypt.hash(pass, 10)
}

const now = new Date()

async function getUsers () {
  return [
    { created_at: now, id: 1, email: 'migueljomartinez@gmail.com', password: await hashPassword('miguel123'), name: 'Miguel Martínez', picture: 'https://i.pravatar.cc/400?img=61' },
    { created_at: now, id: 2, email: 'carmenmartinezc13@gmail.com', password: await hashPassword('carmen123'), name: 'Carmen Martínez', picture: 'https://i.pravatar.cc/400?img=22' },
    { created_at: now, id: 3, email: 'elandmartinez@gmail.com', password: await hashPassword('andres123'), name: 'Andrés Martínez', picture: 'https://i.pravatar.cc/400?img=12' },
    { created_at: now, id: 4, email: 'crisalidacar@gmail.com', password: await hashPassword('carolina123'), name: 'Carolina Martínez', picture: 'https://i.pravatar.cc/400?img=20' },
    { created_at: now, id: 5, email: 'miguelmartinezand@gmail.com', password: await hashPassword('angel123'), name: 'Miguel Ángel Martínez', picture: 'https://i.pravatar.cc/400?img=65' }
  ]
}

function getNotes () {
  return [
    { created_at: now, id: 1, title: "Miguel's note", body: "Body description of Miguel's note", user_id: 1 },
    { created_at: now, id: 2, title: "Carmen's note", body: "Body description of Carmen's note", user_id: 2 },
    { created_at: now, id: 3, title: "Andrés's note", body: "Body description of Andrés's note", user_id: 3 },
    { created_at: now, id: 4, title: "Carolina's note", body: "Body description of Carolina's note", user_id: 4 }
  ]
}

function getTags () {
  return [
    { created_at: now, id: 1, name: 'house', color: '#ff0' },
    { created_at: now, id: 2, name: 'education', color: '#f00' },
    { created_at: now, id: 3, name: 'javascript', color: '#00f' }
  ]
}

function getNotesTags () {
  return [
    { created_at: now, id: 1, note_id: 1, tag_id: 2 },
    { created_at: now, id: 2, note_id: 1, tag_id: 3 },
    { created_at: now, id: 3, note_id: 1, tag_id: 1 },
    { created_at: now, id: 4, note_id: 2, tag_id: 1 },
    { created_at: now, id: 5, note_id: 3, tag_id: 1 }
  ]
}

function getImages () {
  return [
    { created_at: now, id: 1, url: 'https://i.pravatar.cc/400?img=5', note_id: 1 }
  ]
}

module.exports = {
  getUsers,
  getNotes,
  getTags,
  getNotesTags,
  getImages
}
