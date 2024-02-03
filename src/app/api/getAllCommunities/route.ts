import getAllCommunities from '@/services/community/getAllCommunities'

export async function GET() {
  try {
    const communities = await getAllCommunities()

    return Response.json(communities)
  } catch (error) {
    console.error('Error handling GET request:', error)
    throw error
  }
}
