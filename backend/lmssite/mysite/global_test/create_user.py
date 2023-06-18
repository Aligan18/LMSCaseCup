from admins.models import Admins
from course.models import Course
from custom_user.models import User
from list_modules.models import ListModules
from students.models import Students
from teachers.models import Teachers


def create_super(login):
    admin = User.objects.create_user(
        login=login,
        email=login + '@gmail.com',
        password='qwer1234',
        is_superuser=1,
        is_staff=1,
        type='1'
    )
    return admin


def create_admin(login):
    admin = User.objects.create_user(
        login=login,
        email=login + '@gmail.com',
        password='qwer1234',
        is_staff=1,
        type='2'
    )

    profile = Admins.objects.create(
        user=admin,
        name='admin',
    )

    return admin, profile


def create_student(login):
    user_student = User.objects.create_user(
        login=login,
        email=login + '@gmail.com',
        password='qwer1234',
        is_staff=0,
        type='4'
    )
    student = Students.objects.create(
        student=user_student,
        name='student',
    )
    return user_student, student


def create_teacher(login):
    user_teacher = User.objects.create_user(
        login=login,
        email=login + '@gmail.com',
        password='qwer1234',
        is_staff=0,
        type='3'
    )
    teacher = Teachers.objects.create(
        teacher=user_teacher,
        name='teacher1',
    )
    return user_teacher, teacher


def create_course(title='newTitle', teachers_id=[], students_id=[]):
    course = Course.objects.create(
        title=title,
    )
    return course


def create_list_modules(title='newTitle', deadline=''):
    return ListModules.objects.create(
        deadline=deadline,
        title=title,
    )


def category_props(title='newTitle', ):
    props = {'title': title, }
    return props


def course_props(title='newTitle', teachers_id=[], students_id=[]):
    props = {'title': title,
             'content': 'newContent',
             'teacher': teachers_id,
             'student': students_id,
             # 'category': '1',
             }
    return props


def certificates_props(title='newTitle', course_id=1, students_id=1):
    props = {'title': title,
             'course': course_id,
             'student': students_id,
             }
    return props


def comment_props(title='newTitle', course_id=1, students_id=1):
    props = {'text': title,
             'course': course_id,
             'student': students_id,
             }
    return props


def file_tasks_props(title='newTitle', course_id=1):
    props = {'title': title,
             'course': course_id,
             }
    return props


def file_tasks_answer_props(course_id=1, list_modules_id=1, students_id=1):
    props = {
        'student': students_id,
        'course': course_id,
        'list_modules': list_modules_id
    }
    return props


def file_tasks_grade_props(comment='newTitle', course_id=1, students_id=1):
    props = {
        'student': students_id,
        'course': course_id,
        'comment': comment
    }
    return props


def lectures_props(title='newTitle', course_id=1,):
    props = {
        'course': course_id,
        'title': title
    }
    return props
