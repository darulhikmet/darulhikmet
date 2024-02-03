import { create } from 'zustand'

import { User } from '@/lib/types'

type UserStore = {
  user: User
  setUser: (newUser: User) => void
  resetUser: () => void
}

const initialUser: User = { username: '', email: '', password: '', avatar: '' }

export const useUserStore = create<UserStore>(set => ({
  user: initialUser,
  setUser: (newUser: User) => set({ user: newUser }),
  resetUser: () => set({ user: initialUser })
}))
