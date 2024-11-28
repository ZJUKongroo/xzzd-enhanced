// import { useRouter } from "vue-router";
// const router = useRouter();
import axios from '~/request'

export function openCourse(course_id: number) {
  window.location.href = `https://courses.zju.edu.cn/course/${course_id}/content#/`
}

export function openHomework(homework_id: number) {
  window.location.href = `https://courses.zju.edu.cn/course/${homework_id}/content/`
}

export function openActivity(course_id: number, activity_id: number) {
  window.location.href = `https://courses.zju.edu.cn/course/${course_id}/learning-activity#/${activity_id}`
}

export function openTopic(course_id: number, topic_id: number) {
  window.location.href = `https://courses.zju.edu.cn/course/${course_id}/forum?show_sidebar=false#/topics/${topic_id}`
}

export async function openFile(activity_id: number, reference_id: number) {
  interface fileRes {
    status: string
    url: string
  }
  const res: fileRes = JSON.parse((await axios.get(`https://courses.zju.edu.cn/api/uploads/reference/document/${reference_id}/url?preview=true&refer_id=${activity_id}&refer_type=learning_activity`)).data)
  const url = res.url
  window.open(url, '_blank')
}
