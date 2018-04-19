// export const addTodo = 'ADD_TODO'
// export const toggleTodo = 'TOGGLE_TODO'
// export const setVisibilityFilter = 'SET_VISIBILITY_FILTER'

export const visibilityFilters = {
  showAll: 'SHOW_ALL',
  showComplete: 'SHOW_COMPLETED',
  showActive: 'SHOW_ACTIVE',
};

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
});

export const setVisibilitiyFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
