export {}
declare global{
  export interface NOTIFICATIONS {
    unread_count: number
    total_count: number
    notifications: NOTIFICATION[]
  }
  export interface NOTIFICATION {
    id: string
    type: 'activity_expiring' | 'topic_create' | 'has_recommend_homework' |
    'homework_opened_for_submission' | 'homework_expiring_today' |
    'exam_score_updated' | 'exam_submit_started' | 'exam_expiring' |
    'exam_will_start' | 'homework_score_updated' | string
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
}
