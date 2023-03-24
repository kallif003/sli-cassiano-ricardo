import { ReactNode } from "react"

export interface IConfig {
	apiKey: string
	authDomain: string
	projectId: string
	storageBucket: string
	messagingSenderId: string
	appId: string
}

export interface Props {
	children: ReactNode
}

export interface AuthContextType {
	AuthStateChanged: Function
	signin: Function
	logout: Function
	setLoading: Function
	setDisabled: Function
	setErrorMsg: Function
	loading: boolean
	disabled: boolean
	errorMsg: string
}

export interface FirebaseContextType {
	firebase: any
}

export interface IRepertoires {
	lyrics: string
	slug: string
	video: string
	title: string
}

export interface IRepertoire {
	repertoire: IRepertoires[]
}

export interface Iteachers {
	slug: string
	teacherImg: string
	teacherName: string
	alt: string
}

export interface Teachers {
	mormingTeacher: Iteachers[]
	afternoonTeacher: Iteachers[]
}

export interface IText {
	id: string
	paragraph: string
}

export interface ITeachersArea {
	lesson: string
	pathProject: string
	pathRepository: string
	nameButton: string
	nameIcon: string
	morningTeacher: Iteachers[]
	afternoonTeacher: Iteachers[]
}

export interface IProjects {
	slug: string
	title: string
	text: string
}

export interface IProject {
	project: IProjects[]
}
