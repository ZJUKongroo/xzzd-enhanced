export {}
declare global {
  export interface MY_COURSE {
    courses: COURSE[]
    end: number
    page: number
    page_size: number
    pages: number
    start: number
    total: number
  }
  export interface COURSE {
    academic_year_id: number
    allow_clone: boolean
    archived: boolean
    audit_remark: null
    audit_status: string
    can_withdraw_course: boolean
    classroom_schedule: null
    compulsory: null
    course_attributes: COURSE_ATTRIBUTES
    course_code: string
    course_type: number
    cover: string
    created_user: {
      id: number
      name: string
    }
    credit: null
    credit_state: null
    department: {
      id: number
      name: string
    }
    display_name: string
    end_date: null
    grade: null
    id: number
    imported_from: string
    instructors: INSTRUCTOR[]
    is_closed: boolean
    is_default_course_cover: boolean
    is_instructor: boolean
    is_mute: boolean
    is_started: boolean
    is_team_teaching: boolean
    klass: null
    name: string
    org: {
      is_enterprise_or_organization: boolean
    }
    org_id: number
    public_scope: string
    second_name: string | null
    semester_id: number
    small_cover: string
    start_date: string
    url: string
    user_stick_course_record: null
  }
  export interface COURSE_ATTRIBUTES {
    audience_type: 'undergraduate'
    copy_status: null
    data: object
    is_during_publish_period: false
    published: true
    teaching_class_name: '\u5F85\u5B9A'
    tip: null
  }
  export interface INSTRUCTOR {
    avatar_small_url: string
    email: string | null
    id: number
    name: string
  }
}
