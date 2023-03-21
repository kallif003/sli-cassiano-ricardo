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

export interface INewspaper {
	slug: string
	introdution: string
	first_title_page_one: string
	first_text_page_one: string
	first_img_page_one: string
	alt_first_img_page_one: string
	second_title_page_one: string
	second_text_page_one: string
	second_img_page_one: string
	alt_second_img_page_one: string
	first_title_page_two: string
	first_text_page_two: string
	first_img_page_two: string
	alt_first_img_page_two: string
	second_title_page_two: string
	second_text_page_two: string
	second_img_page_two: string
	alt_second_img_page_two: string
	edition: string
	responsible: string
}

export interface INews {
	news: INewspaper[]
}
