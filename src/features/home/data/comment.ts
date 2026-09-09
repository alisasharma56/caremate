export interface CommentAuthor {
    id: number
    full_name: string
    avatar_url: string | null
}

export interface Comment {
    id: number
    news_id: number
    parent_comment_id: number | null
    content: string
    is_deleted: boolean
    author: CommentAuthor
    reply_count: number
    created_at: string
    updated_at: string
}

export interface CommentsResponse {
    items: Comment[]
    next_cursor: string | null
}

export interface RepliesResponse {
    items: Comment[]
    next_cursor: string | null
}

export interface AddCommentPayload {
    content: string
    parent_comment_id?: number | null
}

export interface EditCommentPayload {
    commentId: number
    content: string
}