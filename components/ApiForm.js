'use client';

import { useState } from 'react';

export default function ApiForm({ action, method = 'post', children, submitLabel = 'Submit', className = '' }) {
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setError('');
    setBusy(true);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(action, {
        method: method.toUpperCase(),
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(payload.error || 'Something went wrong. Try again.');
        return;
      }
      form.reset();
      if (typeof window !== 'undefined') window.location.reload();
    } catch {
      setError('Network error. Check your connection and try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
      {error ? <p className="meta" role="alert" style={{ color: 'var(--red)', marginTop: 8 }}>{error}</p> : null}
      <button className="button accent" type="submit" disabled={busy} style={{ marginTop: 12 }}>
        {busy ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}
