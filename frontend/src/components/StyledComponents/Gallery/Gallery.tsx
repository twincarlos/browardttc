import './Gallery.css';

export default function Gallery({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="gallery">{children}</div>
    </div>
  );
}
