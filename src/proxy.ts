import { NextResponse, NextRequest } from 'next/server';
import getOrCreateDB from './models/server/dbSetup';
import getOrCreateStorage from './models/server/storageSetup';
 
export async function proxy(request: NextRequest) {

  await Promise.all([
    getOrCreateDB(),
    getOrCreateStorage()
  ])
  return NextResponse.next()
}
 
// proxy will NOT work where matcher path matches!
export const config = {

  /*  
  match all request paths except for the ones that start with:
  - api
  - _next/static
  - _next/image
  - favicon.com
  */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)"
  ],
}