export {}
declare global {
  interface ACTIVITY extends PAYLOAD {
    activity_id: number
    activity_title: string
    start_time: string
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
  export interface HOMEWORK_SCORE_UPDATED extends ACTIVITY {
    homework_score_id: number
    instructor_comment: string
    score: string
    is_updated: boolean
    unique_flag: string
    updated_time: string
    homework_id: number
  }
}
