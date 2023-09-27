export function TaskReducer (state, action) {
    switch (action.type) {
        case 'loadTasks':
            return { ...state, tasks: action.payload}
        case 'createTask':
            if (action.payload) {
                let newTask = action.payload
                return [newTask,...state.tasks]
            }
            break;
        case 'updateTask':
            const updatedTasks = state.tasks.map(task => task.id === action.payload.id ? { ...task, completed:action.payload.completed } :  task)
            return {...state, tasks: updatedTasks}
        case 'deleteTask':
            break;
        default:
            break;
    }
}