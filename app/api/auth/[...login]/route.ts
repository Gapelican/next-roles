// app/api/auth/[...login]/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;
  
  if (username === "admin" && password === "admin") {
    console.log("success");
    
    const authData = {
      token: "token",
      permission: [
        {
          name: "admin",
          permission: 'index,read,write,delete'
        },
        {
          name: "user",
          permission: 'index,read'
        },
        {
          name: "guest",
          permission: 'index'
        }
      ]
    };

    return NextResponse.json(authData);
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}