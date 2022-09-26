import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import connectMongo from './utils/connectMongo'

export const middleware = async (request: NextRequest) => {
    console.log('hey there')
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/:path*',
}
