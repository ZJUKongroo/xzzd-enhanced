export {}
declare global{
  export interface NOTIFICATIONS {
    unread_count: number
    notifications: NOTIFICATION[]
  }
  export interface NOTIFICATION {
    id: string
    type: 'activity_expiring' | 'topic_create' | 'has_recommend_homework' | 'homework_opened_for_submission' | 'activity_opened' | string
    top: boolean
    timestamp: number
    payload: PAYLOAD
  }
  export interface PAYLOAD {
    course_id: number
    course_name: string
    created_at: string
    org_id: number
  }
  interface HOMEWORK extends PAYLOAD {
    homework_id: number
    homework_title: string
  }
  interface ACTIVITY extends PAYLOAD {
    activity_id: number
    activity_title: string
    start_time: string
  }
  export interface ACTIVITY_EXPIRING extends ACTIVITY {
    activity_type: string
    end_time: string
    lesson_key: string
    link: string
    uploads: UPLOAD[]
  }
  export interface ACTIVITY_OPENED extends ACTIVITY {
    activity_type: string
    end_time: string
    lesson_key: string
    link: string
    uploads: UPLOAD[]
  }
  export interface TOPIC_CREATE extends ACTIVITY {
    topic_content: string
    topic_id: number
    topic_title: string
    user_name: string
  }
  export interface HAS_RECOMMEND_HOMEWORK extends HOMEWORK {
    inter_review_named: boolean
    inter_score_submission: boolean
    submission_id: number
  }
  export interface HOMEWORK_IS_RECOMMENDED extends HOMEWORK {
    submission_id: number
  }
  export interface HOMEWORK_OPENED_FOR_SUBMISSION extends HOMEWORK {
    start_time: string
    submit_time: string
    teaching_unit_type: string
  }
  interface UPLOAD {
    file_name: string
    file_size: number
    id: number
    name: string
    reference_id: number
    type: string
    videos: Array
  }
}
