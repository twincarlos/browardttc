import './Status.css';

export default function Status({ status }: { status: string }) {
  return (
    <span className={`status ${status} b bra p-1-a fs-xs`}>{status.split('_').join(' ')}</span>
  );
}
