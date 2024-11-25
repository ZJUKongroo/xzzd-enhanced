export {}
declare global {
  export interface TODO_LIST {
    todo_list: TODO[]
  }
  export interface TODO {
    course_code: string
    course_id: number
    course_name: string
    course_type: number
    end_time: string
    id: number
    is_locked: boolean
    is_student: boolean
    prerequisites: []
    title: string
    type: string
  }
}
