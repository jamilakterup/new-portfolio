// import {motion} from "framer-motion";

const ModalBox = ({isOpen, closeModal}) => {
    console.log(isOpen, closeModal);
    return (
        <>

            <div className={`modal ${isOpen ? 'is-open' : ''}`}>
                <div className="modal-content">

                    <button onClick={closeModal}>Close</button>
                </div>
            </div>

            {/* <dialog id="i" className="modal backdrop-blur-md">
                <form method="dialog" className="modal-box bg-[#250821]">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h2 className="py-4">{modal.title}</h2>
                    <motion.img className="h-48 w-full object-cover object-top hover:object-bottom duration-[3s]" src={modal.img} alt="modal image" />
                    <p className="my-4 text-justify">{modal.des}</p>
                    {
                        modal?.details?.map((data, i) => (
                            <div key={i}>
                                <div className="flex items-center gap-3">
                                    <span>{data.icon}</span>
                                    <span>{data.desc}</span>
                                </div>
                            </div>
                        ))
                    }
                </form>
            </dialog> */}
        </>
    );
};

export default ModalBox;