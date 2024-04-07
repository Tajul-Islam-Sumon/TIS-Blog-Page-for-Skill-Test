import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    try {
        const getAllBlogPosts = await prisma.post.findMany();
        if (getAllBlogPosts && getAllBlogPosts.length) {
            return NextResponse.json({
                success: true,
                data: getAllBlogPosts
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: 'Failed to fetch blog posts! Please, try again.'
            })
        }
    }
    catch (err) {
        console.log(err);

        return NextResponse.json({
            success: false,
            message: 'Something went wrong! Please, try again.'
        })
    }
}