import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  type UserRegistration,
  UserRegistrationSchema,
} from "../Interfaces/Auth"
import { useMutation } from "@tanstack/react-query"
import { fetchRegistration } from "../api/fetchAuth"
import { queryClient } from "../api/queryClient"

export function useRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserRegistration>({
    resolver: zodResolver(UserRegistrationSchema),
  })

  const registerMutation = useMutation(
    {
      mutationFn: fetchRegistration,
    },
    queryClient,
  )

  const submitRegistration = handleSubmit(
    ({ email, password, name, surname }) => {
      registerMutation.mutate({ email, password, name, surname })
      reset()
    },
  )
  return {
    register,
    errors,
    submitRegistration,
    registerMutation,
  }
}
