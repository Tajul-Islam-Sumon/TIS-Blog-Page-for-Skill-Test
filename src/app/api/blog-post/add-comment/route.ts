import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server"

export async function PUT(request: NextRequest) {
    try {
        const extractData = await request.json();

        const updatedBlogPost = await prisma.post.update({
            where: {
                id: Number(extractData.id)
            },
            data: {
                comments: extractData.comments
            }
        })
        if (updatedBlogPost) {
            return NextResponse.json({
                success: true,
                message: "Comment added.",
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: "Failed to add a comment.",
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