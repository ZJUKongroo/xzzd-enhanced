export {}
declare global{
  export interface RECENT_COURSE {
    visited_courses: COURSE[]
  }
  export interface COURSE {
    course_attributes: {
      teaching_class_name: string
    }
    course_code: string
    course_type: number
    cover: string
    current_user_is_member: boolean
    department: {
      name: string
    }
    grade: string | null
    id: number
    klass: string | null
    name: string
    org_id: number
    teaching_unit_type: string
  }
}
