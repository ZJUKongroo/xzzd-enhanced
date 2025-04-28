import { sendMessage } from 'webext-bridge/content-script'

export function openCourse(course_id: number) {
  window.open(`https://courses.zju.edu.cn/course/${course_id}/content#/`, '_blank')
}

export function openHomework(homework_id: number) {
  window.open(`https://courses.zju.edu.cn/course/${homework_id}/content/`, '_blank')
}

export function openActivity(course_id: number, activity_id: number) {
  window.open(`https://courses.zju.edu.cn/course/${course_id}/learning-activity#/${activity_id}`, '_blank')
}

export function openTopic(course_id: number, topic_id: number) {
  window.open(`https://courses.zju.edu.cn/course/${course_id}/forum?show_sidebar=false#/topics/${topic_id}`, '_blank')
}

export async function openFile(activity_id: number, reference_id: number) {
  // interface fileRes {
  //   status: string
  //   url: string
  // }
  // const res: fileRes = JSON.parse((await axios.get(`https://courses.zju.edu.cn/api/uploads/reference/${reference_id}/blob?preview=true&refer_id=${activity_id}&refer_type=learning_activity`)).data)
  // const url = res.url
  window.open(`https://courses.zju.edu.cn/api/uploads/reference/${reference_id}/blob?preview=true&refer_id=${activity_id}&refer_type=learning_activity`, '_blank')
}

export function openOptionsPage() {
  // Send a message to the background script to open options page
  sendMessage('open-settings', {}).catch((error) => {
    console.error('Failed to open options page:', error)
  })
}
