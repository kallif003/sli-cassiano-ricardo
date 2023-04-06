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
	link_type: string
}

export interface IRepertoire {
	repertoire: IRepertoires[]
}

export interface IPost {
	slug: string
	title: string
	text: string
	img_one_post: string
	alt_one_post: string
	img_two_post?: string
	alt_two_post?: string
	img_three_post?: string
	alt_three_post?: string
	type?: string | string[]
}

export interface ISlug {
	slug: string | string[]
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
	pathRepository: string
	nameButton: string
	nameIcon: string
	morningTeacher: Iteachers[]
	afternoonTeacher: Iteachers[]
	mormingTeacherSlug: string
	afternoonTeacherSlug: string
}

export interface IProjects {
	slug: string
	title: string
	text: string
	img_one_project: string
	alt_one_project: string
	img_two_project: string
	alt_two_project: string
	img_three_project: string
	alt_three_project: string
	img_four_project: string
	alt_four_project: string
}

export interface IProject {
	project: IProjects[]
}

export interface IVideos {
	slug: string
	videos: string
	title: string
	date: string
	link_type: string
}

export interface IVideo {
	videos: IVideos[]
}
