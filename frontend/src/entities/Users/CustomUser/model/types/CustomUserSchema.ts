import { IToken } from 'entities/Authorization/types'
import { IStudentData } from 'entities/Users/Student/types/Student/Student.type'

export type IUserType = 'student' | 'teacher' | 'admin' | 'super-admin'

export interface ICustomUserSchema {
	token: IToken
	userType: IUserType
	userInfo: IStudentData
}
