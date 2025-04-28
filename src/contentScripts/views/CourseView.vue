<script lang="ts" setup>
import CourseCell from '../components/CourseCell.vue'
import axios from '~/request'

const courses = ref<MY_COURSE>({
  courses: [],
  end: 0,
  page: 0,
  page_size: 0,
  pages: 0,
  start: 0,
  total: 0,
})

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// function handleSizeChange(val: number) {
//   getCourse(1, val)
// }
function handleCurrentChange(val: number) {
  getCourse(val, pageSize.value)
}

async function getCourse(page: number, page_size: number) {
  const conditions = { status: ['ongoing', 'notStarted'], keyword: '', classify_type: 'recently_started', display_studio_list: false }
  const fields = 'id,name,course_code,department(id,name),grade(id,name),klass(id,name),course_type,cover,small_cover,start_date,end_date,is_started,is_closed,academic_year_id,semester_id,credit,compulsory,second_name,display_name,created_user(id,name),org(is_enterprise_or_organization),org_id,public_scope,audit_status,audit_remark,can_withdraw_course,imported_from,allow_clone,is_instructor,is_team_teaching,is_default_course_cover,archived,instructors(id,name,email,avatar_small_url),course_attributes(teaching_class_name,is_during_publish_period,copy_status,tip,data,audience_type),user_stick_course_record(id),classroom_schedule'
  const res = JSON.parse((await axios.get('/api/my-courses', {
    params: {
      conditions,
      fields,
      showScorePassedStatus: false,
      page,
      page_size,
    },
  })).data) as MY_COURSE
  courses.value.courses = res.courses
  total.value = res.total
}

onBeforeMount(() => {
  getCourse(1, pageSize.value)
})
</script>

<template>
  <div class="course-container">
    <div class="course-cell-wrapper">
      <CourseCell v-for="(course, index) in courses.courses" :key="index" :data="course" />
    </div>
    <div class="course-footer">
      <!-- <v-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      /> -->
      <v-pagination
        v-model="currentPage"
        :length="Math.ceil(total / pageSize)"
        :total-visible="7"
        @update:model-value="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style>
.course-container{
  padding: 15px;
  width: 100%;
  height: 100%;
  overflow: hidden auto;
}
.course-cell-wrapper{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.course-footer{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}
</style>
