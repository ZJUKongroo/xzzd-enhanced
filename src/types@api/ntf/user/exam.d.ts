export {}

declare global{
  interface EXAM extends PAYLOAD {
    activity_id: number
    activity_type: string
    exam_id: number
    exam_title: string
    start_time: string
    end_time: string
    teaching_unit_type: string
  }
  export interface EXAM_SCORE_UPDATED extends EXAM {
    exam_score_id: number
    is_updated: boolean
    unique_flag: string
    updated_time: string
  }

  export interface EXAM_SUBMIT_STARTED extends EXAM {}

  export interface EXAM_EXPIRING extends EXAM {}

  export interface EXAM_WILL_START extends EXAM {}

  export interface EXAM_OPENED extends EXAM {}
}
