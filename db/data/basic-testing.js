require('dotenv').config()
const bcrypt = require('bcrypt')

function hashPassword (pass) {
  return bcrypt.hash(pass, 10)
}

const now = new Date()

async function getUsers () {
  return [
    /* id: 1 */{ created_at: now, email: 'migueljomartinez@gmail.com', password: await hashPassword('miguel123'), name: 'Miguel Martínez', picture: 'https://i.pravatar.cc/400?img=61' },
    /* id: 2 */ { created_at: now, email: 'carmenmartinezc13@gmail.com', password: await hashPassword('carmen123'), name: 'Carmen Martínez', picture: 'https://i.pravatar.cc/400?img=22' },
    /* id: 3 */{ created_at: now, email: 'elandmartinez@gmail.com', password: await hashPassword('andres123'), name: 'Andrés Martínez', picture: 'https://i.pravatar.cc/400?img=12' },
    /* id: 4 */{ created_at: now, email: 'crisalidacar@gmail.com', password: await hashPassword('carolina123'), name: 'Carolina Martínez', picture: 'https://i.pravatar.cc/400?img=20' },
    /* id: 5 */{ created_at: now, email: 'miguelmartinezand@gmail.com', password: await hashPassword('angel123'), name: 'Miguel Ángel Martínez', picture: 'https://i.pravatar.cc/400?img=65' }
  ]
}

function getNotes () {
  return [
    /* id: 1 */{ created_at: now, title: "Miguel's note", body: "Body description of Miguel's note", user_id: 1 },
    /* id: 2 */{ created_at: now, title: "Carmen's note", body: "Body description of Carmen's note", user_id: 2 },
    /* id: 3 */{ created_at: now, title: "Andrés's note", body: "Body description of Andrés's note", user_id: 3 },
    /* id: 4 */{ created_at: now, title: "Carolina's note", body: "Body description of Carolina's note", user_id: 4 }
  ]
}

function getTags () {
  return [
    /* id: 1 */{ created_at: now, name: 'house', color: '#ff0' },
    /* id: 2 */{ created_at: now, name: 'education', color: '#f00' },
    /* id: 3 */{ created_at: now, name: 'javascript', color: '#00f' }
  ]
}

function getNotesTags () {
  return [
    /* id: 1 */{ created_at: now, note_id: 1, tag_id: 2 },
    /* id: 2 */{ created_at: now, note_id: 1, tag_id: 3 },
    /* id: 3 */{ created_at: now, note_id: 1, tag_id: 1 },
    /* id: 4 */{ created_at: now, note_id: 2, tag_id: 1 },
    /* id: 5 */{ created_at: now, note_id: 3, tag_id: 1 }
  ]
}

function getImages () {
  return [
    { created_at: now, url: 'https://i.pravatar.cc/400?img=5', note_id: 1 }
  ]
}

module.exports = {
  getUsers,
  getNotes,
  getTags,
  getNotesTags,
  getImages
}
