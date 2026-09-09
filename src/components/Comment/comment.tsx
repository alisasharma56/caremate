import { useRef, useState } from 'react'
import { Send, MoreHorizontal, X } from 'lucide-react'
import useComments from '@/features/home/hooks/Comments/useComments.ts'
import useReplies from '@/features/home/hooks/Comments/useReplies'
import useAddComment from '@/features/home/hooks/Comments/useAddComment'
import useEditComment from '@/features/home/hooks/Comments/useEditComment'
import useDeleteComment from '@/features/home/hooks/Comments/useDeleteComment'
import type { Comment } from '@/features/home/data/comment'
import {
    section,
    statsRow,
    commentList,
    commentRow,
    replyList,
    commentAvatar,
    commentBody,
    commentHeaderRow,
    commentAuthorName,
    commentTime,
    menuWrap,
    menuButton,
    menuDropdown,
    menuItem,
    menuItemDanger,
    commentBubble,
    commentBubbleHighlighted,
    commentText,
    metaRow,
    metaAction,
    viewMoreReplies,
    viewAllComments,
    replyBanner,
    replyBannerClose,
    composerWrap,
    composer,
    composerInput,
    composerSend,
    editWrap,
    editTextarea,
    editActions,
    editSaveButton,
    editCancelButton,
} from './Comment.css.ts'

interface CommentsSectionProps {
    newsId: number
}

const avatarPalette = ['#3B82F6', '#22C55E', '#F97316', '#EF4444', '#EAB308']

function avatarColor(seed: number) {
    return avatarPalette[seed % avatarPalette.length]
}

function timeAgo(dateStr: string) {
    const diffMs = Date.now() - new Date(dateStr).getTime()
    const minutes = Math.floor(diffMs / 60000)
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h`
    const days = Math.floor(hours / 24)
    return `${days}d`
}

interface CommentRowProps {
    comment: Comment
    isReply?: boolean
    editingId: number | null
    editText: string
    openMenuId: number | null
    replyingToId: number | null
    onStartReply: (id: number, author: string) => void
    onStartEdit: (comment: Comment) => void
    onSaveEdit: (id: number) => void
    onCancelEdit: () => void
    onDelete: (id: number) => void
    onCopy: (text: string) => void
    onToggleMenu: (id: number | null) => void
    onEditTextChange: (text: string) => void
    isSaving: boolean
}

function CommentRow({
                        comment,
                        isReply,
                        editingId,
                        editText,
                        openMenuId,
                        replyingToId,
                        onStartReply,
                        onStartEdit,
                        onSaveEdit,
                        onCancelEdit,
                        onDelete,
                        onCopy,
                        onToggleMenu,
                        onEditTextChange,
                        isSaving,
                    }: CommentRowProps) {
    const isEditing = editingId === comment.id
    const isHighlighted = replyingToId === comment.id
    const [repliesOpen, setRepliesOpen] = useState(false)
    const { data: repliesData, isLoading: repliesLoading } = useReplies(comment.id, repliesOpen)
    const replies = repliesData?.items ?? []

    return (
        <div>
            <div className={commentRow}>
                <span className={commentAvatar} style={{ background: avatarColor(comment.author.id) }}>
                    {comment.author.full_name.charAt(0).toUpperCase()}
                </span>
                <div className={commentBody}>
                    <div className={commentHeaderRow}>
                        <span className={commentAuthorName}>{comment.author.full_name}</span>
                        <span className={commentTime}>{timeAgo(comment.created_at)}</span>
                        <span className={menuWrap}>
                            <button type="button" className={menuButton} onClick={() => onToggleMenu(openMenuId === comment.id ? null : comment.id)}>
                                <MoreHorizontal size={16} />
                            </button>
                            {openMenuId === comment.id ? (
                                <div className={menuDropdown}>
                                    <button type="button" className={menuItem} onClick={() => onStartEdit(comment)}>Edit comment</button>
                                    <button type="button" className={`${menuItem} ${menuItemDanger}`} onClick={() => onDelete(comment.id)}>Delete comment</button>
                                    <button type="button" className={menuItem} onClick={() => onCopy(comment.content)}>Copy text</button>
                                </div>
                            ) : null}
                        </span>
                    </div>

                    {isEditing ? (
                        <div className={editWrap}>
                            <textarea className={editTextarea} value={editText} onChange={(e) => onEditTextChange(e.target.value)} />
                            <div className={editActions}>
                                <button type="button" className={editSaveButton} onClick={() => onSaveEdit(comment.id)} disabled={isSaving}>
                                    Save
                                </button>
                                <button type="button" className={editCancelButton} onClick={onCancelEdit}>Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={`${commentBubble} ${isHighlighted ? commentBubbleHighlighted : ''}`}>
                                <p className={commentText}>{comment.content}</p>
                            </div>
                            <div className={metaRow}>
                                {!isReply ? (
                                    <button type="button" className={metaAction} onClick={() => onStartReply(comment.id, comment.author.full_name)}>
                                        Reply
                                    </button>
                                ) : null}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {!isReply && comment.reply_count > 0 ? (
                <>
                    {!repliesOpen ? (
                        <button type="button" className={viewMoreReplies} onClick={() => setRepliesOpen(true)}>
                            View {comment.reply_count} {comment.reply_count === 1 ? 'reply' : 'replies'}
                        </button>
                    ) : (
                        <div className={replyList}>
                            {repliesLoading ? <p className={commentText}>Loading replies...</p> : null}
                            {replies.map((reply) => (
                                <CommentRow
                                    key={reply.id}
                                    comment={reply}
                                    isReply
                                    editingId={editingId}
                                    editText={editText}
                                    openMenuId={openMenuId}
                                    replyingToId={replyingToId}
                                    onStartReply={onStartReply}
                                    onStartEdit={onStartEdit}
                                    onSaveEdit={onSaveEdit}
                                    onCancelEdit={onCancelEdit}
                                    onDelete={onDelete}
                                    onCopy={onCopy}
                                    onToggleMenu={onToggleMenu}
                                    onEditTextChange={onEditTextChange}
                                    isSaving={isSaving}
                                />
                            ))}
                        </div>
                    )}
                </>
            ) : null}
        </div>
    )
}

export function CommentsSection({ newsId }: CommentsSectionProps) {
    const [limit, setLimit] = useState(20)
    const { data, isLoading, isError } = useComments(newsId, limit)
    const list = data?.items ?? []

    const addComment = useAddComment(newsId)
    const editComment = useEditComment(newsId)
    const deleteComment = useDeleteComment(newsId)

    const [newCommentText, setNewCommentText] = useState('')
    const [replyingTo, setReplyingTo] = useState<{ id: number; author: string } | null>(null)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editText, setEditText] = useState('')
    const [openMenuId, setOpenMenuId] = useState<number | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    function handlePost() {
        const content = newCommentText.trim()
        if (!content) return

        addComment.mutate(
            { content, parent_comment_id: replyingTo?.id ?? null },
            { onSuccess: () => setNewCommentText('') },
        )
        setReplyingTo(null)
    }

    function startReply(id: number, author: string) {
        setReplyingTo({ id, author })
        inputRef.current?.focus()
    }

    function startEdit(comment: Comment) {
        setEditingId(comment.id)
        setEditText(comment.content)
        setOpenMenuId(null)
    }

    function saveEdit(commentId: number) {
        editComment.mutate(
            { commentId, content: editText },
            { onSuccess: () => setEditingId(null) },
        )
    }

    function handleDelete(commentId: number) {
        deleteComment.mutate(commentId)
        setOpenMenuId(null)
    }

    function copyText(text: string) {
        navigator.clipboard?.writeText(text)
        setOpenMenuId(null)
    }

    return (
        <div className={section}>
            <div className={statsRow}>
                <span>{list.length} Comments</span>
            </div>

            {isLoading ? <p className={commentText}>Loading comments...</p> : null}
            {isError ? <p className={commentText}>Couldn't load comments.</p> : null}
            {!isLoading && !isError && list.length === 0 ? (
                <p className={commentText}>No comments yet. Be the first to comment.</p>
            ) : null}

            <div className={commentList}>
                {list.map((comment) => (
                    <CommentRow
                        key={comment.id}
                        comment={comment}
                        editingId={editingId}
                        editText={editText}
                        openMenuId={openMenuId}
                        replyingToId={replyingTo?.id ?? null}
                        onStartReply={startReply}
                        onStartEdit={startEdit}
                        onSaveEdit={saveEdit}
                        onCancelEdit={() => setEditingId(null)}
                        onDelete={handleDelete}
                        onCopy={copyText}
                        onToggleMenu={setOpenMenuId}
                        onEditTextChange={setEditText}
                        isSaving={editComment.isPending}
                    />
                ))}
            </div>

            {!isLoading && data?.next_cursor ? (
                <button type="button" className={viewAllComments} onClick={() => setLimit((prev) => prev + 20)}>
                    Load more comments
                </button>
            ) : null}

            <div className={composerWrap}>
                {replyingTo ? (
                    <div className={replyBanner}>
                        <span>Replying to @{replyingTo.author}</span>
                        <button type="button" className={replyBannerClose} onClick={() => setReplyingTo(null)}>
                            <X size={14} />
                        </button>
                    </div>
                ) : null}
                <div className={composer}>
                    <span className={commentAvatar} style={{ background: avatarColor(0) }}>Y</span>
                    <input
                        ref={inputRef}
                        className={composerInput}
                        placeholder="Write a comment..."
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handlePost()}
                        disabled={addComment.isPending}
                    />
                    <button type="button" className={composerSend} disabled={!newCommentText.trim() || addComment.isPending} onClick={handlePost}>
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}