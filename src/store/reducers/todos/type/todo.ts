export interface todoItem {
    importance: boolean
    title: string
    description: string
    id: number
    timestamps: {
        createdOn: Date
        modifiedOn: Date
        completedOn: {
            date: Date
            state: boolean
        }
    }

}

export interface actionInterface {
    type: string
    id: number
    todo: todoItem
}

export interface IChangeTodo {
    id: number
    todo: todoItem
}