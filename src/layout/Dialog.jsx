const Dialog = ({ children, modalRef }) => {
  return (
    <dialog ref={modalRef} className="modal">
      <form method="dialog" className="modal-box">
        {children}
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Dialog;
