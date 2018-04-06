// export const addTodo = 'ADD_TODO'
// export const toggleTodo = 'TOGGLE_TODO'
// export const setVisibilityFilter = 'SET_VISIBILITY_FILTER'

export const visivilityFilters = {
  showAll: 'SHOW_ALL',
  showComplete: 'SHOW_COMPLETED',
  showActive: 'SHOW_ACTIVE',
};

export function toggleTodo(index) {
  return { type: 'TOGGLE_TODO', index };
}

export function addTodo(text) {
  return { type: 'ADD_TODO', text };
}

export function setVisibilitiyFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter };
}
