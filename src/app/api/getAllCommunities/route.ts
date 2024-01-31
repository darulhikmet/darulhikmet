import getAllCommunities from '@/services/communities/getAllCommunities'

export async function GET() {
  try {
    const communities = await getAllCommunities()

    return Response.json(communities)
  } catch (error) {
    console.error('Error handling GET request:', error)
    throw new Error('Error handling GET request')
  }
}
