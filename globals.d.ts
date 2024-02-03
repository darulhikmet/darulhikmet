export declare global {
  type User = {
    username: string
    email: string
    password: string
    avatar: string
  }

  type Post = {
    content: string
  }

  type Community = {
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
}
