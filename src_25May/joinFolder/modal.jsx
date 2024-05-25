function Modal({ setModal }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={() => setModal(false)}></div>
      <div className="modalContent">
        <h2>Terms and Conditions</h2>
        <h3>1. YOUR AGREEMENT</h3>
        <p>
          By using this Site, you agree to be bound by, and to comply with,
          these Terms and Conditions. If you do not agree to these Terms and
          Conditions, please do not use this site. PLEASE NOTE: We reserve the
          right, at our sole discretion, to change, modify or otherwise alter
          these Terms and Conditions at any time. Unless otherwise indicated,
          amendments will become effective immediately. Please review these
          Terms and Conditions periodically. Your continued use of the Site
          following the posting of changes and/or modifications will constitute
          your acceptance of the revised Terms and Conditions and the
          reasonableness of these standards for notice of changes. For your
          information, this page was last updated as of the date at the top of
          these terms and conditions.
        </p>
        <h3>2. PRIVACY </h3>
        <p>
          Please review our Privacy Policy, which also governs your visit to
          this Site, to understand our practices.
        </p>
        <h3>3. LINKED SITES</h3>
        <p>
          This Site may contain links to other independent third-party Web sites
          ("Linked Sites”). These Linked Sites are provided solely as a
          convenience to our visitors. Such Linked Sites are not under our
          control, and we are not responsible for and does not endorse the
          content of such Linked Sites, including any information or materials
          contained on such Linked Sites. You will need to make your own
          independent judgment regarding your interaction with these Linked
          Sites.
        </p>
        <button className="closeModal" onClick={() => setModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
