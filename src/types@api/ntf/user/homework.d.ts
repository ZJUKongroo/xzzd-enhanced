export {}
declare global {
  interface HOMEWORK extends PAYLOAD {
    homework_id: number
    homework_title: string
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
  export interface HOMEWORK_EXPIRING_TODAY extends HOMEWORK {
    end_time: string
    submit_closed_time: string
    teaching_unit_type: string
  }
}
