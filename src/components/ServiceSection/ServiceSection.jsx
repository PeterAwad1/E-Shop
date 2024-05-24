import { FaShippingFast } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
function ServiceSection() {
  return (
    <div>
      <div className="container my-24 ">
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-8">
          <div className="flex items-start gap-4">
            {/* Free Shipping */}
            <FaShippingFast className="text-primary text-5xl" />
            <div className="flex flex-col gap-1 justify-center">
              <p className="font-bold text-xl">Free Shipping</p>
              <p className="text-gray-500 opacity-80  text-sm">
                Free Shipping On All Order
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            {/* Safe Money */}
            <TbPigMoney className="text-primary text-5xl" />
            <div className="flex flex-col gap-1 justify-center">
              <p className="font-bold text-xl">Safe Money</p>
              <p className="text-gray-500 opacity-80  text-sm">
                30 Days Money Back
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            {/* Secure Payment */}
            <RiSecurePaymentLine className="text-primary text-5xl" />
            <div className="flex flex-col gap-1 justify-center">
              {" "}
              <p className="font-bold text-xl">Secure Payment</p>
              <p className="text-gray-500 opacity-80  text-sm">
                All Payment Secure
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            {/* Online Supoort 24/7 */}
            <MdSupportAgent className="text-primary text-5xl" />
            <div className="flex flex-col gap-1 justify-center">
              {" "}
              <p className="font-bold text-xl">Online Supoort 24/7</p>
              <p className="text-gray-500 opacity-80  text-sm">
                Technical Support 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
