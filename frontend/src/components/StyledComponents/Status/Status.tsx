import './Status.css';

export default function Status({ status }: { status: string }) {
  return (
    <span className={`status ${status} bs-s bw-1 br-1 p-1-a fs-xs`}>{status.split('_').join(' ')}</span>
  );
}
