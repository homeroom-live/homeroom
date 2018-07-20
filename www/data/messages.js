import { user } from 'data/user'

export const messages = [
  {
    id: 'msg1',
    createdAt: new Date(),
    text: 'The message is heeeere and there and everywhere and long text',
    sender: user,
    is_viewer_message: false,
    is_teacher_message: false,
  },
  {
    id: 'msg2',
    createdAt: new Date(),
    text: 'Viewer message and such',
    sender: user,
    is_viewer_message: true,
    is_teacher_message: false,
  },
  {
    id: 'msg3',
    createdAt: new Date(),
    text: 'Teacher message and what have you',
    sender: user,
    is_viewer_message: false,
    is_teacher_message: true,
  },
]
