import type { ReactNode } from "react"
import { z } from "zod"

export const CreateLoginSchema = z.object({
  email: z
    .string()
    .min(8, "Недостаточно символов")
    .regex(/^\S+@\S+\.\S+$/, "Невалидный e-mail"),
  password: z
    .string()
    .min(6, "Недостаточно символов")
    .regex(/^\S*$/, "Невалидный пароль"),
})

export type LoginSchema = z.infer<typeof CreateLoginSchema>

export const UserLoginSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export type UserLogin = z.infer<typeof UserLoginSchema>

export const UserRegistrationSchema = z.object({
  email: z
    .string()
    .min(8, "Недостаточно символов")
    .regex(/^\S+@\S+\.\S+$/, "Невалидный e-mail"),
  password: z
    .string()
    .min(6, "Недостаточно символов")
    .regex(/^\S*$/, "Невалидный пароль"),
  name: z
    .string()
    .min(6, "Недостаточно символов")
    .regex(/^\S*$/, "Невалидный пароль"),
  surname: z
    .string()
    .min(6, "Недостаточно символов")
    .regex(/^\S*$/, "Невалидный пароль"),
})

export type UserRegistration = z.infer<typeof UserRegistrationSchema>

export interface ILayoutProps {
  children: ReactNode
}

export const CreateProfileSchema = z.object({
  favorites: z.optional(z.array(z.string().nullable())),
  surname: z.string(),
  name: z.string(),
  email: z.string(),
})

export type ProfileSchema = z.infer<typeof CreateProfileSchema>

export interface AccountTabs {
  tab: boolean
}

export interface AccInfo {
  accInfo: any
}
