from django.contrib import admin
from django.urls import path, include
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from admins.views import AdminsViewList, AdminsRetrieveUpdateDestroyView
from categories.views import CategoriesViewCreate, CategoriesViewList, CategoriesViewRetrieve, \
    CategoriesViewRetrieveUpdateDestroy
from certificates.views import CertificatesViewCreate, CertificatesViewList, CertificatesView, CertificatesViewDestroy
from comments.views import CommentsViewCreate, CommentsViewList, \
    CommentsViewRetrieveUpdateDestroy
from course.views import CourseViewCreate, CourseViewList, CourseViewRetrieve,  \
    CourseViewDestroy, CourseViewUpdate
from custom_user.views import ActivateUser
from file_tasks.views import FileTasksViewCreate, FileTasksViewList, FileTasksViewRetrieve, \
    FileTasksViewRetrieveUpdateDestroy, FileTasksGradeViewCreate, FileTasksGradeViewList, FileTasksGradeViewRetrieve, \
    FileTasksGradeViewRetrieveUpdateDestroy, FileTasksAnswerViewCreate, FileTasksAnswerViewList, \
    FileTasksAnswerViewRetrieve, FileTasksAnswerViewRetrieveUpdateDestroy
from lectures.views import LecturesViewCreate, LecturesViewList, LecturesViewRetrieve, LecturesViewRetrieveUpdateDestroy
from list_modules.views import ListModulesViewCreate, ListModulesViewList, ListModulesViewRetrieve, \
    ListModulesViewRetrieveUpdateDestroy
from students.views import StudentsViewAll, StudentsCourseViewAll, StudentsViewRetrieve, \
    StudentsViewRetrieveUpdateDestroy
from teachers.views import TeachersViewList, TeachersViewRetrieve, TeachersViewRetrieveUpdateDestroy
from test_tasks.views import TestTasksViewCreate, TestTasksViewList, TestTasksViewRetrieve, \
    TestTasksViewRetrieveUpdateDestroy, TestQuestionAnswerViewCreate, TestQuestionAnswerViewList, \
    TestQuestionAnswerViewRetrieve, TestQuestionAnswerViewRetrieveUpdateDestroy, TestAnswerOptionsViewAllCreate, \
    TestAnswerOptionsViewList, TestAnswerOptionsViewRetrieve, TestAnswerOptionsViewUpdateDestroy, \
    TestGradeViewAllCreate, TestGradeViewList, TestGradeViewRetrieve, TestGradeViewRetrieveUpdateDestroy

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('accounts/activate/<uid>/<token>', ActivateUser.as_view({'get': 'activation'}), name='activation'),

    path('api/v1/admins/list/', AdminsViewList.as_view()),
    path('api/v1/admins/rud/<int:pk>', AdminsRetrieveUpdateDestroyView.as_view()),

    path('api/v1/categories/create/', CategoriesViewCreate.as_view()),
    path('api/v1/categories/list/', CategoriesViewList.as_view()),
    path('api/v1/categories/id/<int:pk>', CategoriesViewRetrieve.as_view()),
    path('api/v1/categories/rud/<int:pk>', CategoriesViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/certificates/create/', CertificatesViewCreate.as_view()),
    path('api/v1/certificates/list/', CertificatesViewList.as_view()),
    path('api/v1/certificates/id/<int:pk>', CertificatesView.as_view()),
    path('api/v1/certificates/delete/<int:pk>', CertificatesViewDestroy.as_view()),

    path('api/v1/comments/create/', CommentsViewCreate.as_view()),
    path('api/v1/comments/list/', CommentsViewList.as_view()),
    path('api/v1/comments/rud/<int:pk>', CommentsViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/course/create/', CourseViewCreate.as_view(), name="course-create"),
    path('api/v1/course/list/', CourseViewList.as_view(), name="course-list"),
    path('api/v1/course/id/<int:pk>', CourseViewRetrieve.as_view(), name="course-id"),
    path('api/v1/course/update/<int:pk>', CourseViewUpdate.as_view(), name="course-update"),
    path('api/v1/course/delete/<int:pk>', CourseViewDestroy.as_view(), name="course-delete"),

    path('api/v1/file_tasks/create/', FileTasksViewCreate.as_view()),
    path('api/v1/file_tasks/list/', FileTasksViewList.as_view()),
    path('api/v1/file_tasks/id/<int:pk>', FileTasksViewRetrieve.as_view()),
    path('api/v1/file_tasks/rud/<int:pk>', FileTasksViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/file_tasks_grade/create/', FileTasksGradeViewCreate.as_view()),
    path('api/v1/file_tasks_grade/list/', FileTasksGradeViewList.as_view()),
    path('api/v1/file_tasks_grade/id/<int:pk>', FileTasksGradeViewRetrieve.as_view()),
    path('api/v1/file_tasks_grade/rud/<int:pk>', FileTasksGradeViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/file_tasks_answer/create/', FileTasksAnswerViewCreate.as_view()),
    path('api/v1/file_tasks_answer/list/', FileTasksAnswerViewList.as_view()),
    path('api/v1/file_tasks_answer/id/<int:pk>', FileTasksAnswerViewRetrieve.as_view()),
    path('api/v1/file_tasks_answer/rud/<int:pk>', FileTasksAnswerViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/lectures/create/', LecturesViewCreate.as_view(), name="lectures-create"),
    path('api/v1/lectures/list/', LecturesViewList.as_view()),
    path('api/v1/lectures/id/<int:pk>', LecturesViewRetrieve.as_view()),
    path('api/v1/lectures/rud/<int:pk>', LecturesViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/list_modules/create/', ListModulesViewCreate.as_view()),
    path('api/v1/list_modules/list/', ListModulesViewList.as_view()),
    path('api/v1/list_modules/id/<int:pk>', ListModulesViewRetrieve.as_view()),
    path('api/v1/list_modules/rud/<int:pk>', ListModulesViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/students/list/', StudentsViewAll.as_view()),
    path('api/v1/students_course/list/', StudentsCourseViewAll.as_view()),
    path('api/v1/students/id/<int:pk>', StudentsViewRetrieve.as_view()),
    path('api/v1/students/rud/<int:pk>', StudentsViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/teachers/list/', TeachersViewList.as_view()),
    path('api/v1/teachers/id/<int:pk>', TeachersViewRetrieve.as_view()),
    path('api/v1/teachers/rud/<int:pk>', TeachersViewRetrieveUpdateDestroy.as_view()),

    path('api/v1/test_tasks/create/', TestTasksViewCreate.as_view()),
    path('api/v1/test_tasks/list/', TestTasksViewList.as_view()),
    path('api/v1/test_tasks/id/<int:pk>', TestTasksViewRetrieve.as_view()),
    path('api/v1/test_tasks/rud/<int:pk>', TestTasksViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/test_question_answer/create/', TestQuestionAnswerViewCreate.as_view()),
    path('api/v1/test_question_answer/list/', TestQuestionAnswerViewList.as_view()),
    path('api/v1/test_question_answer/id/<int:pk>', TestQuestionAnswerViewRetrieve.as_view()),
    path('api/v1/test_question_answer/rud/<int:pk>', TestQuestionAnswerViewRetrieveUpdateDestroy.as_view()),
    path('api/v1/test_answer_options/create/', TestAnswerOptionsViewAllCreate.as_view()),
    path('api/v1/test_answer_options/list/', TestAnswerOptionsViewList.as_view()),
    path('api/v1/test_answer_options/id/<int:pk>', TestAnswerOptionsViewRetrieve.as_view()),
    path('api/v1/test_answer_options/rud/<int:pk>', TestAnswerOptionsViewUpdateDestroy.as_view()),
    path('api/v1/test_tasks_grade/create/', TestGradeViewAllCreate.as_view()),
    path('api/v1/test_tasks_grade/list/', TestGradeViewList.as_view()),
    path('api/v1/test_tasks_grade/id/<int:pk>', TestGradeViewRetrieve.as_view()),
    path('api/v1/test_tasks_grade/rud/<int:pk>', TestGradeViewRetrieveUpdateDestroy.as_view()),

]
