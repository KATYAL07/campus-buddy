'use client';

import { useState } from 'react';

export default function ReportButton({ targetId, targetType = 'post', label = 'Report' }) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('');

  async function submit(event) {
    event.preventDefault();
    setStatus('');
    const res = await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetId, targetType, reason }),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      setStatus(payload.error || 'Could not send the report.');
      return;
    }
    setStatus('Report sent. Thank you.');
    setOpen(false);
    setReason('');
  }

  return (
    <span>
      <button type="button" className="meta" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--red)' }} onClick={() => setOpen((v) => !v)}>
        {label}
      </button>
      {open ? (
        <form onSubmit={submit} style={{ marginTop: 8 }}>
          <textarea className="textarea" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="What is wrong with this?" required aria-label="Report reason" />
          <button className="button secondary" type="submit" style={{ marginTop: 8 }}>Send report</button>
        </form>
      ) : null}
      {status ? <p className="meta" role="status">{status}</p> : null}
    </span>
  );
}
