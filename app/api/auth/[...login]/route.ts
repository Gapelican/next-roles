// app/api/auth/[...login]/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;
  
  if (username === "admin" && password === "admin") {
    console.log("success");
    
    const authData = {
      token: "some_secure_token",
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

    // Definir o cookie
    cookies().set('auth_token', authData.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600 // 1 hora
    });

    return NextResponse.json(authData);
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}