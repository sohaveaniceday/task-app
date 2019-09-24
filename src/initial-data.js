const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'poop'},
    'task-2': {id: 'task-2', content: 'loop'},
    'task-3': {id: 'task-3', content: 'hoop'}
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3']
    }
  },

  columnOrder: ['column-1']
}

export default initialData