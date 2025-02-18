type ModalPaymentProps = {
  isOpen?: () => void;
  children: React.ReactNode;
};

const ModalPayment: React.FC<ModalPaymentProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full z-30 fixed top-0 left-0 h-screen bg-gray-800 bg-opacity-40 overflow-hidden">
      <div className="w-full">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalPayment;
