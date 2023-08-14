export const getCompletedTasks = (tasks =[]) => {
    return tasks.filter(t => t.completed)
}

export const getUncompletedTasks = (tasks = []) => {
    return tasks.filter(t => !t.completed)
}