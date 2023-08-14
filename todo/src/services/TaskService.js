class TaskService {
    static async getTasksData () {
        try {
            const resp = await fetch(`/data/tasks.json`)
            return await resp.json()
        } catch (error) {
            console.error('Fetching data failed ... ', error)
            return []
        }
      
    }
}
export default TaskService;