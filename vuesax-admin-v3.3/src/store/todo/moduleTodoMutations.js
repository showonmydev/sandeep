/*=========================================================================================
  File Name: moduleTodoMutations.js
  Description: Todo Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


export default {
    ADD_TODO(state, taskObj) {
        const newTodo = Object.assign({}, taskObj);
        state.todoArray.push(newTodo);
    },
    TOGGLE_IS_DONE(state, payload) {
        state.todoArray[payload.id].isDone = payload.value;
    },
    TOGGLE_IS_IMPORTANT(state, payload) {
        state.todoArray[payload.id].isImportant = payload.value;
    },
    TOGGLE_IS_STARRED(state, payload) {
        state.todoArray[payload.id].isStarred = payload.value;
    },
    UPDATE_TAGS(state, payload) {
        state.todoArray[payload.id].tags = payload.newTags;
    },
    MOVE_TO_TRASH(state, payload) {
        state.todoArray[payload.id].isTrashed = payload.value;
    },
    APPLY_TODO_FILTER(state, filterName) {
        state.todoFilter = filterName;
    },
    SET_TODO_SEARCH_QUERY(state, query) {
        state.todoSearchQuery = query;
    },
    SET_TODO_TITLE(state, payload) {
        state.todoArray[payload.id].title = payload.title;
    },
    SET_TODO_DESC(state, payload) {
        state.todoArray[payload.id].desc = payload.desc;
    },
}