interface CreateUserDTO {
  id?: string
  name: string
  password: string
  email: string
  driver_license: string
  avatar?: string
}

export { CreateUserDTO }
