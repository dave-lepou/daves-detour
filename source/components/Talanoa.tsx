import { useEffect, useState, type FormEvent } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'

interface TalanoaEntry {
  id: string
  user_id: string
  author_name: string
  role_context: string | null
  message: string
  created_at: string
}

export default function Talanoa() {
  const { user } = useAuth()

  const [entries, setEntries] = useState<TalanoaEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Create form state
  const [authorName, setAuthorName] = useState('')
  const [roleContext, setRoleContext] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Edit form state
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editAuthorName, setEditAuthorName] = useState('')
  const [editRoleContext, setEditRoleContext] = useState('')
  const [editMessage, setEditMessage] = useState('')
  const [savingEdit, setSavingEdit] = useState(false)

  // Delete state
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // Pre-fill author name from user_metadata.display_name when signed in
  useEffect(() => {
    if (user && !authorName) {
      const displayName =
        (typeof user.user_metadata?.display_name === 'string' &&
          user.user_metadata.display_name.trim()) ||
        user.email?.split('@')[0] ||
        ''
      setAuthorName(displayName)
    }
  }, [user])

  // READ: Anyone can read
  async function fetchEntries() {
    setLoading(true)
    setError(null)

    const { data, error: fetchError } = await supabase
      .from('testimonials')
      .select('id, user_id, author_name, role_context, message, created_at')
      .order('created_at', { ascending: false })

    if (fetchError) {
      setError('Could not load Talanoa posts right now.')
    } else {
      setEntries(data ?? [])
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  // CREATE: Signed-in users only
  async function handleCreate(e: FormEvent) {
    e.preventDefault()
    if (!user) {
      setError('Please sign in using the top navigation bar to post.')
      return
    }

    const cleanName = authorName.trim()
    const cleanRole = roleContext.trim()
    const cleanMessage = message.trim()

    if (!cleanName || !cleanMessage) return

    setSubmitting(true)
    setError(null)

    const { data, error: insertError } = await supabase
      .from('testimonials')
      .insert({
        user_id: user.id,
        author_name: cleanName,
        role_context: cleanRole || null,
        message: cleanMessage,
      })
      .select('id, user_id, author_name, role_context, message, created_at')
      .single()

    if (insertError) {
      setError('Failed to publish your post. Please try again.')
    } else if (data) {
      setEntries((prev) => [data, ...prev])
      setMessage('')
      setRoleContext('')
    }

    setSubmitting(false)
  }

  function startEditing(entry: TalanoaEntry) {
    if (!user || user.id !== entry.user_id) return
    setEditingId(entry.id)
    setEditAuthorName(entry.author_name)
    setEditRoleContext(entry.role_context ?? '')
    setEditMessage(entry.message)
    setError(null)
  }

  function cancelEditing() {
    setEditingId(null)
    setEditAuthorName('')
    setEditRoleContext('')
    setEditMessage('')
  }

  // UPDATE: Owner only
  async function handleUpdate(id: string) {
    if (!user) return
    const cleanName = editAuthorName.trim()
    const cleanRole = editRoleContext.trim()
    const cleanMessage = editMessage.trim()

    if (!cleanName || !cleanMessage) return

    setSavingEdit(true)
    setError(null)

    const { data, error: updateError } = await supabase
      .from('testimonials')
      .update({
        author_name: cleanName,
        role_context: cleanRole || null,
        message: cleanMessage,
      })
      .eq('id', id)
      .eq('user_id', user.id)
      .select('id, user_id, author_name, role_context, message, created_at')
      .single()

    if (updateError) {
      setError('Could not update your post.')
    } else if (data) {
      setEntries((prev) => prev.map((item) => (item.id === id ? data : item)))
      cancelEditing()
    }

    setSavingEdit(false)
  }

  // DELETE: Owner only
  async function handleDelete(id: string) {
    if (!user) return

    setDeletingId(id)
    setError(null)

    const { error: deleteError } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id)

    if (deleteError) {
      setError('Could not delete your post.')
    } else {
      setEntries((prev) => prev.filter((item) => item.id !== id))
    }

    setDeletingId(null)
  }

  return (
    <section className="space-y-6 font-sans text-[#e8fbf5]">
      {/* Create Form (Authenticated Users) */}
      <div className="bg-slate-950/75 border border-[#5debc0]/45 rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-bold text-[#5debc0]">
            Add to the Talanoa
          </h2>
          <span className="text-xs text-slate-300">
            {user
              ? 'Signed in — you can post, edit & delete your entries'
              : 'Public read access — sign in above to post'}
          </span>
        </div>

        {user ? (
          <form onSubmit={handleCreate} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Your name *"
                className="w-full rounded-xl bg-slate-900/90 border border-[#5debc0]/35 px-4 py-2.5 text-sm text-[#e8fbf5] placeholder:text-slate-400 focus:outline-none focus:border-[#5debc0]"
              />
              <input
                type="text"
                value={roleContext}
                onChange={(e) => setRoleContext(e.target.value)}
                placeholder="Role / Cohort / Context (optional)"
                className="w-full rounded-xl bg-slate-900/90 border border-[#5debc0]/35 px-4 py-2.5 text-sm text-[#e8fbf5] placeholder:text-slate-400 focus:outline-none focus:border-[#5debc0]"
              />
            </div>

            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your kōrero, feedback, or reflection..."
              className="w-full rounded-xl bg-slate-900/90 border border-[#5debc0]/35 px-4 py-3 text-sm text-[#e8fbf5] placeholder:text-slate-400 focus:outline-none focus:border-[#5debc0]"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting || !authorName.trim() || !message.trim()}
                className="px-5 py-2 rounded-full text-sm font-bold bg-[#5debc0] text-[#022c22] hover:opacity-90 disabled:opacity-45 cursor-pointer transition"
              >
                {submitting ? 'Posting...' : 'Post to Talanoa'}
              </button>
            </div>
          </form>
        ) : (
          <p className="text-sm text-slate-300 bg-slate-900/70 rounded-xl p-4 border border-slate-700/70">
            Anyone can read the Talanoa below. Click <strong>Sign In</strong> in
            the top navigation bar to create, update, or delete your own posts.
          </p>
        )}

        {error && (
          <p
            role="alert"
            className="text-sm font-semibold text-rose-300 bg-rose-950/50 border border-rose-400/40 rounded-xl px-4 py-2.5"
          >
            {error}
          </p>
        )}
      </div>

      {/* Feed (Public Read) */}
      <div className="space-y-4">
        {loading ? (
          <div className="bg-slate-950/65 border border-[#5debc0]/30 rounded-2xl p-6 text-center text-sm text-slate-300">
            Loading Talanoa...
          </div>
        ) : entries.length === 0 ? (
          <div className="bg-slate-950/65 border border-[#5debc0]/30 rounded-2xl p-6 text-center text-sm text-slate-300">
            No entries yet. Be the first to share in Talanoa!
          </div>
        ) : (
          entries.map((entry) => {
            const isOwner = Boolean(user && user.id === entry.user_id)
            const isEditing = editingId === entry.id

            return (
              <article
                key={entry.id}
                className="bg-[aliceblue] text-slate-800 rounded-2xl p-5 sm:p-6 space-y-3 shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                  <div>
                    <span className="font-bold text-[#047f5c]">
                      {entry.author_name}
                    </span>
                    {entry.role_context && (
                      <span className="ml-2 text-xs font-medium text-slate-600">
                        · {entry.role_context}
                      </span>
                    )}
                    {isOwner && (
                      <span className="ml-2 text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-[#5debc0]/45 text-[#022c22]">
                        You
                      </span>
                    )}
                  </div>

                  <time className="text-xs text-slate-500">
                    {new Date(entry.created_at).toLocaleDateString('en-NZ', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                </div>

                {isEditing ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <input
                        type="text"
                        value={editAuthorName}
                        onChange={(e) => setEditAuthorName(e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl bg-white border border-slate-300 px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#047f5c]"
                      />
                      <input
                        type="text"
                        value={editRoleContext}
                        onChange={(e) => setEditRoleContext(e.target.value)}
                        placeholder="Role / Context (optional)"
                        className="w-full rounded-xl bg-white border border-slate-300 px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#047f5c]"
                      />
                    </div>
                    <textarea
                      rows={3}
                      value={editMessage}
                      onChange={(e) => setEditMessage(e.target.value)}
                      className="w-full rounded-xl bg-white border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#047f5c]"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={cancelEditing}
                        disabled={savingEdit}
                        className="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdate(entry.id)}
                        disabled={
                          savingEdit ||
                          !editAuthorName.trim() ||
                          !editMessage.trim()
                        }
                        className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#047f5c] text-white hover:opacity-90 disabled:opacity-45 cursor-pointer"
                      >
                        {savingEdit ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line text-left">
                    {entry.message}
                  </p>
                )}

                {isOwner && !isEditing && (
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => startEditing(entry)}
                      className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer transition"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(entry.id)}
                      disabled={deletingId === entry.id}
                      className="px-3.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 hover:bg-rose-200 disabled:opacity-50 cursor-pointer transition"
                    >
                      {deletingId === entry.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                )}
              </article>
            )
          })
        )}
      </div>
    </section>
  )
}
