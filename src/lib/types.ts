export type User = {
  username: string
  email: string
  password: string
  avatar: string
}

export type Post = {
  content: string
}

export type Community = {
  name: {
    humanReadable: string
    machineFriendly: string
  }
  avatar: string
  about: string
  socialMedia: {
    twitter: string
    instagram: string
    youtube: string
    facebook: string
  }
  posts: Post[]
}
