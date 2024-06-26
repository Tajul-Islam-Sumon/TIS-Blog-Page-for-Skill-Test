import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const extractQuery = url.searchParams.get('query');

        const searchPostList = await prisma.post.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: extractQuery || ''
                        }
                    },
                    {
                        description: {
                            contains: extractQuery || ''
                        }
                    }
                ]
            }
        })
        if (searchPostList) {
            return NextResponse.json({
                success: true,
                data: searchPostList
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: 'Failed to search the blog.'
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