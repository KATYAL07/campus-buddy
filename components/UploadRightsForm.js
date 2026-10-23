'use client';

import { useState } from 'react';

export default function UploadRightsForm({ action = '/api/posts', submitLabel = 'Share resource' }) {
  const [canShare, setCanShare] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    if (!canShare) {
      setError('Confirm you have the right to share this material.');
      return;
    }
    setError('');
    setBusy(true);
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const res = await fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(payload.error || 'Could not share this resource.');
        return;
      }
      event.currentTarget.reset();
      setCanShare(false);
      if (typeof window !== 'undefined') window.location.reload();
    } catch {
      setError('Network error. Try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="card" onSubmit={onSubmit} style={{ marginTop: 24, maxWidth: 640 }}>
      <h3>Share a resource</h3>
      <input className="input" name="title" placeholder="Title" aria-label="Title" required />
      <textarea className="textarea" name="description" placeholder="What is this?" aria-label="Description" required style={{ marginTop: 8 }} />
      <label className="meta" style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 12 }}>
        <input
          type="checkbox"
          checked={canShare}
          onChange={(e) => setCanShare(e.target.checked)}
          aria-label="I have the right to share this material"
        />
        I have the right to share this material and it is safe for campus.
      </label>
      {error ? <p className="meta" role="alert" style={{ color: 'var(--red)', marginTop: 8 }}>{error}</p> : null}
      <button className="button accent" type="submit" disabled={!canShare || busy} style={{ marginTop: 12 }}>
        {busy ? 'Sharing…' : submitLabel}
      </button>
    </form>
  );
}
