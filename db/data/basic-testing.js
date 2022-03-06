const users = [
  { id: 1, email: 'migueljomartinez@gmail.com', password: 'miguel123', name: 'Miguel Martínez', picture: 'https://i.pravatar.cc/400?img=61' },
  { id: 2, email: 'carmenmartinezc13@gmail.com', password: 'carmen123', name: 'Carmen Martínez', picture: 'https://i.pravatar.cc/400?img=22' },
  { id: 3, email: 'elandmartinez@gmail.com', password: 'andres123', name: 'Andrés Martínez', picture: 'https://i.pravatar.cc/400?img=12' },
  { id: 4, email: 'crisalidacar@gmail.com', password: 'carolina123', name: 'Carolina Martínez', picture: 'https://i.pravatar.cc/400?img=20' },
  { id: 5, email: 'miguelmartinezand@gmail.com', password: 'angel123', name: 'Miguel Ángel Martínez', picture: 'https://i.pravatar.cc/400?img=65' }
]

const notes = [
  { id: 1, title: "Miguel's note", body: "Body description of Miguel's note", user_id: 1 },
  { id: 2, title: "Carmen's note", body: "Body description of Carmen's note", user_id: 2 },
  { id: 3, title: "Andrés's note", body: "Body description of Andrés's note", user_id: 3 },
  { id: 4, title: "Carolina's note", body: "Body description of Carolina's note", user_id: 4 }
]

const tags = [
  { id: 1, name: 'house', color: '#ff0' },
  { id: 2, name: 'education', color: '#f00' },
  { id: 3, name: 'javascript', color: '#00f' }
]

const notesTags = [
  { id: 1, note_id: 1, tag_id: 2 },
  { id: 2, note_id: 1, tag_id: 3 },
  { id: 3, note_id: 1, tag_id: 1 },
  { id: 4, note_id: 2, tag_id: 1 },
  { id: 5, note_id: 3, tag_id: 1 }
]

const images = [
  { id: 1, url: 'https://i.pravatar.cc/400?img=5', note_id: 1 }
]

module.exports = { users, notes, tags, notesTags, images }
