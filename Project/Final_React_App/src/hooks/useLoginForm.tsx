import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../api/queryClient"
import { fetchLogin } from "../api/fetchAuth"
import { CreateLoginSchema, type LoginSchema } from "../Interfaces/Auth"
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../state/store"
import { logIn, closeModal, setFirstLogin } from "../state/userSlice"

export function useLoginForm() {
  const dispatch = useDispatch<AppDispatch>()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(CreateLoginSchema),
  })

  const loginMutation = useMutation(
    {
      mutationFn: fetchLogin,
      onSuccess() {
        dispatch(setFirstLogin())
        dispatch(logIn())
        dispatch(closeModal())
        queryClient.invalidateQueries({ queryKey: ["login"] })
      },
    },
    queryClient,
  )

  const submitLogin = handleSubmit(({ email, password }) => {
    loginMutation.mutate({ email, password })
    reset()
  })

  return {
    submitLogin,
    errors,
    register,
    loginMutation,
  }
}
