import { connectToDatabase } from '@/lib/mongodb'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(req) {
  try {
    const { username, password } = await req.json()
    const { db } = await connectToDatabase()

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ username })
    if (existingUser) {
      return NextResponse.json({ error: 'Username already exists' }, { status: 400 })
    }

    // Hash the password
    const hashedPassword = password

    // Insert the new user
    await db.collection('users').insertOne({
      username,
      password: hashedPassword,
    })

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(      { 
      error: 'An error occurred',
      details: error.message 
    }, 
    { status: 500 })
  }
}