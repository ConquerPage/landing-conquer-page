export function ContentAccordion({ description }: { description: string }) {
  return (
    <div className="content-placeholder">
      <div
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 1rem 3rem rgba(0,0,0,.175)!important',
          padding: '10px',
        }}
      >
        <span>{description}</span>
      </div>
    </div>
  );
}
